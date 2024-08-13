import "./Footer.css";
import { IS_DEVELOPMENT } from "../config";
import { useFilters } from "../hooks/useFilters";

export function Footer() {
  const { filters } = useFilters()

  if (!IS_DEVELOPMENT) {
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
