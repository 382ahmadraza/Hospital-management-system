import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MedIcon } from "@/assets/svg";
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
          <ChevronUp className="h-[34px] w-9 bg-primary" />
        </>
      ) : (
        <>
          <MedIcon size={34} className="bg-primary " />
          <ChevronDown className="h-[34px] w-9 text-primary border-1" />
        </>
      )}

      {isOpen && (
        <div className="lg:hidden flex flex-col bg-white shadow-md border-2 border-primary absolute top-16 right-4 z-10">
          {HeaderContact.map((item) => {
            const { id, icon, label, value } = item;
            return (
              <div
                key={id}
                className={`py-2 px- mx-3 border-b border-zinc-300 lg:border-none ${id === 3 ? "border-none" : ""}`}
              >
                <HeaderContacts icon={icon} label={label} value={value} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToggleContactDetails;
