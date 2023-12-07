import React, { useState, useRef } from "react";

const DisplayUser = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError("Input cannot be empty");
      return;
    }

    setSubmittedValue(inputValue); // Store submitted value
    setInputValue("");
    setError("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputField">Input:</label>
          <input
            type="text"
            id="inputField"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleFocusInput}>Focus Input</button>
      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
};



export default DisplayUser;
