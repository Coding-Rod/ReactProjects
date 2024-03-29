import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

// Import levenshtein distance module
import { distance } from 'fastest-levenshtein';

export function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
    
    products.forEach((product) => {
        if ( product.name.indexOf(filterText) === -1 && 
             distance(product.name, filterText) > 3) return; // Discard if levenshtein distance is greater than 3
        
        if (inStockOnly && !product.stocked) return; // Discard if not in stock
        
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        
        lastCategory = product.category;
    });
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            
            <tbody>{rows}</tbody>
        </table>
    );
}
// Path: src/components/SearchBar.jsx