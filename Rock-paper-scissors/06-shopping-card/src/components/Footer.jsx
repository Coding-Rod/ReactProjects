import "./Footer.css";

export function Footer({ filters = null }) {
  // const { filters } = useFilters()

  if (!filters) {
    return (
      <footer className="footer">
        <h4>
          Prueba técnica de React ⚛️ － <span>@midudev</span>
        </h4>
        <h5>Shopping Cart con useContext & useReducer</h5>
      </footer>
    );
  }

  return (
		<footer className="footer">
			{JSON.stringify(filters, null, 2)}
		</footer>
	);
}
