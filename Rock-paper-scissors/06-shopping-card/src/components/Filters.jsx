import { useEffect, useId, useState } from "react";
import "./Filters.css";

export function Filters({ setFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState('all')

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

	useEffect(() => {
		setFilters({
			minPrice,
			category
		})
	}, [minPrice, category])

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio minimo</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value="all">Todas</option>
          <option value="beauty">Belleza</option>
          <option value="fragrances">Fragancias</option>
          <option value="furniture">Muebles</option>
        </select>
      </div>
    </section>
  );
}
