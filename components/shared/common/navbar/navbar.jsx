import React from "react";
import TopBar from "./top-bar";
import SearchField from "../../search-field";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import Button from "../../button";
import DropDown from "../../drop-down";
import Link from "next/link";

const Navbar = () => {
  const social = [
    { href: "#", icon: <Facebook /> },
    { href: "#", icon: <Instagram /> },
    { href: "#", icon: <Linkdin /> },
  ];

  // array of dropdwon menus
  const navItems = ["about us ", "our team", "our mission"];
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
            <DropDown loop={navItems1} navLink="Department" />
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
