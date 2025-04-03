import { useState, useEffect } from "react";

const CaseComponent = () => {
    //const [value, setValue] = useState(null);

    //here in the useState we need to pass an string instead of null because toUpperCase method 
    // can only be applied on the string only. 
    //therefore, the corrrect statement would be- 
    const [value, setValue] = useState("pooja");
    
    // useEffect(() => {
    //   console.log(value.toUpperCase());
    // }, [value]);

    //In `useEffect`, we should  pass an empty dependency array to ensure it runs only once  
    // after the initial render. If we included `value` as a dependency, `useEffect`  
    // would run every time `value` changes
    //also, it will be null at one point and we can not apply .toUpperCase on the null
      useEffect(() => {
      console.log(value.toUpperCase());
    }, []);
  
    return (
      <div>
        <h2>Case Component</h2>
        <p>Value: {value}</p>
        <button onClick={() => setValue(null)}>Set Null</button>
      </div>
    );
  };

export default CaseComponent