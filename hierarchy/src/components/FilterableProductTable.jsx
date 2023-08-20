import { useState } from 'react';

import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

export function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    
    return (
        <div>
        <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockChange={setInStockOnly}
        />
        <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
        />
        </div>
    );
}