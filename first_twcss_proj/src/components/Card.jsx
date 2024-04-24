const Card = ({ count }) => {
    return (
        <div className="shadow-md rounded-lg p-4 text-black bg-amber-700">
            <h2 className="text-xl font-bold mb-2">The count is</h2>
            <p className="text-gray text-xl">{count}</p>
        </div>
    );
};

export default Card;