import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("all");

  useEffect(() => {
    const getTodosFromLocalStorage = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      }
      setTodos(JSON.parse(localStorage.getItem("todos")));
    };
    getTodosFromLocalStorage();
  }, []);

  useEffect(() => {
    const saveTodosToLocalStorage = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveTodosToLocalStorage();
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setTodos={setTodos} state={state} setState={setState} />
      <TodoList todos={todos} setTodos={setTodos} state={state} />
    </div>
  );
};

export default App;
