import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./types";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const filterTodo = (filterType) => ({
  type: FILTER_TODO,
  payload: filterType,
});

export const toggleTodo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId,
});

export const updateTodo = (updatedTodo) => {
  return { type: UPDATE_TODO, payload: updatedTodo };
};

export const deleteTodo = (todoId) => {
  return { type: DELETE_TODO, payload: todoId };
};
