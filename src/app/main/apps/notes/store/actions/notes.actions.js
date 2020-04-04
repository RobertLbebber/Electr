import axios from "axios";
import { ApiCatalog } from "electr-common";
const Notes = ApiCatalog.Categories.Notes;

export const GET_NOTES = "[NOTES APP] GET NOTES";
export const SET_SEARCH_TEXT = "[NOTES APP] SET SEARCH TEXT";
export const OPEN_NOTE_DIALOG = "[NOTES APP] OPEN NOTE DIALOG";
export const CLOSE_NOTE_DIALOG = "[NOTES APP] CLOSE NOTE DIALOG";
export const CREATE_NOTE = "[NOTES APP] CREATE NOTE";
export const UPDATE_NOTE = "[NOTES APP] UPDATE NOTE";
export const REMOVE_NOTE = "[NOTES APP] REMOVE NOTE";
export const TOGGLE_VARIATE_DESC_SIZE = "[NOTES APP] TOGGLE VARIATE DESC SIZE";

export function getNotes() {
  const request = axios.get(Notes.GET);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_NOTES,
        payload: response.data
      })
    );
}

export function setSearchText(event) {
  return {
    type: SET_SEARCH_TEXT,
    searchText: event.target.value
  };
}

export function resetSearchText() {
  return {
    type: SET_SEARCH_TEXT,
    searchText: ""
  };
}

export function toggleVariateDescSize() {
  return {
    type: TOGGLE_VARIATE_DESC_SIZE
  };
}

export function openNoteDialog(id) {
  return {
    type: OPEN_NOTE_DIALOG,
    payload: id
  };
}

export function closeNoteDialog() {
  return {
    type: CLOSE_NOTE_DIALOG
  };
}

export function createNote(note) {
  const request = axios.post(Notes.POST_CREATE_NOTE, {
    note
  });
  return dispatch =>
    request.then(response => {
      dispatch({
        type: CREATE_NOTE,
        note: response.data
      });
    });
}

export function updateNote(note) {
  const request = axios.post(Notes.POST_UPDATE_NOTE, {
    note
  });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: UPDATE_NOTE,
        note: response.data
      })
    );
}

export function removeNote(noteId) {
  const request = axios.post(Notes.POST_REMOVE_NOTE, {
    noteId
  });
  return dispatch =>
    request.then(() => {
      dispatch({
        type: REMOVE_NOTE,
        id: noteId
      });
    });
}
