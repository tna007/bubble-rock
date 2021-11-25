export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

export const getProductFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const resp = await fetch("http://localhost:3001/products");
      const data = await resp.json();

      dispatch(getProductsSuccess(data));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
}
