import { TextField, Checkbox, FormControlLabel } from "@mui/material";

export function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
    function handleFilterTextChange(e) {
        onFilterTextChange(e.target.value);
    }
    
    function handleInStockChange(e) {
        onInStockChange(e.target.checked);
    }
    
    return (
        <form>
            <TextField
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
                fullWidth
            />
            
            <FormControlLabel
                control={
                    <Checkbox
                        checked={inStockOnly}
                        onChange={handleInStockChange}
                    />
                }
                label="Only show products in stock"
                checked={inStockOnly}
                onChange={handleInStockChange}
                style={{ userSelect: 'none' }}
                
            />            
        </form>
    );
}