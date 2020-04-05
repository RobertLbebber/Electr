import axios from "axios";
import { Catalog } from "electr-common";
const Chat = Catalog.Categories.Chat;

export const GET_USER_DATA = "[CHAT PANEL] GET USER DATA";

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
