const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '24px',
    margin: '0 10%'
};

function Container({ children }) {
  return (
    <div style={styles}>
        {children}
    </div>
  );
}

export { Container };