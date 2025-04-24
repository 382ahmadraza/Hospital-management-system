"use client";
import React, { useState } from "react";

const DropDown = ({ loop, navLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="  relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="  py-3  text-sm hover:text-primary ">{navLink}</button>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className=" absolute top-10 left-0 z-10 border-t-[4px] border-primary"
        >
          {/* top tip triangle */}
          <div className="absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>

          {/* map on the prop  */}
          <div className="bg-white p-3 font-normal w-44 *:hover:text-primary *:cursor-pointer">
            {loop.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
