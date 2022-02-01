import React from "react";
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (value) => {
    setTodo(value);
  };

  const handleAddTodo = (todo) => {
    let newTodo = [...todoList, todo];
    setTodoList(newTodo);
    setTodo("");
  };

  return (
    <div className="todo-con">
      <h1>My to-do list</h1>
      <input
        type="text"
        placeholder="enter in a todo"
        onChange={(e) => handleChange(e.target.value)}
        value={todo}
      />
      <button onClick={() => handleAddTodo(todo)}>Add</button>
      <div className="todo-list">
        {todoList.map((item, idx) => {
          return (
            <div key={idx} className="todo-item">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
