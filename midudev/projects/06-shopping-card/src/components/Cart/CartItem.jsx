export function CartItem({ id, thumbnail, title, price, quantity, addToCard}) {
  return (
    <li key={id}>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>Essence Mascara Lash Princess</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCard}>+</button>
      </footer>
    </li>
  );
}
