import axios from "axios";
import { showMessage } from "app/store/actions/fuse";
import { Catalog } from "electr-common";
const ECommerce = Catalog.Categories.ECommerce;

export const GET_ORDER = "[E-COMMERCE APP] GET ORDER";
export const SAVE_ORDER = "[E-COMMERCE APP] SAVE ORDER";

export function getOrder(params) {
  const request = axios.get(ECommerce.GET_ORDER, { params });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_ORDER,
        payload: response.data
      })
    );
}

export function saveOrder(data) {
  const request = axios.post(ECommerce.POST_ORDER_SAVE, data);

  return dispatch =>
    request.then(response => {
      dispatch(showMessage({ message: "Order Saved" }));

      return dispatch({
        type: SAVE_ORDER,
        payload: response.data
      });
    });
}
