import axios from "axios";
import { showMessage } from "app/store/actions/fuse";
import { FuseUtils } from "@fuse";
import { Catalog } from "electr-common";
const ECommerce = Catalog.Categories.ECommerce;

export const GET_PRODUCT = "[E-COMMERCE APP] GET PRODUCT";
export const SAVE_PRODUCT = "[E-COMMERCE APP] SAVE PRODUCT";

export function getProduct(params) {
  const request = axios.get(ECommerce.GET_PRODUCT, { params });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_PRODUCT,
        payload: response.data
      })
    );
}

export function saveProduct(data) {
  const request = axios.post(ECommerce.POST_PRODUCT_SAVE, data);

  return dispatch =>
    request.then(response => {
      dispatch(showMessage({ message: "Product Saved" }));

      return dispatch({
        type: SAVE_PRODUCT,
        payload: response.data
      });
    });
}

export function newProduct() {
  const data = {
    id: FuseUtils.generateGUID(),
    name: "",
    handle: "",
    description: "",
    categories: [],
    tags: [],
    images: [],
    priceTaxExcl: 0,
    priceTaxIncl: 0,
    taxRate: 0,
    comparedPrice: 0,
    quantity: 0,
    sku: "",
    width: "",
    height: "",
    depth: "",
    weight: "",
    extraShippingFee: 0,
    active: true
  };

  return {
    type: GET_PRODUCT,
    payload: data
  };
}
