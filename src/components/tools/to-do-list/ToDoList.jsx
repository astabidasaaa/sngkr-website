import React from "react";

const ToDoList = ({ toDoList, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.target.id);
  };

  return (
    <div className="list">
      {toDoList.map((todo) => {
        return (
          <p
            id={todo.id}
            key={todo.id + todo.task}
            name="todo"
            value={todo.id}
            onClick={handleClick}
            className={todo.complete ? "strike" : ""}
          >
            {todo.task}
          </p>
        );
      })}
    </div>
  );
};

export default ToDoList;
