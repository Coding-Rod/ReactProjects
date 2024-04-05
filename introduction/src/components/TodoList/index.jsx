import Anime, { anime } from 'react-anime';
import { TodoItem } from './TodoItem';
import { Skeleton } from '@mui/material';

import './styles.css';

function TodoList({ todos, setTodos, keyword, loading, error }) {

  function handleToggleComplete (text) {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    anime({
      targets: `.todo-item-${todoIndex}`,
      keyframes: [
      { opacity: 0, scale: 0.5, duration: 0 },
      { opacity: 1, scale: 1.05, duration: 200, easing: 'easeOutExpo' },
      { scale: 1, duration: 100, easing: 'easeInOutSine' },
      ],
      complete: () => {
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      setTodos(newTodos);
      }
    });
  }

  function handleDeleteTodo (text) {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    
    anime({
      targets: `.todo-item-${todoIndex}`,
      opacity: 0,
      duration: 500,
      easing: 'easeOutExpo',
      complete: () => {
        // Update the newTodos array after the animation is completed
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);

        // Animate the rest of the items after the deletion
        anime({
          targets: `.todo-item-${todoIndex}`,
          opacity: 1,
          duration: 1000,
          easing: 'easeOutExpo',
        });
      }
    });
  }

  const loadingSkeletons = () => {
    return (
      <div className='skeleton-container'>
        { [...Array(5)].map((_, index) => <Skeleton key={index} variant="rectangular" className='skeleton' />) }
      </div>
    );
  }

  return (
    <>
      {loading && loadingSkeletons()}
      {error && <p>An error has occurred!</p>}
      {(!loading && !todos.length) && <p>Create your first todo!</p>}
      {(!loading && todos.length) && 
        <ul>
          {todos
            .filter((todo) => todo.text.toLowerCase().includes(keyword.toLowerCase()))
            .map((todo, index) => (
              <Anime
                key={index}
                >
                <TodoItem
                  className={`todo-item-${index}`}
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={handleToggleComplete}
                  onDelete={handleDeleteTodo}
                />
              </Anime>
            ))
          }
        </ul>
      }
    </>
  );
}

export { TodoList };

