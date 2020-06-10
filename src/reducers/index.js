import { combineReducers } from "redux";
import commentsReducers from "./comments";
import auth from "./auth";

export default combineReducers({
  comments: commentsReducers,
  auth,
});
