import * as actions from "../actions/actions";

export const initialState = {
  products: [],
  loading: false,
  hasErrors: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, hasErrors: false };
    case actions.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default productsReducer;
