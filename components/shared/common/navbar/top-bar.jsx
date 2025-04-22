"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeaderContacts from "../../header-contacts";
import { HeaderContact } from "@/data/index";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import ToggleContactDetails from "../../toggle-contact-details";

const TopBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <div className="h-full border py-3  flex justify-between items-center px-4 lg:h-36 lg:px-16 xl:px-20">
      {/* contact bar conatainer */}

      {/* logo container */}
      <div className="w-fit border flex items-center gap-3  lg:p-4">
      
        {/* menu bar  */}
        <div className="lg:hidden">
          <Menu className="lg:hidden " size={30} />
        </div>
       
        <Image
          src="/assets/logo.jpg"
          alt="AR Hospital"
          className=""
          height={30}
          width={30}
        />
        <span className="md:text-2xl font-bold">AR Hospital</span>
      </div>

      {/* contact info bar for small screens */}
      <ToggleContactDetails  />
  

      {/* contact bar conatainer */}
      <div className="hidden lg:flex gap-2 xl:gap-11 ">
        {HeaderContact.map((item) => {
          const { id, icon, label, value } = item;
          return (
            <HeaderContacts key={id} icon={icon} label={label} value={value} />
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
