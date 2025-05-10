"use client";
import React from "react";
import TopBar from "./top-bar";
import SearchField from "../../search-field";
import LinkCustom from "../../link-custom";
import { navLinks,social } from "@/data/index";
import { usePathname } from "next/navigation";

const Navbar = () => {
 

  const pathName = usePathname();
  // array of dropdwon menus

  return (
    <header className="h-20 lg:h-64  ">
      {/* contact info bar  */}
      <TopBar />

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
        <ul className="flex items-center w-full gap-5 text-sm font-bold ">
          {navLinks.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex items-center  ${
                  pathName === item.href
                    ? "text-primary border-b-4 border-primary "
                    : "text-darkGray"
                }`}
              >
                <LinkCustom url={item.href}>{item.btn}</LinkCustom>
                {/* <span className="lg:hidden">{item.btn}</span> */}
              </div>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
