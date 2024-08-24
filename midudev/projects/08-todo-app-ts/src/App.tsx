import { useState } from "react";
import { Todos } from "./components/Todos";
import { type Todo as TodoType } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "Ver el Twitch de Midu",
    completed: true,
  },
  {
    id: "2",
    title: "Aprender React con TypeScript",
    completed: false,
  },
  {
    id: "3",
    title: "Sacar ticket de la miduFest",
    completed: false,
  },
];

export function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: TodoType["id"]): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: completed };
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onCompleted={handleCompleted}
      />
    </div>
  );
}

export default App;
