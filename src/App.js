import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(0);
  return (
    <div className="App">
      <h1>Tatakae</h1>
      <button onClick={() => setText((prevCount) => prevCount + 1)}>+</button>
      <p>{text}</p>
      <button onClick={() => setText((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}

export default App;
