// updater function = function passed as an argument to setState()
//         eg:- setYear(arrow function)
//         allows for safe updates based on the previous state
//         used with multiple State updates and asynchronous functions

import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-button" onClick={reset}>
          Reset
        </button>
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}

export default MyComponent;
