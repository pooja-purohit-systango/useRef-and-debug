import React, { useState, useEffect } from "react";

export default function Counter()  {
  const [count, setCount] = useState(0);
  
  // this state is not required here. 
 // const [update, setUpdate] = useState(false);

  const increment = () => {
    setCount(count + 1);

    //here update is not a function, setUpdate is function  --  update(!setUpdate);
    //therefore, the correct statement would be
   // setUpdate(!update)

    //also, this thing is not required in this component. 
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};