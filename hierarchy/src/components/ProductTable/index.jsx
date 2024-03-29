// Import levenshtein distance module
import { distance } from 'fastest-levenshtein';

import { Paper, TableContainer } from '@mui/material';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';


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
        <>
            <TableContainer component={Paper}>
                <Table
                    style={{ padding: '0 1rem' }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>In stock</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
// Path: src/components/SearchBar.jsx