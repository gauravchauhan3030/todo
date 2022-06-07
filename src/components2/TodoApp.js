import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { filterTodo, addTodo } from "../actions/index";
import TodoList from "./TodoList";

function TodoApp({ filter, filterTodo, addTodo }) {
  const [todo, setTodo] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  // const editRef = useRef();

  useEffect(() => {});

  const handleAddTodo = () => {
    if (!todo) return;
    addTodo({
      content: todo,
      id: new Date().getTime().toString(),
      completed: false,
    });
    setTodo("");
  };

  const handleActiveTab = (tabIndex, filterType) => {
    setActiveIndex(tabIndex);
    filterTodo(filterType);
  };
  return (
    <div class="card">
      <div class="card-content">
        <div class="row">
          <span class="card-title">Todo</span>
          <div class="input-field col s9">
            <input
              id="icon_prefix"
              type="text"
              class="validate"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            {/* <label for="icon_prefix">What needs to be done?</label> */}
          </div>
          <div class="col s2" onClick={() => handleAddTodo()}>
            <a class="btn-floating btn-large waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab" onClick={() => handleActiveTab(0, "All")}>
            <a className={activeIndex === 0 ? "active" : ""} href="#">
              View All
            </a>
          </li>
          <li class="tab" onClick={() => handleActiveTab(1, "Active")}>
            <a className={activeIndex === 1 ? "active" : ""} href="#">
              Active
            </a>
          </li>
          <li class="tab" onClick={() => handleActiveTab(2, "Completed")}>
            <a className={activeIndex === 2 ? "active" : ""} href="#">
              Completed
            </a>
          </li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <TodoList />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

export default connect(mapStateToProps, { filterTodo, addTodo })(TodoApp);
