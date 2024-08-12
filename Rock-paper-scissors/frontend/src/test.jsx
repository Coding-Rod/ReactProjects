const API_URL = "http://localhost:8000/";
const FILE_PREFIX = "http://localhost:8081/";

function useCards({ categories }) {
  const [cards, setCards] = useState();

  const categoriesToFetch = useMemo(() => {
    console.log({ categories });
    return Object.keys(categories).filter((key) => categories[key]);
  }, [categories]);

  useEffect(() => {
    if (categoriesToFetch.length === 0) {
      return; // Don't fetch if no categories are selected
    }

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((element) => ({
          id: element.id,
          image_url: FILE_PREFIX + element.image_path,
          name: element.classification.predictions[0].class,
          confidence: (
            parseFloat(element.classification.predictions[0].confidence) * 100
          ).toFixed(2),
        }));
        setCards(newData);
      })
      .catch((error) => console.error("Error fetching cards:", error));
  }, [categoriesToFetch]); // Now dependent on categoriesToFetch

  return {
    cards,
  };
}

function useCategories() {
  const [all, setAll] = useState(false);
  const [rock, setRock] = useState(false);
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);

  const updateCategories = ({ id }) => {
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
    }
  };

  useEffect(() => {
    if (all) {
      setRock(false);
      setPaper(false);
      setScissors(false);
    }
  }, [all]);

  return {
    categories: { all, rock, paper, scissors },
    updateCategories,
  };
}

function App() {
  const [show, setShow] = useState(false);
  const { categories, updateCategories } = useCategories();
  const { cards } = useCards({ categories });

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

function Cards({ cards, showModal }) {
  const handleClick = () => {
    showModal(true);
  };

  return (
    <div className="cards">
      {cards &&
        cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <img src={card.image_url} alt={card.name} />
              <h2>{card.name}</h2>
              <p>Confidence: {card.confidence}%</p>
            </div>
          );
        })}
      <button className="add" onClick={handleClick}>
        <h1>+</h1>
      </button>
    </div>
  );
}

function Categories({ categories, updateCategories }) {
  const handleChange = (event) => {
    console.log({ categories });
    const { id } = event.target;
    updateCategories({ id });
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className="categories">
        {categories &&
          Object.keys(categories).map((key) => (
            <div className="categorie" key={key}>
              <input
                type="checkbox"
                onChange={handleChange}
                checked={categories[key]}
                id={key}
                disabled={key === "all" ? false : categories.all}
              />
              <label>{key.toLocaleUpperCase()}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

const POST_API_URL = "http://localhost:8000/classify-image";

function Modal({ show, setShow }) {
  if (!show) {
    return <></>;
  }

  const handleClick = () => {
    setShow(false);
  };

  return (
    <div className="modal">
      <h1>Modal Title</h1>
      <button onClick={handleClick}>x</button>
      <div className="modal__content">
        <form action={POST_API_URL} method="post">
          <div>
            <label>Upload an image</label>
            <input type="file" name="file" id="file" />
          </div>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
