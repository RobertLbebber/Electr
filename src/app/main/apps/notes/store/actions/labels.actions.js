import axios from "axios";
import { Catalog } from "electr-common";
const Notes = Catalog.Categories.Notes;

export const GET_LABELS = "[NOTES APP] GET LABELS";
export const LABELS_DIALOG_OPEN = "[NOTES APP] LABELS DIALOG OPEN";
export const LABELS_DIALOG_CLOSE = "[NOTES APP] LABELS DIALOG CLOSE";
export const UPDATE_LABELS = "[NOTES APP] LABELS UPDATE LABELS";

export function getLabels() {
  const request = axios.get(Notes.GET_LABELS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_LABELS,
        payload: response.data
      })
    );
}

export function updateLabels(labels) {
  const request = axios.post(Notes.POST_UPDATE_LABELS, {
    labels: Object.values(labels)
  });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: UPDATE_LABELS,
        payload: response.data
      })
    );
}

export function openLabelsDialog() {
  return {
    type: LABELS_DIALOG_OPEN
  };
}

export function closeLabelsDialog() {
  return {
    type: LABELS_DIALOG_CLOSE
  };
}
