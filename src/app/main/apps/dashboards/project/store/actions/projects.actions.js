import axios from "axios";
import { ApiCatalog } from "electr-common";
const ProjectDashboard = ApiCatalog.Categories.ProjectDashboard;

export const GET_PROJECTS = "[PROJECT DASHBOARD APP] GET PROJECTS";

export function getProjects() {
  const request = axios.get(ProjectDashboard.GET_PROJECTS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_PROJECTS,
        payload: response.data
      })
    );
}
