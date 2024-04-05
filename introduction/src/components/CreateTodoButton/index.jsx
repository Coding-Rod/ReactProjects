import './styles.css';
import { FaPlus } from "react-icons/fa6";


function CreateTodoButton({ onClick }) {
  return (
    <button onClick={onClick} className="CreateTodoButton">
      <FaPlus />
    </button>
  );
}

export { CreateTodoButton };