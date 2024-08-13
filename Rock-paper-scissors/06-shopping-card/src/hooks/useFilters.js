import { useMemo, useContext, useCallback } from "react";
import { FiltersContext } from "../context/filters";

function useFilters() {
	const { filters, setFilters } = useContext(FiltersContext);

	const filterProducts = useCallback(({ products }) => {
		return products.filter((product) => {
			return (
				// First filter
				product.price >= filters.minPrice &&
				// Second filter
				(filters.category === "all" || product.category === filters.category)
			);
		});
	}, [filters]);

	return {
		filters,
		filterProducts,
		setFilters,
	};
}

export { useFilters }