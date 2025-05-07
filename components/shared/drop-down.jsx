"use client";
import { ChevronIcon } from "@/assets/svg";
import React, { useState } from "react";
import LinkCustom from "./link-custom";
import { usePathname } from "next/navigation";

// show drop down on hover
const DropDown = ({ loop, navLink  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button  className="hover:text-primary py-3">{navLink}</button>

      {/* show drop down on hover */}
      {isOpen && (
        <div className=" absolute top-8 left-0 z-10 border-t-4  shadow-md border-primary">
          {/* top tip triangle */}
          <div className="absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>

          {/* map on the to show dropdown  */}
          <div className=" p-3 bg-zinc-50 text-darkGray w-56 text-sm *:hover:text-primary font-normal ">
            {loop.map((item, index) => (
              <LinkCustom
                url={item.href}
                key={index}
                className={`flex items-center gap-2 py-1.5  hover:text-primary ${pathName === item.href ? "text-primary" : ""}`}
              >
                <ChevronIcon className="-rotate-90 text-zinc-400" size={14} />
                {item.label}

              </LinkCustom>
            ))}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
