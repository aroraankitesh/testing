import axios from "axios";

import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export const fetchComments = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  dispatch({
    type: FETCH_COMMENTS,
    payload: response,
  });
};

export function changeAuth(isloggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isloggedIn,
  };
}
