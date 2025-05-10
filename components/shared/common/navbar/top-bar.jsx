import Image from "next/image";
import React from "react";
import HeaderContacts from "../../header-contacts";
import { HeaderContact } from "@/data/index";
import { Menu } from "lucide-react";
import ToggleContactDetails from "../../toggle-contact-details";
import LinkCustom from "../../link-custom";
import { useState } from 'react'
import Sidebar from "../sidebar";

const TopBar = () => {
  const [IsOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <div className="h-full lg:h-36 py-3 shadow-md lg:shadow-none flex justify-between items-center px-4 md:px-6 lg:px-16 xl:px-20">

      {/* logo container */}
      <div className="w-fit cursor-pointer flex items-center gap-1">
       
        {/* menu bar  */}
        <div className="lg:hidden">
          <Menu size={30} onClick={handleToggle}/>
          {IsOpen && (
               <Sidebar onClose={()=>setIsOpen(false)} />
          )}
        </div>

        {/* logo  */}
        <LinkCustom url="/">
          <Image
            src="/assets/logo.png"
            alt="AR Hospital"
            height={80}
            width={80}
            className="p-4  proriorty lg:p-0"
          />
        </LinkCustom>
      </div>

      {/* contact info bar for small screens */}
      <ToggleContactDetails />

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
