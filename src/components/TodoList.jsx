import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, state }) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(() => {
      switch (state) {
        case "completed":
          return todos.filter((el) => el.completed === true);
        case "uncompleted":
          return todos.filter((el) => el.completed === false);
        default:
          return todos;
      }
    });
  }, [state, todos]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
