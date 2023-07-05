import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { ToDoModel } from "./model";
import Todo from "./Todo";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todoList, settodoList] = useState<ToDoModel[]>(() => {
    const getList = localStorage.getItem("todoList");
    return getList ? JSON.parse(getList) : [];
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (input) {
      settodoList([...todoList, { id: Date.now(), input, isDone: false }]);
      setInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="App">
        <div className="Todo_heading">Simple Todo Using TypeScript</div>
        <InputField input={input} setInput={setInput} handleAdd={handleAdd} />
        <Todo todoList={todoList} settodoList={settodoList} />
      </div>
    </>
  );
};

export default App;
