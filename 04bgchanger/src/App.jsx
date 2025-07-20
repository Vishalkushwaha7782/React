import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const [count, setCount] = useState(0);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
