import React from "react";
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const [countColor, setCountColor] = useState("");

  const handleCount = (count) => {
    if (count <= 0) {
    }
  };

  return (
    <div className="count-con">
      <h1>Counter:</h1>
      <div className="count-btns">
        <span onClick={() => setCount(count + 1)} className="add-btn">
          +
        </span>
        <span className={`count`} onChange={() => handleCount(count)}>
          {count}
        </span>
        <span onClick={() => setCount(count - 1)} className="minus-btn">
          -
        </span>
      </div>
    </div>
  );
};

export default Counter;
