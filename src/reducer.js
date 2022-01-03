import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./action";

//reducer
function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      // console.log(cartItem)
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  return state;
  //
}
export default reducer;
// if(action.type===CLEAR_CART){
//   return {...state,cart:[]}
// }
// return state;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   case DECREASE:
//     return { ...state, cart: [] };
//   case INCREASE:
//     return {
//       ...state,
//       cart: state.cart.map((cartItem) => {
//         if (cartItem.id === action.payload.id) {
//           cartItem = { ...cartItem, amount: cartItem.amount + 1 };
//         }
//         return cartItem;
//       }),
//     };
//   case REMOVE:
//     return {
//       ...state,
//       cart: state.cart.filter((item) => item.id !== action.payload.id),
//     };

//   default:
//     return state;
// }
