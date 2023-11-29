import React, {useState} from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
        <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
