import { useEffect, useState } from "react";
function Categories() {
  const [all, setAll] = useState(false);
  const [rock, setRock] = useState(false);
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);

  const handleChange = (event) => {
    const { id } = event.target;

    switch (id) {
      case "all":
        setAll(!all);
        break;
      case "rock":
        setRock(!rock);
        break;
      case "paper":
        setPaper(!paper);
        break;
      case "scissors":
        setScissors(!scissors);
        break;
      default:
        throw Error('No ID Selected');
    }
  };

  useEffect(() => {
    if (all) {
      setRock(false);
      setPaper(false);
      setScissors(false);
    }
  }, [all]);

  return (
    <div>
      <h1>Categories</h1>
      <div className="categories">
        <div className="categorie">
          <input type="checkbox" onChange={handleChange} checked={all} id="all" />
          <label>All</label>
        </div>
        <div className="categorie">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={rock}
            disabled={all}
            id="rock"
          />
          <label>Rock</label>
        </div>
        <div className="categorie">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={paper}
            disabled={all}
            id="paper"
          />
          <label>Paper</label>
        </div>
        <div className="categorie">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={scissors}
            disabled={all}
            id="scissors"
          />
          <label>Scissors</label>
        </div>
      </div>
    </div>
  );
}

export { Categories };
