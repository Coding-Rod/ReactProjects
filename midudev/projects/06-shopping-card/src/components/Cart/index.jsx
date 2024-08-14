import { useId } from "react";
import "./styles.css";

import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";
import { CartItem } from "./CartItem";

export function Cart() {
  const cartCheckBoxId = useId();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
