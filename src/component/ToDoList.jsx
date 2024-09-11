import { useEffect, useRef, useState, useContext } from 'react';
import Modal from './Modal';
import TODO from './ToDo';
import EditTodo from './EditTodo';
import RemoveTodo from './RemoveTodo';
import AddIcon from '../assets/AddIcon';
import AddTodo from './AddTodo';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import emptyImage from '../assets/emptyimage.png';
import { TodoContext } from '../TodoContext';
import LoadingIcon from '../assets/loadingIcon.jsx';

export default function ToDoList({ items }) {
  const {
    selectTodo,
    search,
    setSearch,
    setSelectTodo,
    todoList,
    setTodoList,
  } = useContext(TodoContext);
  const [selectedTodo, setSelectedTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);

  const editModal = useRef();
  const removeTodoModal = useRef();
  const addTodoModal = useRef();

  useEffect(() => {
    if (selectTodo) {
      const value = { find: selectTodo };
      setSearch('');
      setLoading(true);
      axios
        .put('http://localhost:5555/todo/', value)
        .then((response) => {
          setLoading(false);
          setTodoList(response.data.data);
        })
        .catch((error) => {
          setLoading(false);
          setTodoList([]);
          enqueueSnackbar('An error happened.Check console', {
            variant: 'error',
          });
          console.log(error);
        });
    }
  }, [render, selectTodo]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/todo/${search}`)
      .then((response) => {
        setLoading(false);
        setTodoList(response.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setTodoList([]);
      });
  }, [search]);

  function handelModalOpen(modal, selectedTodo) {
    if (modal === 'addTodoModal') {
      addTodoModal.current.open();
    } else {
      setSelectedTodo(selectedTodo);
      if (modal === 'editModal') {
        editModal.current.open();
      }
      if (modal === 'removeModal') {
        removeTodoModal.current.open();
      }
    }
  }

  function handelModalClose(modal) {
    if (modal === 'addTodoModal') {
      addTodoModal.current.close();
    }
    if (modal === 'editModal') {
      editModal.current.close();
    }
    if (modal === 'removeModal') {
      removeTodoModal.current.close();
    }
  }

  return (
    <>
      <Modal ref={editModal}>
        <EditTodo
          handelModalClose={handelModalClose}
          id={selectedTodo._id}
          value={selectedTodo.note}
          setRender={setRender}
        />
      </Modal>
      <Modal ref={removeTodoModal}>
        <RemoveTodo
          handelModalClose={handelModalClose}
          id={selectedTodo._id}
          setRender={setRender}
        />
      </Modal>
      <Modal ref={addTodoModal}>
        <AddTodo handelModalClose={handelModalClose} setRender={setRender} />
      </Modal>
      <AddIcon
        onClick={handelModalOpen}
        className=" fixed top-[500px] right-40 fill-[#6C63FF] active:fill-[#534CC2]"
      />
      <ul className="w-[700px] mt-6">
        {loading ? (
          <LoadingIcon className=" mx-auto animate-spin" />
        ) : (
          <>
            {todoList.length > 0 ? (
              todoList.map((item) => (
                <TODO
                  key={item._id}
                  setRender={setRender}
                  item={item}
                  openModal={handelModalOpen}
                />
              ))
            ) : (
              <div className="mt-8 ">
                {/* biome-ignore lint/a11y/useAltText: <explanation> */}
                <img
                  src={emptyImage}
                  className=" mx-auto  w-[210px] h-[160px]"
                />
                <p className="text-center font-medium dark:text-white">
                  Not Found any Todo!
                </p>
              </div>
            )}
          </>
        )}
      </ul>
    </>
  );
}
