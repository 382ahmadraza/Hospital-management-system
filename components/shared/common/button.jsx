import React from "react";

const Button = ({ btnText = "", className = "", disabled='' }) => {
  return (
    <button
    disabled={disabled}
      className={`py-1 lg:py-3 px-2 w-fit text-sm  hover:text-primary cursor-pointer ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
