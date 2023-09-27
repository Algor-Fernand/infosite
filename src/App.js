import React from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main";
import Box from "./components/Box"; //Boxes exercise
import { boxes } from "./boxes.js";
function App() {
  const [squares, setSquares] = React.useState(boxes);
  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      on={square.on}
      className="px-5"
      toggle={() => toggle(square.id)}
    />
  ));

  return (
    <div>
      <Navbar />
      <Main />
      <main>
        <h3 className="mb-5 underline">
          React Exercise: Click on a Box to change color
        </h3>
        {squareElements}
      </main>
    </div>
  );
}

export default App;
