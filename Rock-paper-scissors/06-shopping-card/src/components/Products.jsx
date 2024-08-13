import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

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
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
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
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
