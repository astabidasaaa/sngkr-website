import React from "react";
import { useState } from "react";
import ToDoListAppStyle from "../../../styles/tools/ToDoListAppStyle";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { toDoPlaceholder } from "./ToDoPlaceholder";

const ToDoListApp = () => {
  const [toDoList, setToDoList] = useState(toDoPlaceholder);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === parseInt(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    const copy = [
      ...toDoList,
      {
        id: toDoList.length ? toDoList[toDoList.length - 1].id + 1 : 1,
        task: userInput,
        complete: false,
      },
    ];
    setToDoList(copy);
  };

  return (
    <ToDoListAppStyle>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <button className="clear" onClick={handleFilter}>
        Clear Completed
      </button>
      <ToDoForm addTask={addTask} />
    </ToDoListAppStyle>
  );
};

export default ToDoListApp;
