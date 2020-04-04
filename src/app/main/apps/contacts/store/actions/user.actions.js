import axios from "axios";
import { ApiCatalog } from "electr-common";
const Contacts = ApiCatalog.Categories.Contacts;

export const GET_USER_DATA = "[CONTACTS APP] GET USER DATA";

export function getUserData() {
  const request = axios.get(Contacts.GET_USER);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_USER_DATA,
        payload: response.data
      })
    );
}
