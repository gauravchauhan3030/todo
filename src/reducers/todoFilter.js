import { FILTER_TODO } from "../actions/types";

export default function todoFilter(state = "All", action) {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload;
    default:
      return state;
  }
}
