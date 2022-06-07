import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  deleteTodo,
  completeTodo,
  filter,
  editTodo,
  setIsEdit,
}) {
  return (
    <div>
      {filter === "View All" &&
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
              setIsEdit={setIsEdit}
            />
          );
        })}
      {filter === "Completed" &&
        todos
          .filter((todo) => todo.completed)
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                editTodo={editTodo}
                setIsEdit={setIsEdit}
              />
            );
          })}

      {filter === "InCompleted" &&
        todos
          .filter((todo) => !todo.completed)
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                editTodo={editTodo}
                setIsEdit={setIsEdit}
              />
            );
          })}
    </div>
  );
}
