export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
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

export const add = (product) => ({
  type: INCREASE_QUANTITY,
  name: product.name,
  img: product.img,
  quantity: product.quantity,
  price: product.price,
  totalPrice: product.totalPrice,
});

export const decrease = (product) => ({
  type: DECREASE_QUANTITY,
  name: product.name,
  quantity: product.quantity,
  price: product.price,
  totalPrice: product.totalPrice,
});

export const remove = (product) => ({
  type: REMOVE_PRODUCT,
  name: product.name,
});
