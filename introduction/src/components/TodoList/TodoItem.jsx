import './TodoItem.css';
import { FaCheck, FaCircleXmark } from "react-icons/fa6";


function TodoItem({ text, completed }) {
  return (
    <li className={`TodoItem ${completed && 'completed'}`}>
      <FaCheck className={`Icon Icon-check ${completed && 'completed'}`} />
      <p>{text}</p>
      <FaCircleXmark className="Icon Icon-delete" />
    </li>
  );
}

export { TodoItem };