
import { useState } from "react";
const Form = () => {
    const [input, setInput] = useState("");
  
    const handleChange = (e) => {
    //here we need to pass the current value  and set the input to its current value. 
    //   setInput(value);

    setInput(e.target.value)
    };
  
    return (
      <div>
        <h2>Form</h2>
        <input type="text" value={input} onChange={handleChange} />
        <p>Typed: {input}</p>
      </div>
    );
  };

  export default Form;
  