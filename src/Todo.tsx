import React, { useState } from "react";
import { ToDoModel } from "./model";

interface Props {
  todoList: ToDoModel[];
  settodoList: React.Dispatch<React.SetStateAction<ToDoModel[]>>;
}

const Todo = ({ todoList, settodoList }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [textTodo, setTextTodo] = useState<string>("");

  const deleteOne = (val: { id: number }) => {
    const remaining = todoList.filter((currVal) => currVal.id !== val.id);
    settodoList(remaining);
  };

  const DoneOne = (val: { id: number; isDone: Boolean }) => {
    const updatedList = todoList.map((todo) =>
      todo.id === val.id ? { ...todo, isDone: !todo.isDone } : todo
    );
    settodoList(updatedList);
  };

  const handleEdit = (val: { id: number }) => {
    const FindList = todoList.map((todo) =>
      todo.id === val.id ? { ...todo, input: textTodo } : todo
    );
    settodoList(FindList);
    setEdit(!edit);
  };

  return (
    <>
      <div className="list">
        {todoList.map((val) => {
          return (
            <div key={val.id}>
              <div className="listcard" style={{ display: "flex" }}>
                {edit ? (
                  <>
                    <input
                      value={textTodo}
                      onChange={(e) => setTextTodo(e.target.value)}
                    ></input>
                    <div className="Save">
                      <button onClick={() => handleEdit(val)}>Save</button>
                    </div>
                  </>
                ) : (
                  <div className="text">{val.input}</div>
                )}
                <div className="modify" style={{ display: "flex" }}>
                  <div
                    className="edit"
                    onClick={() => {
                      if (!edit && !val.isDone) {
                        setEdit(!edit);
                        setTextTodo(val.input);
                      }
                    }}
                  >
                    <button>Edit</button>
                  </div>
                  <div className="remove">
                    <button onClick={() => deleteOne(val)}>Remove</button>
                  </div>
                  <div className="complete">
                    {val.isDone ? (
                      <button onClick={() => DoneOne(val)}>Completed</button>
                    ) : (
                      <button onClick={() => DoneOne(val)}>Complete</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
