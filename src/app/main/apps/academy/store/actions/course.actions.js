import axios from "axios";
import { showMessage } from "app/store/actions/fuse";

import { ApiCatalog } from "electr-common";
const Acadamy = ApiCatalog.Categories.Academy;

export const GET_COURSE = "[ACADEMY APP] GET COURSE";
export const SAVE_COURSE = "[ACADEMY APP] SAVE COURSE";
export const UPDATE_COURSE = "[ACADEMY APP] UPDATE COURSE";

export function getCourse(params) {
  const request = axios.get(Acadamy.GET_COURSE, { params });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_COURSE,
        payload: response.data
      })
    );
}

export function saveCourse(data) {
  const request = axios.post(Acadamy.POST_COURSE_SAVE, data);

  return dispatch =>
    request.then(response => {
      dispatch(showMessage({ message: "Course Saved" }));

      return dispatch({
        type: SAVE_COURSE,
        payload: response.data
      });
    });
}

export function updateCourse(data) {
  return (dispatch, getState) => {
    const { id } = getState().academyApp.course;
    const request = axios.post(Acadamy.POST_COURSE_UPDATE, {
      id,
      ...data
    });

    request.then(response => {
      dispatch(showMessage({ message: "Course Updated" }));

      return dispatch({
        type: UPDATE_COURSE,
        payload: response.data
      });
    });
  };
}
