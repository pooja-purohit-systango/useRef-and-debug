import React, { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}  
      style={{
        border: "1px solid black",
        outline: "none" 
      }}
      onFocus={(e) => {
        e.target.style.boxShadow = "0px 0px 8px magenta"; 
      }}
    />
  );
});

export default CustomInput;
