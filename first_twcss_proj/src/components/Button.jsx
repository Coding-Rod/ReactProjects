const Button = ({ text, onClick }) => {
    
    const buttonClass = "bg-orange-500 hover:bg-orange-800 hover:text-white font-bold py-2 px-4 rounded text-black";

    return (
        <button 
            className={buttonClass}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;