import { CART_ACTION_TYPES } from "../constants";

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// State    = cart
export function cartReducer(state, action) {
  
  // payload  = product
  // type     = action
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      const { id } = payload
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState
      }

      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return state.filter(item => item.id !== payload.id)

    case CART_ACTION_TYPES.CLEAR_CART:
      return []

    default:
      break;
  }
}