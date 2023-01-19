import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
const initlalState = [
  {
    id: uuidv4(),
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    contents: "내용2",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initlalState);

  return (
    <div>
      <Header />
      <Input setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isActive={true} />
      <TodoList todos={todos} setTodos={setTodos} isActive={false} />
    </div>
  );
}

export default App;
