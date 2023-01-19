import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoToDo } from "./model";

interface setTodosProps {
  // title: string;
  // contents: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoToDo[]>>;
  // onSubmitHanlder: (e: React.FormEvent) => void;
  // 1. 지워도 되는건지?
}

const Input = ({ setTodos }: setTodosProps) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onSubmitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    // 2. HTMLFormElement 생략 가능한건지?
    e.preventDefault();

    const newTodos = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };

    setTodos((prev) => {
      return [...prev, newTodos];
    });
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmitHanlder}>
        제목 : <input onChange={onChangeTitle} value={title} />
        내용 : <input onChange={onChangeContents} value={contents} />
        <button>추가</button>
      </form>
    </>
  );
};

export default Input;
