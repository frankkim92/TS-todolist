import React from "react";
import Todo from "./Todo";
import { TodoToDo } from "./model";

interface Props {
  todos: TodoToDo[];
  isActive: boolean;
  setTodos: React.Dispatch<React.SetStateAction<TodoToDo[]>>;
  //3. setTodos는 왜이리 복잡하지?
}

const TodoList = ({ todos, isActive, setTodos }: Props) => {
  return (
    <div>
      <h4 style={{ background: "pink", padding: "20px" }}>
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
