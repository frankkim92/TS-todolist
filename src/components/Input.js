import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Input = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onSubmitHanlder = (e) => {
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

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
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
