import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  counter: counterReducer,
  users: userReducer
});

export const store = createStore(reducers);
