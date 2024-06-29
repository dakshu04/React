 //JSX is JS with XML
 //state  , components

import {useState} from "react";

function App() {
  const [count, setCount] = useState(0); //[ 1, 2 ] //can be understand as a initialisation is done

  function onClickHandler() {
    setCount(count + 1);
  }
              // js things should be in curly braces
  return (
    <div>
         <CustomButton count = {count} setCount = {setCount} ></CustomButton> 
    </div>
  )
}

//Component
//Two inputs are there in customButton count and setCount both knowns as props in the component
function CustomButton(props) {

  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
