export function ProductItem({id, thumbnail, title, price, children}) {
  return (
    <li key={id}>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <div>
        {children}
      </div>
    </li>
  );
}
