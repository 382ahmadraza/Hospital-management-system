import React from "react";
import TopBar from "./top-bar";
import SearchField from "../../search-field";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import Button from "../../button";
import DropDown from "../../drop-down";

const Navbar = () => {
  return (
    <div className="h-20 lg:h-64 border">
      {/* contact info bar  */}
      <TopBar />

      <div className="hidden lg:flex flex-col justify-center border h-28 px-4 lg:px-16 xl:px-20">
        
        {/* search field  */}
        <div className="border w-full h-1/2 flex gap-4 justify-end">
            <div className="border-x h-full">
              <SearchField/>
            </div>
            <div className="flex items-center px-2 h-full gap-3">
              <Facebook/>
              <Instagram/>
              <Linkdin/>
            </div>
        </div>


        <div className="border w-full flex items-center h-1/2">
            <ul className="flex gap-3">
              <li><Button btnText="Home" className="font-semibold"/></li>
              <li><DropDown/></li>
              <li><DropDown/></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
