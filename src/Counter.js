import React, { useState } from 'react';
import externalMethod from './ExternalMethod';
import './Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    externalMethod(count);
  };


return(
  <div className="counter-container">
  <h1>Counter: {count}</h1>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  <button onClick={handleClick}>Send State to External Method</button>
</div>
);
};

export default Counter;
