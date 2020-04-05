import axios from "axios";
import { Catalog } from "electr-common";
const Contacts = Catalog.Categories.Contacts;

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
