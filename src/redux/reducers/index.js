import { combineReducers } from "redux";
import courses from "./courseReducer"; // as we default export the function, we can name it whatever we want

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
