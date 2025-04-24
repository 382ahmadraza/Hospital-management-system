"use client";
import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="  relative" onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
      <span >About</span>
      {isOpen && (
        <span  className=" absolute border-t-4 top-9 left-0">
          lkjsdfkjhfskjfkshsrjkhgr
          lkjsdfkjhfskjfkshsrjkhgr
          lkjsdfkjhfskjfkshsrjkhgr
        </span>
      )}
    </div>
  );
};

export default DropDown;


