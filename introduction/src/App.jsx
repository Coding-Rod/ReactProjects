import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodo/CreateTodoButton';
import { Container } from './components/Container/Container';

import { useState, useEffect } from 'react';

import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
];

function App() {
  const [keyword, setKeyword] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(todos.filter((todo) => todo.completed).length);
  }, [todos]);

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
          completed={completed}
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
