import axios from "axios";
import { Catalog } from "electr-common";
const ProjectDashboard = Catalog.Categories.ProjectDashboard;

export const GET_WIDGETS = "[PROJECT DASHBOARD APP] GET WIDGETS";

export function getWidgets() {
  const request = axios.get(ProjectDashboard.GET_WIDGETS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_WIDGETS,
        payload: response.data
      })
    );
}
