import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { useMemo } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";

function useFilters({ products }) {
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

  return {
    filters,
    filteredProducts,
    setFilters,
  };
}

function App() {
  const [products] = useState(initialProducts);
  const { filters, filteredProducts, setFilters } = useFilters({ products });

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT ? <Footer filters={filters}/> : <Footer />}
    </>
  );
}

export default App;
