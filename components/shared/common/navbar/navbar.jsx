"use client";
import React from "react";
import TopBar from "./top-bar";
import SearchField from "../../search-field";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import Button from "../../button";
import DropDown from "../../drop-down";
import LinkCustom from "../../link-custom";
import { navItems, navItems1, navItems2 } from "@/data/index";

const Navbar = () => {
  const social = [
    { href: "#", icon: <Facebook /> },
    { href: "#", icon: <Instagram /> },
    { href: "#", icon: <Linkdin /> },
  ];

  // array of dropdwon menus
  
  return (
    <div className="h-20 lg:h-64  ">
      {/* contact info bar  */}
      <>
        <TopBar />
      </>

      <div className="hidden lg:flex flex-col justify-center border-t border-zinc-200 shadow-md h- px-4 lg:px-16 xl:px-20">
        {/* nav top part  */}
        <div className=" w-full h-1/2 flex items-center gap-4 justify-end">
          {/* search field  */}
          <div className="border-x border-zinc-200 py-2">
            <SearchField />
          </div>

          {/* social media icons  */}
          <div className="flex items-center px-2 h-full gap-3">
            {social.map((item, index) => (
              <LinkCustom key={index} url={item.href}>
                {item.icon}
              </LinkCustom>
            ))}
          </div>
        </div>

        {/* nav bottom part  */}
        <ul className="flex items-center w-full gap-4 text-sm py-2 font-bold text-darkGray">
  <li><Button url="/" btnText="Home" /></li>
  <li><DropDown loop={navItems} navLink="About us" goto='/about-us'/></li>
  <li><DropDown loop={navItems1} navLink="Department" goto='/department'/></li>
  <li><Button btnText="AFMDC" /></li>
  <li><DropDown loop={navItems2} navLink="Diagnostic Center" goto='diagnostic-center'/></li>
  <li><Button btnText="Contact Us" /></li>
  <li><Button btnText="Careers" /></li>
  <li><Button btnText="Online Lab Reports" /></li>
</ul>

      </div>
    </div>
  );
};

export default Navbar;
