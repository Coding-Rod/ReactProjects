export function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
    function handleFilterTextChange(e) {
        onFilterTextChange(e.target.value);
    }
    
    function handleInStockChange(e) {
        onInStockChange(e.target.checked);
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleInStockChange}
                />
                
                {' '}
                
                Only show products in stock
            </p>
        </form>
    );
}