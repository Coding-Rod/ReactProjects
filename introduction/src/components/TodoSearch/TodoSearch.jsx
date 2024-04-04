const style = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',
  borderRadius: '10px',
  margin: '10px 20px',
};



function TodoSearch() {
  return (
    <input 
      style={style}
      placeholder="Cortar cebolla"
    />
  );
}

export { TodoSearch };
