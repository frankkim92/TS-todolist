import React from "react";

import Todo from "./Todo";
const TodoList = ({ todos, setTodos, isActive }) => {
  return (
    <div>
      <h4 style={{ background: "pink", padding: "20px" }}>
        {" "}
        {isActive ? "진행중" : "완료된 것"}
      </h4>

      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <Todo
              item={item}
              isActive={isActive}
              setTodos={setTodos}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
