import { type ListOfTodos } from "../types";
import { Todo } from "./Todo";
import { type Todo as TodoType } from "../types";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoType['id']) => void
  onCompleted: ({ id, completed} : Pick<TodoType, 'id' | 'completed'>) => void
}

export function Todos({ todos, onRemoveTodo, onCompleted }: Props): JSX.Element {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li 
          key={todo.id} 
          className={`${todo.completed ? "completed" : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onCompleted={onCompleted}
          />
        </li>
      ))}
    </ul>
  );
}
