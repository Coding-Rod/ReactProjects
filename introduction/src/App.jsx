import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoList/TodoItem';
import { CreateTodoButton } from './components/CreateTodo/CreateTodoButton';
import { Container } from './components/Container/Container';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <>
      <Container>
        <TodoCounter 
          completed={16}
          total={25}
        />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>
        
        </Container>
      <CreateTodoButton />
    </>
  );
}

export default App;
