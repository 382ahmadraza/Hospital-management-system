"use client";
import React from "react";
import TopBar from "./top-bar";
import SearchField from "../common/search-field";
import SocialLinks from "../social-links";
import { navElements } from "@/data/index";
import NavMenuItem from "../common/navbar-elements";


const Navbar = () => {
  return (
    <header className="h-20 lg:h-fit font-montserrat ">
     
      {/* contact info bar  */}
      <TopBar />

      <div className="hidden lg:flex flex-col justify-center border-t border-zinc-200 shadow-md h- px-4 lg:px-14 xl:px-20">
       
        {/* nav top part  */}
        <div className=" w-full h-1/2 flex items-center gap-4 justify-end">
         
          {/* search field  */}
          <div className="border-x border-zinc-200 py-2">
            <SearchField />
          </div>

          {/* social icon  */}
          <SocialLinks />
        </div>

        <div className="flex z-40 list-none">
          {navElements.map((item, index) => {
            return (
                <NavMenuItem key={index} item={item}/>
            );
          })}
        </div>

       
      </div>
    </header>
  );
};

export default Navbar;
