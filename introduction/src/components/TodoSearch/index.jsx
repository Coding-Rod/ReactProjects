
const style = {
  borderRadius: '10px',
  fontSize: '16px',
  marginBottom: '10px',
  padding: '10px',
  width: '100%',
};

function TodoSearch({ handleSearchValue }) {

  return (
    <input
      style={style}
      placeholder="Cortar cebolla"
      onChange={(event) => handleSearchValue(event.target.value)}
    />
  );
}

export { TodoSearch };
