import { type Todo as TodoType} from "../types";

export function Todo({ title, completed }: TodoType): JSX.Element {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => {}}
        id="toggle"
      />
      <label htmlFor="toggle">{title}</label>
      <button
        className="destroy"
        onClick={() => {}}
      >
      </button>
    </div>
  );
}
