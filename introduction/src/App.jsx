import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Container } from './components/Container';

import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

import './App.css';

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
    <>
      <Container>
        <TodoCounter 
          completed={todos.filter((todo) => todo.completed).length}
          total={todos.length}
        />
        <TodoSearch 
          handleSearchValue={setKeyword}
        />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          keyword={keyword}
        />
        
      </Container>
      <CreateTodoButton 
        onClick={createNewTodo}
      />
    </>
  );
}

export default App;
