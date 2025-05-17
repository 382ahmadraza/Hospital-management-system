"use client";
import React from "react";
import TopBar from "./top-bar";
import SearchField from "../common/search-field";
import LinkCustom from "../common/link-custom";
import { navLinks } from "@/data/index";
import { usePathname } from "next/navigation";
import SocialLinks from "../social-links";
import { navItems, navItems1, navItems2 } from "@/data/index";
import NavMenuItem from "../common/drop-down";

const Navbar = () => {
  const pathName = usePathname();

  const navElements = [
    { label: "home", items: "btn" },
    { label: "d", items: navItems },
    { label: "AFDS", items: "btn" },
    { label: "d", items: navItems1 },
    { label: "home", items: "btn" },
    { label: "home", items: "btn" },
    { label: "d", items: navItems2 },
  ];

  return (
    <header className="h-20 lg:h-fit  ">
      {/* contact info bar  */}
      <TopBar />

      <div className="hidden lg:flex flex-col justify-center border-t border-zinc-200 shadow-md h- px-4 lg:px-16 xl:px-20">
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

        {/* nav bottom part  */}
        {/* <ul className="flex items-center w-full gap-5 text-sm font-bold ">
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
              </div>
            );
          })}
        </ul> */}
      </div>
    </header>
  );
};

export default Navbar;
