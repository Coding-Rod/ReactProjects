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
        {categories && (
          Object.keys(categories).map(key => (
            <div className="categorie" key={key}>
              <input
                type="checkbox"
                onChange={handleChange}
                checked={categories[key]}
                id={key}
                disabled={key === 'all' ? false : categories.all}
              />
              <label>{ key.toLocaleUpperCase() }</label>
            </div>
          )) 
        )}
      </div>
    </div>
  );
}

export { Categories };
