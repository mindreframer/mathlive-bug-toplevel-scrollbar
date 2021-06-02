import React, { useState } from "react";
import { MathElement } from "./MathElement";

function App() {
  const [values, setValues] = useState([] as string[]);
  const placeholder = `\\sigma=\\sqrt[]{\\frac{1}{N}\\sum ^N_{i=1}(x_i-\\mu)^2}\\text{ 20where }\\mu=\\frac{1}{N}\\sum ^N_{i=1}x_i`;
  const onAddValue = () => {
    setValues((oldvalues) => oldvalues.concat([placeholder]));
  };
  const onReset = () => {
    setValues((oldvalues) => []);
  };
  return (
    <div className="Issue-container">
      <p>Extra top-level scrollbar, although MathElements in fixed container</p>
      <button onClick={onAddValue}>Add ({values.length})</button>
      <button onClick={onReset}>Reset</button>
      <div className="inner-box">
        {values.map((value, index) => {
          return <MathElement key={index} value={value} />;
        })}
      </div>
    </div>
  );
}

export default App;
