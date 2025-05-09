"use client";
import { ChevronIcon } from "@/assets/svg";
import React, { useState } from "react";
import LinkCustom from "./link-custom";
import { usePathname } from "next/navigation";

// show drop down on hover
const DropDown = ({ loop, navLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  // handle toggle on hover
  const handleToggle = () => {
    setToggle(!toggle);
  }

  const dropdwonContent = (
    <div className=" lg:absolute top-11 left-0 z-10 border-t-4  shadow-md border-primary">
      {/* top tip triangle */}
      <div className="hidden lg:absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>

      {/* map on the to show dropdown  */}
      <div className=" p-3 bg-zinc-50 text-darkGray w-56 text-sm *:hover:text-primary font-normal ">
        {loop.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 py-1.5  hover:text-primary ${
              pathName === item.href ? "text-primary " : ""
            }`}
          >
            <LinkCustom url={item.href}>
            <ChevronIcon className="-rotate-90 text-zinc-400" size={14} />
            {item.label}
            </LinkCustom>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="relative lg:hidden">
      <button className="hover:text-primary lg:py-3" onClick={(e) => e.stopPropagation()} ><span onClick={handleToggle}>{navLink}</span> </button>
      {/* show drop down on hover */}
      {/* <span onClick={handleToggle} ></span> */}
      {toggle && dropdwonContent}
      </div>



      <div
      className="relative hidden lg:flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-primary lg:py-3">{navLink}</button>

      {/* show drop down on hover */}
      {isOpen && dropdwonContent}
    </div>
    </>
  );
};

export default DropDown;
