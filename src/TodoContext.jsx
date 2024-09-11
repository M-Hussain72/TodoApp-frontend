import generateUniqueId from 'generate-unique-id';
import { createContext, useReducer, useState } from 'react';

export const TodoContext = createContext({
  setSelectTodo: () => {},
  setTodoList: () => {},
  todoList: '',
  search: '',
  selectTodo: '',
});

// export default function TodoReducer(state, action) {
//   if (action.type === 'ADD_NOTE') {
//     const id = generateUniqueId({
//       length: 8,
//       useLetters: false,
//     });
//     return [...state, { id: id, ...action.item }];
//   }

//   if (action.type === 'EDIT_NOTE') {
//     const exitingIndex = state.findIndex((item) => item.id === action.item.id);
//     const updateState = [...state];
//     updateState[exitingIndex].note = action.item.note;
//     return updateState;
//   }

//   if (action.type === 'DELETE_NOTE') {
//     const exitingIndex = state.findIndex((item) => item.id === action.id);
//     const updateState = [...state];
//     console.log(exitingIndex);
//     updateState.slice(exitingIndex, 1);
//     return updateState;
//   }
// }

export function TodoProvider({ children }) {
  // const initialTodos = [];
  // const [state, dispatch] = useReducer(TodoReducer, initialTodos);

  // function addTodo(item) {
  //   dispatch({
  //     type: 'ADD_NOTE',
  //     item: item,
  //   });
  // }

  // function editNote(item) {
  //   dispatch({
  //     type: 'EDIT_NOTE',
  //     item: item,
  //   });
  // }

  // function removeTodo(id) {
  //   dispatch({
  //     type: 'DELETE_NOTE',
  //     id: id,
  //   });
  // }
  const [selectTodo, setSelectTodo] = useState('all');
  const [search, setSearch] = useState('');
  const [todoList, setTodoList] = useState([]); // Using React state

  const value = {
    selectTodo,
    search,
    todoList,
    setTodoList,
    setSelectTodo,
    setSearch,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
