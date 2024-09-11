import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../TodoContext';
import axios from 'axios';

function debonce() {
  useEffect(() => {});
}

export default function SearchBar() {
  const { setSearch, setTodoList } = useContext(TodoContext);
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios
        .get(`http://localhost:5555/todo/${value}`)
        .then((response) => {
          setTodoList(response.data.data);
        })
        .catch((error) => {
          setTodoList([]);
        });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value]);

  function handleChange(value) {
    setValue(value);
  }
  function handleClick() {
    setSearch(value);
  }

  return (
    <>
      <div className=" flex w-[500px] rounded-lg border-[1px] border-[#6C63FF]  border-[#6b63ffbf] dark:border-white">
        <input
          type="text"
          name="search"
          value={value}
          className=" w-[480px] p-2 rounded-lg focus:border-none active:border-none dark:bg-black dark:text-white "
          onChange={(e) => handleChange(e.target.value)}
        />
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          className=" m-2 fill-[#6C63FF] dark:fill-white"
          onClick={handleClick}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.7773 20.184L15.9056 15.312H15.8531C17.3547 13.5415 18.1136 11.2588 17.9709 8.94156C17.8282 6.62433 16.7951 4.45202 15.0876 2.87905C13.3801 1.30608 11.1306 0.454303 8.80958 0.501892C6.48855 0.549481 4.27583 1.49275 2.63427 3.13439C0.992706 4.77602 0.0494786 6.98885 0.00189181 9.30999C-0.045695 11.6311 0.806045 13.8808 2.37894 15.5883C3.95184 17.2958 6.12404 18.329 8.44117 18.4717C10.7583 18.6144 13.0408 17.8555 14.8113 16.3539C14.8113 16.3539 14.8113 16.3914 14.8113 16.4063L19.6831 21.2783C19.7527 21.3485 19.8356 21.4043 19.927 21.4424C20.0183 21.4804 20.1163 21.5 20.2152 21.5C20.3141 21.5 20.4121 21.4804 20.5034 21.4424C20.5948 21.4043 20.6777 21.3485 20.7473 21.2783C20.8242 21.2103 20.8862 21.1272 20.9296 21.0342C20.9731 20.9412 20.9969 20.8402 20.9997 20.7376C21.0025 20.635 20.9842 20.533 20.946 20.4377C20.9077 20.3425 20.8503 20.2561 20.7773 20.184ZM9.00276 16.9685C7.5204 16.9685 6.07133 16.5289 4.83879 15.7053C3.60625 14.8817 2.64561 13.7111 2.07833 12.3415C1.51106 10.9719 1.36263 9.46488 1.65183 8.01094C1.94102 6.55699 2.65485 5.22146 3.70303 4.17322C4.75122 3.12499 6.08669 2.41113 7.54057 2.12192C8.99445 1.83272 10.5014 1.98115 11.871 2.54845C13.2405 3.11575 14.411 4.07644 15.2346 5.30904C16.0581 6.54163 16.4977 7.99077 16.4977 9.4732C16.4977 10.4575 16.3038 11.4322 15.9272 12.3415C15.5505 13.2509 14.9985 14.0772 14.3025 14.7732C13.6065 15.4692 12.7803 16.0213 11.871 16.3979C10.9616 16.7746 9.98701 16.9685 9.00276 16.9685Z" />
        </svg>
      </div>
    </>
  );
}
