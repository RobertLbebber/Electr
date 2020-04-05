import axios from "axios";
import { Catalog } from "electr-common";
const QuickPanel = Catalog.Categories.QuickPanel;

export const TOGGLE_QUICK_PANEL = "[QUICK PANEL] TOGGLE QUICK PANEL";
export const GET_QUICK_PANEL_DATA = "[QUICK PANEL] GET DATA";

export function getQuickPanelData() {
  const request = axios.get(QuickPanel.GET_DATA);
  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_QUICK_PANEL_DATA,
        payload: response.data
      })
    );
}

export function toggleQuickPanel() {
  return {
    type: TOGGLE_QUICK_PANEL
  };
}
