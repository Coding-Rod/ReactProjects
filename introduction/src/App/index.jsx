import AppUI from './AppUI';

import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

import './styles.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  function createNewTodo() {
    const newTodo = prompt('Escribe el nuevo TODO');
    if (!newTodo) return;

    const newTodos = [...todos];
    newTodos.push({
      text: newTodo,
      completed: false,
    });

    saveTodos(newTodos);
  }

  return (
    <AppUI
      todos={todos}
      setTodos={saveTodos}
      keyword={keyword}
      setKeyword={setKeyword}
      createNewTodo={createNewTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
