import { TableRow, TableCell } from '@mui/material';

export function ProductCategoryRow({ category }) {
    return (
        <TableRow>
            <TableCell 
                colSpan="3"
                align='center'
                style={{ fontWeight: 'bold' }}
            >{category}</TableCell>
        </TableRow>
    );
}