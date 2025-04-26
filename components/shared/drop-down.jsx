"use client";
import { ChevronIcon } from "@/assets/svg";
import React, { useState } from "react";

const DropDown = ({ loop, navLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="  py-3  text-sm hover:text-primary ">{navLink}</button>
      {isOpen && (
        <div className=" absolute top-10 left-0 z-10 border-t-[4px] border-primary">
          {/* top tip triangle */}
          <div className="absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>

          {/* map on the to show dropdown  */}
          <div className=" bg-white p-3 font-normal w-54 *:hover:text-primary *:cursor-pointer">
            {loop.map((item, index) => (
               <p key={index} className="flex items-center gap-2 ">
                <ChevronIcon className="-rotate-90 text-zinc-400" size={14} />
                {item}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
