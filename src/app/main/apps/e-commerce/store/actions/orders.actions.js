import axios from "axios";
import { Catalog } from "electr-common";
const ECommerce = Catalog.Categories.ECommerce;

export const GET_ORDERS = "[E-COMMERCE APP] GET ORDERS";
export const SET_ORDERS_SEARCH_TEXT = "[E-COMMERCE APP] SET ORDERS SEARCH TEXT";

export function getOrders() {
  const request = axios.get(ECommerce.GET_ORDERS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_ORDERS,
        payload: response.data
      })
    );
}

export function setOrdersSearchText(event) {
  return {
    type: SET_ORDERS_SEARCH_TEXT,
    searchText: event.target.value
  };
}
