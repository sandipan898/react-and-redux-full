import { combineReducers } from "redux";
import courses from "./courseReducer"; // as we default export the function, we can name it whatever we want
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
