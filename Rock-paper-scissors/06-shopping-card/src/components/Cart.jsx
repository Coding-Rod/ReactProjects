import { useId } from "react";
import "./Cart.css";

import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckBoxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>Essence Mascara Lash Princess</strong> - ${product.price}
              </div>

              <footer>
                <small>Qty: {product.quantity}</small>
                <button onClick={() => addToCart(product)}
                >+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
