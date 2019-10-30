import React from "react";
import ReactDOM from "react-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[1]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
