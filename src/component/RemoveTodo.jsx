import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

export default function RemoveTodo({ id, handelModalClose, setRender }) {
  const [loading, setLoading] = useState(false);
  async function handleDeleteBtn() {
    setLoading(true);
    await axios
      .delete(`http://localhost:5555/todo/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar(' Deleted successfully!', { variant: 'success' });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error happing', { variant: 'error' });
        console.log(error);
      });
    setRender((prev) => !prev);
    handelModalClose('removeModal');
  }
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <h1 className=" font-semibold">Delete Confirmation</h1>
          <p className=" p-2 bg-red-300 text-red-900 my-8 ">
            Are you sure you want to delete this?
          </p>
          <div className=" flex justify-end">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className=" text-[#6C63FF]   active:bg-[#6C63FF] active:text-white active:border-white rounded px-3 py-1"
              onClick={() => handelModalClose('removeModal')}
            >
              CANCEL
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={handleDeleteBtn}
              className="text-white bg-red-500 border-[1px] border-red-500 active:bg-red-500 rounded px-3 py-1"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
}
