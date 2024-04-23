import { useState }  from 'react';
import './App.css';

import Button from './components/Button';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">React Tailwind CSS</h1>
        <Card count={count} />

        <div className="grid grid-cols-2 gap-4 pt-5">
          <Button 
            onClick={() => setCount(count - 1)}
            text="Decrement"
          />
          <Button 
            onClick={() => setCount(count + 1)}
            text="Increment"
          />
        </div>

      </div>
    </>
  );
}

export default App;