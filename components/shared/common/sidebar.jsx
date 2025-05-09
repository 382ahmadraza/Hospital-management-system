import React from "react";
import LinkCustom from "../link-custom";
import { navLinks } from "@/data/index";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchField from "../search-field";

const Sidebar = ({ onClose }) => {
  const pathName = usePathname();

  return (
    <div
      className="fixed top-0 left-0  w-full h-full bg-black/50  "
      onClick={onClose}
    >
      
      <ul
        className="absolute top-0 left-0 w-64 h-full flex flex-col bg-white items-center gap-5 text-sm font-bold"
        onClick={(e) => e.stopPropagation()}
      >
      <Image
        src="/assets/logo.png"
        alt="AR Hospital"
        height={80}
        width={80}
        className="p-3  proriorty lg:p-0"
      />

      <SearchField className='!h-14 !w-full bg-zinc-100 font-light'/>
        {navLinks.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex items-center  ${
                pathName === item.href
                  ? "text-primary "
                  : "text-darkGray"
              }`}
            >
              <LinkCustom url={item.href}>
              {item.btn}
              </LinkCustom>
              
            </div>
          );
        })}
      </ul>
      <span onClick={onClose}>close</span>
    </div>
  );
};

export default Sidebar;
