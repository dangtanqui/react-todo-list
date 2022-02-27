import React from "react";

const Todo = ({ todo, setTodos }) => {
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((el) => el.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((el) => {
        if (el.id === todo.id)
          return {
            ...el,
            completed: !el.completed,
          };
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && 'completed'}`}>{todo.text}</li>
      <button className="complete-btn" onClick={handleComplete}>
        <i className="fa fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleDelete}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
