import './styles.css';
import { FaCheck, FaCircleXmark } from "react-icons/fa6";


function TodoItem({ className, text, completed, onComplete, onDelete }) {
  return (
    <li className={`TodoItem ${className} ${completed && 'completed'}`} >
      <FaCheck className="Icon Icon-check" onClick={() => onComplete(text)} />
      <p>{text}</p>
      <FaCircleXmark className="Icon Icon-delete" onClick={() => onDelete(text)} />
    </li>
  );
}

export { TodoItem };