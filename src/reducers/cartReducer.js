import * as actions from "../actions/actions";

// the state is an array of objects {name: string, quantity: number}
const cartReducer = (state = [], action) => {
  const foundProduct = state.filter((product) => product.name === action.name);
  switch (action.type) {
    case actions.INCREASE_QUANTITY:
      if (foundProduct.length) {
        return state.map((product) => {
          if (product.name === foundProduct[0].name) {
            product.quantity++;
            product.totalPrice = product.price * product.quantity;
          }
          return product;
        });
      } else {
        return state.concat({
          name: action.name,
          quantity: 1,
          price: action.price,
          totalPrice: action.totalPrice,
        });
      }
    case actions.DECREASE_QUANTITY:
      if (foundProduct.length) {
        return state
          .map((product) => {
            if (product.name === foundProduct[0].name) {
              product.quantity--;
              product.totalPrice = product.price * product.quantity;
            }
            return product;
          })
          .filter(({ quantity }) => quantity > 0);
        // .filter(function (product) {
        //   return product.quantity > 0;
        // });
      }
      return [...state];
    case actions.REMOVE_PRODUCT:
      return state.filter(({ name }) => name !== action.name);
    // return {
    //   ...state,
    //   results: state.results.filter(
    //     (product) => product.id !== action.payload
    //   ),
    // };

    default:
      return state;
  }
};

// const initialState = {
//   counter: 0,
//   results: [],
// };
export default cartReducer;
