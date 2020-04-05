import axios from "axios";
import { Catalog } from "electr-common";
const Mail = Catalog.Categories.Mail;

export const GET_LABELS = "[MAIL APP] GET LABELS";

export function getLabels() {
  const request = axios.get(Mail.GET_LABELS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_LABELS,
        payload: response.data
      })
    );
}
