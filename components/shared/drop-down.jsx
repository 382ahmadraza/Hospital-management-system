"use client";
import { ChevronIcon } from "@/assets/svg";
import React, { useState } from "react";
import LinkCustom from "./link-custom";
import Link from "next/link";

// show drop down on hover
const DropDown = ({ loop, navLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="py-3  text-sm hover:text-primary ">{navLink}</button>
     
     {/* show drop down on hover */}
      {isOpen && (
        <div className=" absolute top-10 left-0 z-10 border-t-4  shadow-md border-primary">
        
          {/* top tip triangle */}
          <div className="absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>

          {/* map on the to show dropdown  */}
          <div className=" p-3 font-normal bg-zinc-50 text-darkGray w-56 text-sm">
            {loop.map((item, index) => (
              <Link href="#" key={index} className="  space-y-2 *:hover:text-primary *:cursor-pointer">
                
                {item.values.map((e, index) => (
                  <LinkCustom url={e.href} key={index} className=" flex items-center gap-2 ">
                    <ChevronIcon className="-rotate-90 text-zinc-400" size={14} />
                    {e}
                  </LinkCustom>
                ))}

              </Link>
            ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
