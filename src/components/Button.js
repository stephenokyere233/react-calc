import React from "react";

const Button = ({ color, size, onClick, onKeypress, element, operator }) => {
  return (
    <>
      <button
        className="btn"
        onClick={onClick}
        // onKeyPress={onKeypress}
        style={{ background: color, width: size }}
      >
        {element ? element : operator}
      </button>
    </>
  );
};

export default Button;
