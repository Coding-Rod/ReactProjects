import { useId } from 'react';
import './Cart.css'

import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart() {
  const cartCheckBoxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              alt="Essence Mascara Lash Princess"
            />
            <div>
              <strong>Essence Mascara Lash Princess</strong> - $9.99
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
