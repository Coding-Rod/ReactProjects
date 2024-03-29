import { TableRow, TableCell } from '@mui/material';

export function ProductRow({ product }) {
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: 'red' }}>{product.name}</span>
    );
    
    return (
        <TableRow style={{ backgroundColor: product.stocked ? 'white' : 'pink' }}>
            <TableCell>{name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stocked ? 'Yes' : 'No'}</TableCell>
        </TableRow>
    );
}