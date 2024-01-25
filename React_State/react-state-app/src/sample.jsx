import React, { useState } from "react";
import "./sample.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Spp() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCount(count + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}           
        </button>
      ))}
      <p>{count}</p>
    </div>
  );
}

export {Spp};