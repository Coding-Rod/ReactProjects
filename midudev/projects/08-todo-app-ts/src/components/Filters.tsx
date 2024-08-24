import { FILTERS_BUTTONS } from "../consts";
import { FilterValue } from "../types";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export function Filters({
  filterSelected,
  onFilterChange,
}: Props): JSX.Element {

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => (
        <li key={key}>
          <a
            href={href}
            className={filterSelected === key ? "selected" : ""}
            onClick={(event) => {
              event.preventDefault()
              onFilterChange(key as FilterValue)
            }}
          >
            {literal}
          </a>
        </li>
      ))}
    </ul>
  );
}
