import axios from "axios";
import { Catalog } from "electr-common";
const Mail = Catalog.Categories.Mail;

export const GET_FOLDERS = "[MAIL APP] GET FOLDERS";

export function getFolders() {
  const request = axios.get(Mail.GET_FOLDERS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_FOLDERS,
        payload: response.data
      })
    );
}
