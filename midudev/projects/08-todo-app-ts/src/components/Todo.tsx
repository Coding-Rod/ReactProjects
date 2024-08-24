import React from "react";
import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: (id: TodoType['id']) => void;
  onCompleted: ({ id, completed} : Pick<TodoType, 'id' | 'completed'>) => void
}

export function Todo({
  id,
  title,
  completed,
  onRemoveTodo,
  onCompleted
}: Props): JSX.Element {

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    onCompleted({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckBox}
        id="toggle"
      />
      <label htmlFor="toggle">{title}</label>
      <button 
        className="destroy" 
        onClick={() => onRemoveTodo(id)}
      />
    </div>
  );
}
