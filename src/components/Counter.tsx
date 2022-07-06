import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(c => c + 1);
  };
  function handleDecrement() {
    setCounter(c => c - 1);
  };

  return (
    <div className="flex gap-5">
      <button 
        className="bg-green-300 w-10 h-10 flex justify-center items-center rounded-full"
        onClick={handleDecrement}
      >
        -
      </button>
      <h3 className="text-2xl">
        {counter}
      </h3>
      <button 
        className="bg-green-300 w-10 h-10 justify-center items-center rounded-full"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export { Counter };
