import React from "react";
import LinkCustom from "../link-custom";
import { navLinks,social } from "@/data/index";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchField from "../search-field";
import { X } from "lucide-react";


const Sidebar = ({ onClose }) => {
  const pathName = usePathname();
 
  return (
    <div
      className="fixed top-0 left-0  w-full h-full bg-black/50  "
      onClick={onClose}
    >
      <div className="absolute top-0 left-0 w-70 sm:w-1/2 h-full  bg-white ">
       
        {/* logo and search field */}
        <div className="h-72 flex flex-col items-center sm:px-11" onClick={(e) => e.stopPropagation()}>
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
          
        >
          <div className="flex items-center px-2 mt-4 h-full gap-3">
            {social.map((item, index) => (
              <LinkCustom key={index} url={item.href} target="_blank">
                {item.icon}
              </LinkCustom>
            ))}
          </div>

          {navLinks.map((item) => {
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
          })}
        </ul>
      </div>

      {/* close button */}
      <span onClick={onClose} className="absolute top-4 left-70 sm:left-1/2 xs:ml-2 text-white">
        <X size={40}/>
      </span>
    </div>
  );
};

export default Sidebar;
