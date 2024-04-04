import './TodoItem.css';
import { FaCheck, FaCircleXmark } from "react-icons/fa6";


function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`TodoItem ${completed && 'completed'}`} >
      <FaCheck className={`Icon Icon-check ${completed && 'completed'}`} onClick={() => onComplete(text)} />
      <p>{text}</p>
      <FaCircleXmark className="Icon Icon-delete" onClick={() => onDelete(text)} />
    </li>
  );
}

export { TodoItem };