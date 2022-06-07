import React from "react";

export default function TodoApp() {
  return (
    <div class="card">
      <div class="card-content">
        <div class="row">
          <span class="card-title">Todo</span>
          <div class="input-field col s9">
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">What needs to be done?</label>
          </div>
          <div class="col s2">
            <a class="btn-floating btn-large waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab">
            <a href="#test4">View All</a>
          </li>
          <li class="tab">
            <a class="active" href="#test5">
              Active
            </a>
          </li>
          <li class="tab">
            <a href="#test6">Completed</a>
          </li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test5" class="row">
          <div class="col s1">
            <i
              class="material-icons small"
              style={{ color: "green", cursor: "pointer" }}
            >
              check_circle
            </i>
          </div>
          <div class="input-field col s8" style={{ margin: "0px" }}>
            <input
              value="Alvin"
              id="first_name2"
              type="text"
              class="validate"
            />
          </div>
          <div class="col s1">
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">edit</i>
            </a>
          </div>
          <div class="col s1">
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">delete</i>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col s1">
            {/* <a class="btn-floating btn-medium  red">
              <i class="material-icons">check_box</i>
            </a> */}
            <i
              class="material-icons small"
              style={{ color: "green", cursor: "pointer" }}
            >
              check_circle
            </i>
          </div>
          <div class="input-field col s8" style={{ margin: "0px" }}>
            <input
              value="Alvin"
              id="first_name2"
              type="text"
              class="validate"
            />
          </div>
          <div class="col s1">
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">edit</i>
            </a>
          </div>
          <div class="col s1">
            <a class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">delete</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
