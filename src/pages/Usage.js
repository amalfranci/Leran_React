import React, { useState } from "react";
import "./Usage.css";

function Usage() {
  const [value, setValue] = useState(0);
  
  return (
    <div className="usage">
      <div className="usage-item">
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increment
        </button>
        <label>{value}</label>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Usage;
