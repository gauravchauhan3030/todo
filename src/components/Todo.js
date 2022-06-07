import React from "react";
import "./Todo.css";

export default function Todo({
  id,
  content,
  completed,
  deleteTodo,
  completeTodo,
  editTodo,
}) {
  return (
    <div>
      <div className={`notCompleted-todo ${completed ? "completed-todo" : ""}`}>
        {content}
      </div>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <button onClick={() => completeTodo(id)}>
        {completed ? "Not Completed" : "Completed"}
      </button>
      <button onClick={() => editTodo(id)}>Edit</button>
    </div>
  );
}
