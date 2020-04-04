import axios from "axios";
import { ApiCatalog } from "electr-common";
const Todo = ApiCatalog.Categories.Todo;

export const GET_FOLDERS = "[TODO APP] GET FOLDERS";

export function getFolders() {
  const request = axios.get(Todo.GET_FOLDERS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_FOLDERS,
        payload: response.data
      })
    );
}
