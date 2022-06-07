import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const [todoMessage, setTodoMessage] = useState("");
  const [todos, setTodos] = useState([]);
  // const [filteredList, setFilteredList] = useState(todos);
  const [filter, setFilter] = useState("View All");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    !isEdit
      ? setTodos([
          ...todos,
          { content: todoMessage, id: uuidv4(), completed: false },
        ])
      : setTodos(
          todos.map((todo) => {
            if (todo.id === editId) {
              todo.content = todoMessage;
            }
            return todo;
          })
        );
    setTodoMessage("");
    setIsEdit(false);
    setEditId("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...newTodos]);
  };
  const editTodo = (id) => {
    setIsEdit(true);
    setEditId(id);
    setTodoMessage(todos.find((todo) => todo.id == id).content);
  };

  // const filteredListHandle = (show) => {
  //   if (show == "Completed") {
  //     setFilteredList(todos.filter(({ completed }) => !!completed));
  //   } else if (show == "InCompleted") {
  //     setFilteredList(todos.filter(({ completed }) => !completed));
  //   } else {
  //     setFilteredList(todos);
  //   }
  // };
  return (
    <div>
      <div>Todo</div>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("InCompleted")}>InCompleted</button>
      <button onClick={() => setFilter("View All")}>All</button>
      <div>
        <input
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {isEdit ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        filter={filter}
        editTodo={editTodo}
        setIsEdit={setIsEdit}
      />
    </div>
  );
}
