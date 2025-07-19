import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random());
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const RemoveValue = () => {
    // console.log("value added", Math.random());
    // counter = counter + 1;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={RemoveValue}>Remove value</button>
    </>
  );
}

export default App;
