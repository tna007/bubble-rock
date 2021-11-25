import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default reducer;
