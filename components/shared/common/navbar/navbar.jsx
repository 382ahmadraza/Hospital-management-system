"use client";
import React ,{useState} from "react";
import TopBar from "./top-bar";
import SearchField from "../../search-field";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import Button from "../../button";
import DropDown from "../../drop-down";
import Link from "next/link";

const Navbar = () => {
  const [more, setMore] = useState(false);


  const social = [
    { href: "#", icon: <Facebook /> },
    { href: "#", icon: <Instagram /> },
    { href: "#", icon: <Linkdin /> },
  ];

  // array of dropdwon menus
  const navItems = ["Board Of Trustees", "Management Team", " "];
  const navItems1 = ["our mission", "our vision", "our values", "our history"];
  const navItems2 = ["our team", "our mission", "our vision", "our values", "our history"];

  return (
    <div className="h-20 lg:h-64  ">
      {/* contact info bar  */}
      <>
        <TopBar />
      </>

      <div className="hidden lg:flex flex-col justify-center border-t border-para shadow-md h- px-4 lg:px-16 xl:px-20">
        
        {/* nav top part  */}
        <div className=" w-full h-1/2 flex items-center gap-4 justify-end">
          
          {/* search field  */}
          <div className="border-x py-2">
            <SearchField />
          </div>

          {/* social media icons  */}
          <div className="flex items-center px-2 h-full gap-3">
            {social.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* nav bottom part  */}
        <ul className="flex items-center w-full gap-3">
          <li className="flex gap-9 font-bold">
            <Button btnText="Home" />
            <DropDown loop={navItems} navLink="About us" />
            <DropDown loop={navItems1} navLink="Department" className={`${<div
                              onMouseEnter={() => setMore(true)}
                              onMouseLeave={() => setMore(false)}
                            > 
                            
                            {navItems1.map((item, index) => {
                              <p key={index} className="flex items-center gap-2 ">
                                {/* <ChevronIcon className="-rotate-90 text-zinc-400" size={14} /> */}
                                {item}
                              </p>
                            })}
                           {more && (
                            <div className=" absolute -right-30 z-10 border-t-[4px] border-primary">
                      {/* top tip triangle */}
                      <div className="absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>                    <ChevronIcon className="-rotate-90 text-zinc-400" size={14} />
                                 sdfsdfsdf
                                 sdsdd
                            </div>
                          )}
                          </div>}`}/>
            <Button btnText="AFMDC" />
            <DropDown loop={navItems2} navLink="Diagnostic Center" />
            <Button btnText="Contact Us" />
            <Button btnText="Careers" />
            <Button btnText="Online Lab Reports" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
