import AppUI from './AppUI';

import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

import './styles.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
];

function App() {
  const [keyword, setKeyword] = useState('');
  const [todos, setTodos] = useLocalStorage('TODOS_V1', defaultTodos);

  function createNewTodo() {
    const newTodo = prompt('Escribe el nuevo TODO');
    if (!newTodo) return;

    const newTodos = [...todos];
    newTodos.push({
      text: newTodo,
      completed: false,
    });

    setTodos(newTodos);
  }

  return (
    <AppUI
      todos={todos}
      setTodos={setTodos}
      keyword={keyword}
      setKeyword={setKeyword}
      createNewTodo={createNewTodo}
    />
  );
}

export default App;
