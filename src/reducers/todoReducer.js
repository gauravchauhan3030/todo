import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../actions/types";

export default function todoReducer(
  state = [
    // {
    //   content: "first todo",
    //   id: new Date().getTime().toString(),
    //   completed: false,
    // },
  ],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          todo.content = action.payload.content;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
