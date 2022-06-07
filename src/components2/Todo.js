import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../actions/index";

import "./Todo.css";

function Todo({ todo, toggleTodo, updateTodo, deleteTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [todoContent, setTodoContent] = useState(todo.content);

  const enterKeyPress = (event) => {
    if (event.key === "Enter") {
      if (isEdit) {
        const payload = { content: todoContent, todoId: todo.id };
        updateTodo(payload);
      }
      setIsEdit(!isEdit);
    }
  };
  const handleEdit = () => {
    if (isEdit) {
      const payload = { content: todoContent, todoId: todo.id };
      updateTodo(payload);
    }
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    setOpenModal(false);
  };
  const handleToggleTodo = (todoId) => {
    toggleTodo(todoId);
  };
  return (
    <>
      <div key={todo.id} className="row">
        <div className="col s1" onClick={() => handleToggleTodo(todo.id)}>
          <i
            className={
              todo.completed
                ? "material-icons small check-completed"
                : "material-icons small check-active"
            }
          >
            check_circle
          </i>
        </div>
        <div className="input-field col s8" style={{ margin: "0px" }}>
          <input
            value={todoContent}
            type="text"
            className={todo.completed ? "validate input-completed" : "validate"}
            disabled={!isEdit || todo.completed}
            onChange={(e) => setTodoContent(e.target.value)}
            onKeyPress={enterKeyPress}
          />
        </div>
        <div className="col s1" onClick={() => handleEdit()}>
          <a className="btn-floating btn-small waves-effect waves-light red">
            <i className="material-icons">{isEdit ? "save" : "edit"}</i>
          </a>
        </div>
        <div className="col s1" onClick={() => setOpenModal(true)}>
          <a className="btn-floating btn-small waves-effect waves-light red">
            <i className="material-icons">delete</i>
          </a>
        </div>
      </div>
      {openModal && (
        <div
          id="modal1"
          class="modal"
          style={{ display: "block", zIndex: 100 }}
        >
          <div class="modal-content">
            <h4>Want to delete Todo?</h4>
            <p>{todo.content}</p>
          </div>
          <div class="modal-footer">
            <a
              class="waves-effect waves-light btn-small"
              onClick={handleDelete}
            >
              Delete
            </a>
            <a
              class="waves-effect waves-light btn-small"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </a>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
    updateTodo: (updatedTodo) => dispatch(updateTodo(updatedTodo)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
