import axios from "axios";
import { Catalog } from "electr-common";
const Mail = Catalog.Categories.Mail;

export const GET_FILTERS = "[MAIL APP] GET FILTERS";

export function getFilters() {
  const request = axios.get(Mail.GET_FILTERS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_FILTERS,
        payload: response.data
      })
    );
}
