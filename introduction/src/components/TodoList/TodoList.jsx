import { TodoItem } from './TodoItem';

function TodoList({ todos, setTodos, keyword }) {

  function handleToggleComplete (text) {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  function handleDeleteTodo (text) {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <ul>
      {todos
        .filter((todo) => todo.text.toLowerCase().includes(keyword.toLowerCase()))
        .map((todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))
      }
    </ul>
  );
}

export { TodoList };

