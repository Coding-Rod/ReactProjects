const Square = ({ children, isSelected = false, updateBoard, index }) => {
    const classname = `square ${isSelected ? "is-selected" : ""}`;

    const handleClick = () => {
        updateBoard(index);
    };
    
    return (
        <div onClick={handleClick} className={classname}>
            {children}
        </div>
    );
};

export { Square };