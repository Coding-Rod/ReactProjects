import "./styles.css";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";
import { ProductItem } from "./ProductItem";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <ProductItem
              key={product.id}
              {...product}
            >
              {isProductInCart ? (
                <button
                  style={{ background: "red" }}
                  onClick={() => removeFromCart(product)}
                >
                  <RemoveFromCartIcon />
                </button>
              ) : (
                <button
                  style={{ background: "#09f" }}
                  onClick={() => addToCart(product)}
                >
                  <AddToCartIcon />
                </button>
              )}
            </ProductItem>
          );
        })}
      </ul>
    </main>
  );
}
