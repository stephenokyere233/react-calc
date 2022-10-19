import React from "react";

const Display = ({ screen, span }) => {
  return (
    <div className="screen">
      <span
        className="digits"
        style={{
          overflowY: `${screen.textContent > 40 ? "scroll" : "hidden"}`,
        }}
      >
        {screen}
        {/* style={Length && style} */}
      </span>
      <span className="result">{span}</span>
    </div>
  );
};

export default Display;
