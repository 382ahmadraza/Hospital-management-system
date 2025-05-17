"use client";
import Link from "next/link";
import LinkCustom from "./link-custom";

export default function NavMenuItem({ item }) {
  return (
    <li className="relative group">
      <span className="cursor-pointer font-semibold px-3 py-2 block">
        {item.label}
      </span>

      {/* If item has nested items (sub menu) */}
      {Array.isArray(item.items) && (
        <ul className="absolute top-full left-0 bg-white shadow-md  p-2 hidden group-hover:block z-10">
          {item.items.map((subItem, index) => (
            <li
              key={index}
              className="relative group/item px-2 py-1 hover:bg-gray-100 whitespace-nowrap"
            >
              <Link href={subItem.href || "#"}>{subItem.label}</Link>

              {/* If subItem has fieldDoctors */}
              {Array.isArray(subItem.fieldDoctors) && (
                <ul className="absolute top-0 left-full bg-white shadow-md p-2 hidden group-hover/item:block z-20">
                  {subItem.fieldDoctors.map((doc, i) => {
                    return (
                      <LinkCustom
                        url={doc.url}
                        key={i}
                        className="px-2 py-1 hover:bg-gray-200 whitespace-nowrap"
                      >
                        {doc.name}
                      </LinkCustom>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// "use client";
// import { ChevronIcon } from "@/assets/svg";
// import React, { useState } from "react";
// import LinkCustom from "./link-custom";
// import { usePathname } from "next/navigation";

// // show drop down on hover
// const DropDown = ({ loop, navLink }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const pathName = usePathname();

//   // handle toggle on hover
//   const handleToggle = () => {
//     setToggle(!toggle);
//   }

//   const dropdwonContent = (
//     <div className=" lg:absolute top-11 left-0 z-10 border-t-4  shadow-md border-primary">
//       {/* top tip triangle */}
//       <div className="hidden lg:absolute -top-2 left-8 w-1.5 h-1.5  bg-primary rotate-45"></div>

//       {/* map on the to show dropdown  */}
//       <div className=" p-3 bg-zinc-50 text-darkGray w-56 text-sm *:hover:text-primary font-normal ">
//         {loop.map((item, index) => (
//           <div
//             key={index}
//             className={` py-1.5  hover:text-primary ${
//               pathName === item.href ? "text-primary " : ""
//             }`}
//           >
//             <LinkCustom url={item.href} className="flex items-center gap-2">
//             <ChevronIcon className="-rotate-90 text-zinc-400" size={14} />
//             {item.label}
//             </LinkCustom>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className="relative lg:hidden">
//       <button className="hover:text-primary lg:py-3" onClick={(e) => e.stopPropagation()} ><span onClick={handleToggle}>{navLink}</span> </button>
//       {/* show drop down on hover */}
//       {/* <span onClick={handleToggle} ></span> */}
//       {toggle && dropdwonContent}
//       </div>

//       <div
//       className="relative hidden lg:flex"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button className="hover:text-primary lg:py-3">{navLink}</button>

//       {/* show drop down on hover */}
//       {isOpen && dropdwonContent}
//     </div>
//     </>
//   );
// };

// export default DropDown;
