import { useState } from 'react';

import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

import { Container, Card, CardContent, Grid } from '@mui/material';

export function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    
    return (
        <Container>
            <h1>Products</h1>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <SearchBar
                                filterText={filterText}
                                inStockOnly={inStockOnly}
                                onFilterTextChange={setFilterText}
                                onInStockChange={setInStockOnly}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ProductTable
                                products={products}
                                filterText={filterText}
                                inStockOnly={inStockOnly}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}