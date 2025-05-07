"use client";
import React from "react";
import TopBar from "./top-bar";
import SearchField from "../../search-field";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import Button from "../../button";
import DropDown from "../../drop-down";
import LinkCustom from "../../link-custom";
import { navItems, navItems1, navItems2 } from "@/data/index";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const social = [
    { href: "#", icon: <Facebook /> },
    { href: "#", icon: <Instagram /> },
    { href: "#", icon: <Linkdin /> },
  ];

  const navLinks = [
    { id: 1, btn: <Button btnText="Home" />, href: "/" },
    {
      id: 2,
      btn: <DropDown loop={navItems} navLink="About us" />,
      href: "/about-us",
    },
    {
      id: 3,
      btn: <DropDown loop={navItems1} navLink="Department" />,
      href: "/department",
    },
    { id: 4, btn: <Button btnText="ARMDC" />, href: "/armdc" },
    {
      id: 5,
      btn: <DropDown loop={navItems2} navLink="Diagnostic Center" />,
      href: "/diagnostic-center",
    },
    { id: 6, btn: <Button btnText="Contact Us" />, href: "/contact-us" },
    { id: 7, btn: <Button btnText="Careers" />, href: "/careers" },
    {
      id: 8,
      btn: <Button btnText="Online Lab Reports" />,
      href: "/online-lab-reports",
    },
  ];

  const pathName = usePathname();
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
        <ul className="flex items-center py-1 w-full gap-5 text-sm font-bold">
          {navLinks.map((item) => {
            return (
              <LinkCustom
                url={item.href}
                key={item.id}
                className={`flex items-center  ${
                  pathName === item.href ? "text-primary" : "text-darkGray"
                }`}
              >
                {item.btn}
              </LinkCustom>
            );
          })}
        </ul>

        
      </div>
    </div>
  );
};

export default Navbar;
