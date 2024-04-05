import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Container } from '../components/Container';


function App({todos, setTodos, keyword, setKeyword, createNewTodo}) {
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