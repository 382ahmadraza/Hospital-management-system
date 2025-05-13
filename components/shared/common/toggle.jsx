"use client";
import React, { useState } from "react";
import LinkCustom from "./link-custom";
import { ChevronIcon } from "@/assets/svg";

const Toggle = ({ text, doctor, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex justify-between w-full bg-primary text-white py-3 px-2 border text-xs font-semibold ${className}`}
      >
        {text}
        {/* <ChevronIcon /> */}
        {isOpen ? (
                  <ChevronIcon className="rotate-180  " />
              ) : (
                  <ChevronIcon className="text-white " />
              )}
      </button>
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className='absolute  overflow-y-scroll h-[15rem] w-full bg-white'
        >
          {doctor.map((doctor, index) => (
            <LinkCustom
              key={index}
              href={doctor.href}
              className="block p-1 text-sm text-darkGray hover:text-primary"
            >
              {doctor.name}
              <hr className="mt-2 text-para" />
            </LinkCustom>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toggle;
