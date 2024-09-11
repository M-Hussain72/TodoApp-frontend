import Header from './component/header';
import { TodoProvider } from './TodoContext';
import ToDoList from './component/ToDoList';

export default function App() {
  return (
    <div className=" min-h-screen dark:bg-black">
      <div className=" w-[800px] mx-auto">
        <h1 className=" py-4 text-xl font-bold  text-center dark:text-white">
          TODO LIST
        </h1>
        <TodoProvider>
          <Header />
          <ToDoList />
        </TodoProvider>
      </div>
    </div>
  );
}
