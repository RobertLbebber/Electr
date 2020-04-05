import axios from "axios";
import { Catalog } from "electr-common";
const ECommerce = Catalog.Categories.ECommerce;

export const GET_PRODUCTS = "[E-COMMERCE APP] GET PRODUCTS";
export const SET_PRODUCTS_SEARCH_TEXT =
  "[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";

export function getProducts() {
  const request = axios.get(ECommerce.GET_PRODUCTS);

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      })
    );
}

export function setProductsSearchText(event) {
  return {
    type: SET_PRODUCTS_SEARCH_TEXT,
    searchText: event.target.value
  };
}
