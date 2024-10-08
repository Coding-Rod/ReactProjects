// Styles
import "./App.css";

// Components
import { Categories } from "./components/Categories";
import { Cards } from "./components/Cards";
import { Modal } from "./components/Modal";

// Hooks
import { useEffect, useState } from "react";
import { useCards } from "./hooks/useCards";
import { useCategories } from "./hooks/useCategories";

function App() {
  const [show, setShow] = useState(false);
  const { categories, updateCategories } = useCategories();
  const { cards, getCards } = useCards({ categories });

  // Get cards on mount
  useEffect(() => {
    getCards({ categories });
  }, [categories]);

  return (
    <div>
      <aside>
        <Categories
          categories={categories}
          updateCategories={updateCategories}
        />
      </aside>
      <main>
        <Cards cards={cards} showModal={setShow} />
        <Modal show={show} setShow={setShow} />
      </main>
    </div>
  );
}

export default App;
