import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers"; // reducers/index will implicitely called
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
