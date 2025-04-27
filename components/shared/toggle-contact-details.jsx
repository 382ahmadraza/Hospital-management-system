"use client";
import React, { useState } from "react";
import { MedIcon ,ChevronIcon } from "@/assets/svg";
import HeaderContacts from "./header-contacts";
import { HeaderContact } from "@/data/index";

const ToggleContactDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleMenu}
      className="lg:hidden flex items-center h-fit w-fit *:p-1 text-white"
    >
      {isOpen ? (
        <>
          <MedIcon size={34} className="text-primary border-1" />
          <ChevronIcon className="rotate-180 h-[34px] w-9 bg-primary" />
        </>
      ) : (
        <>
          <MedIcon size={34} className="bg-primary " />
          <ChevronIcon className="h-[34px] w-9 text-primary border-1" />
        </>
      )}

      {/* show on toggle click for small screens */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-white shadow-md border border-primary absolute top-16 right-4 z-10">
         
          {/* map on conatct info bar for small screens  */}
          {HeaderContact.map((item) => {
            return (
              <div
                key={item.id}
                className={`py-2 px- mx-3 border-b border-zinc-300 lg:border-none ${
                  item.id === 3 ? "border-none" : ""
                }`}
              >
                <HeaderContacts
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToggleContactDetails;
