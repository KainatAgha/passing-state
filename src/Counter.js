import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Call the external method and pass the current count as a parameter
    externalMethod(count);
  };

  const externalMethod = (value) => {
    console.log(`Received value from Counter component: ${value}`);
    // Perform operations with the received value here
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
