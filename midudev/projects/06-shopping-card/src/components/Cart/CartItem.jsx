export function CartItem({ id, thumbnail, title, price, quantity, addToCart, removeFromCart}) {
  return (
    <li key={id}>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>Essence Mascara Lash Princess</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>🗑️</button>
      </footer>
    </li>
  );
}
