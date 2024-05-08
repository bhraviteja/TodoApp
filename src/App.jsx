import { useState } from "react";
import "./App.css";
import DisplayTodoList from "./TodoApp/DisplayTodoList";

import TodoApp from "./TodoApp/TodoApp";

function App() {
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(false);
  const [updatedtodo, setUpdatedTodo] = useState(null);
 
 
  const todoData = (data) => {
    if (editIndex !== false) {
      const updatedTodoList = [...todo];
      updatedTodoList[editIndex] = data;
      setTodo(updatedTodoList);
    } else {
      setTodo([...todo, data]);
    }

    setEditIndex(false);
    setUpdatedTodo(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setUpdatedTodo(todo[index]);
  };
 
  return (
    <div className="mainContainer">
      <TodoApp
        todoData={todoData}
        updatedtodo={updatedtodo}
        editIndex={editIndex}
      />
      <DisplayTodoList
        listData={todo}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
