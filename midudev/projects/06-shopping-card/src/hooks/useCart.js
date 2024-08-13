import { useContext } from "react";
import { CartContext } from "../context/cart";

function useCart () {
  const { cart, addToCart, removeFromCart, clearCart} = useContext(CartContext);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  } 
}

export { useCart }