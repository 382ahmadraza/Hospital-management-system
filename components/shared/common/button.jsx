import React from "react";

const Button = ({ btnText = "", className = "" }) => {
  return (
    <button
      className={`py-1 lg:py-3 px-2 text-sm  hover:text-primary ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
