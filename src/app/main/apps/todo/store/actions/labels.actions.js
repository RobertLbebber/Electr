import axios from "axios";
import { Catalog } from "electr-common";
const Todo = Catalog.Categories.Todo;

export const GET_LABELS = "[TODO APP] GET LABELS";

export function getLabels() {
  const request = axios.get(Todo.GET_LABELS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_LABELS,
        payload: response.data
      })
    );
}
