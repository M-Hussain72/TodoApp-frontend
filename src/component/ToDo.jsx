import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useContext, useState } from 'react';

export default function TODO({ item, openModal, setRender }) {
  const [isChecked, setIsChecked] = useState(item.isComplete);

  async function handleChange(checked) {
    const isComplete = {
      isComplete: checked,
    };
    await axios
      .put(`https://todo-web-backend-29t7.onrender.com/todo/complete/${item._id}`, isComplete)
      .then()
      .catch((error) => {
        enqueueSnackbar('An error happened. please Check console', {
          variant: 'error',
        });
        console.log(error);
      });
    setIsChecked((prev) => !prev);
    setRender((prev) => !prev);
  }

  function handleModal(modalName, selectedTodo) {
    openModal(modalName, selectedTodo);
  }

  return (
    <li className="flex border-b-[0.5px] border-[#6C63FF] group  py-3">
      <input
        type="checkbox"
        name=" checkbox"
        className={
          'w-4   h-4 mt-1 mr-2 accent-[#6C63FF] cursor-pointer dark:bg-gray-700  dark:border-gray-600'
        }
        onClick={(e) => handleChange(e.target.checked)}
        checked={isChecked}
      />
      <label
        className={
          isChecked
            ? ' line-through text-[#252525] opacity-50 dark:text-white '
            : ' dark:text-white'
        }
        onClick={() => handleChange(!isChecked)}
      >
        {item.note}
      </label>
      <div className=" ml-auto flex ">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          width="18"
          className=" hidden cursor-pointer group-hover:block  stroke-[#CDCDCD] hover:stroke-[#6C63FF] mr-3"
          onClick={() => handleModal('editModal', item)}
          height="19"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <svg
          width="22"
          height="22"
          className=" hidden cursor-pointer group-hover:block stroke-[#CDCDCD] hover:stroke-[#E50000]"
          onClick={() => handleModal('removeModal', item)}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z" />
          <path d="M14.625 3.75H3.375" strokeLinecap="round" />
          <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" />
          <path d="M10.5 9V12.75" strokeLinecap="round" />
          <path d="M7.5 9V12.75" strokeLinecap="round" />
        </svg>
      </div>
    </li>
  );
}
