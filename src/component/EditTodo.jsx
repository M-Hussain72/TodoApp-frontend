import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';

export default function EditTodo({ value, id, handelModalClose, setRender }) {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    if (value) {
      setNote(value); // Set note when the modal opens
    }
  }, [value]);

  function handleChange(value) {
    setNote(value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await axios
      .put(`http://localhost:5555/todo/${id}`, { note: note })
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Todo Update successfully', { variant: 'success' });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error happened. please Check console', {
          variant: 'error',
        });
        console.log(error);
      });
    setNote('');
    setRender((prev) => !prev);
    handelModalClose('editModal');
  }
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className=" font-medium text-center">EDIT NOTE</h1>
          <input
            value={note}
            className="  w-[440px] p-1 mt-2 mb-16 text-md border-[1px] focus:outline-none border-[#6C63FF] rounded placeholder:text-[#6b63ff59]"
            placeholder=" Input your note..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className=" flex justify-between">
            <button
              type="button"
              className=" text-[rgb(108,99,255)] border-[1px] border-[#6C63FF] active:bg-[#6C63FF] active:text-white active:border-white rounded px-3 py-1"
              onClick={() => handelModalClose('editModal')}
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="text-white bg-[#6C63FF] border-[1px] border-[#6C63FF] active:bg-[#554dec] rounded px-3 py-1"
            >
              APPLY
            </button>
          </div>
        </form>
      )}
    </>
  );
}
