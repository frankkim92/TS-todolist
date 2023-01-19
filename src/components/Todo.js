import React from "react";

const Todo = ({ isActive, item, setTodos }) => {
  const onClickDelete = () => {
    setTodos((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
  };

  const onClickSwitch = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div>
      <div key={item.id} style={{ border: "1px solid black", padding: "20px" }}>
        <h3>{item.title}</h3>
        <p>{item.contents}</p>
        <button onClick={onClickSwitch}>{isActive ? "완료" : "삭제"}</button>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default Todo;
