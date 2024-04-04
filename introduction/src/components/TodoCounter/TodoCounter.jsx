import './TodoCounter.css';

// Update the TodoCounter component to use the styles object instead of the styles prop.
// const styles = {
//   fontSize: '24px',
//   textAlign: 'center',
//   margin: 0,
//   padding: '48px'
// };


function TodoCounter({ completed, total }) {
  return (
    <h1>
      Has completado { completed } de { total } TODOs
    </h1>
  );
}

export { TodoCounter };
