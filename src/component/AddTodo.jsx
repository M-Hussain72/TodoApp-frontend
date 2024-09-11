import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

export default function AddTodo({ handelModalClose, setRender }) {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setNote(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await axios
      .post('https://todo-web-backend-29t7.onrender.com/todo/', { note })
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. please Check console');
        console.log(error);
      });
    setNote('');
    setRender((prev) => !prev);
    handelModalClose('addTodoModal');
  }
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className=" font-medium text-center">NEW NOTE</h1>
          <input
            type="text"
            name="text"
            value={note}
            className="  w-[440px] p-1 mt-2 mb-16 text-md border-[1px] focus:outline-none border-[#6C63FF] rounded placeholder:text-[#6b63ff59]"
            placeholder=" Input your note..."
            onChange={(e) => handleChange(e)}
          />
          <div className=" flex justify-between">
            <button
              type="button"
              className=" text-[rgb(108,99,255)] border-[1px] border-[#6C63FF] active:bg-[#6C63FF] active:text-white active:border-white rounded px-3 py-1"
              onClick={() => handelModalClose('addTodoModal')}
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
