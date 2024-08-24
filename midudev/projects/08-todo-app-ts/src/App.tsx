import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, type Todo as TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  };

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount 

  const filteredTodos = todos.filter(todo => {
    switch (filterSelected) {
      case TODO_FILTERS.ACTIVE:
        return !todo.completed
      case TODO_FILTERS.COMPLETED:
        return todo.completed
      default:
        return todo
    }
  })

  const handleClearCompleted = () : void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
