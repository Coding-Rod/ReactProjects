import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useMemo } from "react";
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        // First filter
        product.price >= filters.minPrice &&
        // Second filter
        (filters.category === "all" || product.category === filters.category)
      );
    });
  }, [products, filters]);

  return (
    <>
      <Header setFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
