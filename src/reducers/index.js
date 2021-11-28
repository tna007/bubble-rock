import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import "font-awesome/css/font-awesome.min.css";
const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default reducer;
