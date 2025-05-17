"use client";
import React from "react";

const IconTextBtn = ({
  label = "Button",
  className = "",
  icon,
  iconPosition = "right",
  title,
}) => {
  return (
    <div className="font-alice">
      <button
        className={`py-2 cursor-pointer px-5 lg:text-base text-sm  font-medium w-fit justify-center  text-white  flex items-center duration-300 transition-all
        ${className}`}
        title={title}
      >
        {icon && iconPosition === "left" && icon}
        {label}
        {icon && iconPosition === "right" && icon}
      </button>
    </div>
  );
};

export default IconTextBtn;
