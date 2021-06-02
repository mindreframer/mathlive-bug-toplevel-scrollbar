import * as mathlive from "mathlive";
import "mathlive/dist/mathlive-fonts.css";
import React, { useCallback, useState, useRef } from "react";

const configureMathElement = (mfe: mathlive.MathfieldElement) => {
  mfe.setOptions({
    smartFence: true,
    virtualKeyboardMode: "off", // "manual"
    virtualKeyboards: "numeric symbols",
  });
};

interface MathElementProps {
  value: string;
}
export const MathElement = ({ value }: MathElementProps) => {
  const [curval, setCurVal] = useState(value);
  const [configured, setConfigured] = useState(false);
  const [mfe, setMfe] = useState(new mathlive.MathfieldElement());

  const elRef = useCallback((node) => {
    if (node !== null) {
      if (!configured) {
        configureMathElement(mfe);
        setConfigured(true);
      }
      mfe.setValue(curval);
      node.appendChild(mfe);
    }
  }, []);

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div className="mathfield-element" ref={elRef}></div>
      </div>
    </div>
  );
};
