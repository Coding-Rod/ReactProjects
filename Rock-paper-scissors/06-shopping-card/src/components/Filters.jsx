import { useEffect, useId, useState } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPriceChange = (event) => {
    setFilters({
      ...filters,
      minPrice: event.target.value
    })
  };
  
  const handleCategoryChange = (event) => {
    setFilters({
      ...filters,
      category: event.target.value
    })
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio minimo</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleMinPriceChange}
        />
        <span>${filters.minPrice}</span>
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
