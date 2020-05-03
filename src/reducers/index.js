import users from "../reducers/users";
import authedUser from "../reducers/authedUser";
import { combineReducers } from "redux";
import questions from "../reducers/questions";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  users,
  authedUser,
  questions,
  loadingBar: loadingBarReducer,
});
