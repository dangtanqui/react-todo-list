import React, { useState } from "react";

const Form = ({ setTodos, state, setState }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputText") {
      setInputText(value);
    } else {
      setState(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random() * 1000,
        text: inputText,
        completed: false,
      },
    ]);
    setInputText("");
    setState('all');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        name="inputText"
        value={inputText}
        onChange={handleChange}
      />
      <button type="submit" className="todo-button">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          className="filter-todo"
          name="state"
          value={state}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
