import axios from "axios";
import { ApiCatalog } from "electr-common";
const Mail = ApiCatalog.Categories.Mail;

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
