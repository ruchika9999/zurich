import { combineReducers } from "redux";
import { UsersReducer } from "./users/reducer";
import { AuthenticationReducer } from "./authentication/reducer";

export const combineReducer = combineReducers({
  users: UsersReducer,
  authentication: AuthenticationReducer,
});

export const persistReducerData = ["authentication"];

export default combineReducer;
