import axios from "axios";
import { Catalog } from "electr-common";
const Chat = Catalog.Categories.Chat;

export const GET_USER_DATA = "[CHAT APP] GET USER DATA";
export const UPDATE_USER_DATA = "[CHAT APP] UPDATE USER DATA";

export function getUserData() {
  const request = axios.get(Chat.GET_USER);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_USER_DATA,
        payload: response.data
      })
    );
}

export function updateUserData(newData) {
  const request = axios.post(Chat.POST_USER_DATA, newData);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: UPDATE_USER_DATA,
        payload: response.data
      })
    );
}
