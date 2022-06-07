import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import Todo from "./Todo";

function TodoList({ todos, filter }) {
  return (
    <>
      {filter === "All" &&
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      {filter === "Active" &&
        todos
          .filter((todo) => !todo.completed)
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}

      {filter === "Completed" &&
        todos
          .filter((todo) => todo.completed)
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { toggleTodo })(TodoList);
