import axios from "axios";
import { Catalog } from "electr-common";
const Todo = Catalog.Categories.Todo;

export const GET_FILTERS = "[TODO APP] GET FILTERS";

export function getFilters() {
  const request = axios.get(Todo.GET_FILTERS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_FILTERS,
        payload: response.data
      })
    );
}
