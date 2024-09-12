import { useState } from 'react';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  const { setSelectTodo } = useContext(TodoContext);
  function handleChange(value) {
    setSelectTodo(value);
  }
  return (
    <div className=" flex">
      <SearchBar />
      <select
        className=" mx-2 rounded-lg bg-[#6C63FF] py-2 px-1 text-white"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value={'all'}>All</option>
        <option value={'complete'}>Complete</option>
        <option value={'incomplete'}>Incomplete</option>
      </select>
      <DarkModeSwitch />
    </div>
  );
}
