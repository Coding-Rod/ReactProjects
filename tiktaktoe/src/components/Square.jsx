export function Square({value, onClick}){

    return (
        <button 
            className="square"
            onClick={onClick}
            disabled={value}
        >
            { value }
        </button>
    );
}