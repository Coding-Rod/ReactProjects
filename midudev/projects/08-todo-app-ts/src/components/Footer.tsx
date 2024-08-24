import { FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void
}

export function Footer({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted,
}: Props): JSX.Element {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

      {completedCount > 0 && (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Borrar completados
        </button>
      )}
    </footer>
  );
}
