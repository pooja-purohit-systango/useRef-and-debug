import { useRef } from "react";
import CustomInput from './CustomInput'

function ParentScrolling() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.scrollIntoView({
      behavior: "smooth",  

    }); 
  };

  return (
    <div>
         <button onClick={handleClick} style={{height: "40px", width: "80px"}}>Input</button>
         <div style = {{height : " 1000px"}}></div>
      <CustomInput ref={inputRef} />
    </div>
  );
}
export default ParentScrolling;
