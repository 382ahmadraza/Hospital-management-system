import React, { useState } from "react";
import { navElements } from "@/data/index";
import Image from "next/image";
import SearchField from "./common/search-field";
import { X } from "lucide-react";
import SocialLinks from "./social-links";
import NavMenuItem from "./common/navbar-elements";

const Sidebar = ({ onClose }) => {
  // const pathName = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  return (
    <div
      className="fixed top-0 left-0 z-30 w-full h-full bg-black/50  "
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 w-72 h-full  bg-white overflow-y-auto">
        {/* logo and search field */}
        <div
          className="h-72 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center h-2/3 my-5">
            <Image
              src="/assets/logo.png"
              alt="AR Hospital"
              height={150}
              width={150}
              className="p-3 proriorty lg:p-0"
            />
          </div>

          <SearchField className="!h-16 !w-full bg-zinc-100 font-light !px-5 " />
        </div>

        {/* nav links */}
        <ul
          className="flex flex-col items-center gap-5 text-sm font-bold"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center px-2 mt-4 h-full gap-3">
            <SocialLinks />
          </div>

          <div className="  z-40 list-none flex flex-col">
            {navElements.map((item, idx) => (
              <NavMenuItem
                key={idx}
                item={item}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                activeSubMenu={activeSubMenu}
                setActiveSubMenu={setActiveSubMenu}
              />
            ))}
          </div>

          {/* {navLinks.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex items-center ${
                  pathName === item.href ? "text-primary " : "text-darkGray"
                }`}
              >
                <LinkCustom url={item.href}>{item.btn}</LinkCustom>
              </div>
            );
          })} */}
        </ul>
      </div>

      {/* close button */}
      <span
        onClick={onClose}
        className="absolute top-4 left-71 xs:ml-2 text-white"
      >
        <X size={40} />
      </span>
    </div>
  );
};

export default Sidebar;
