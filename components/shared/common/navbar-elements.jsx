"use client";
import LinkCustom from "./link-custom";
import { usePathname } from "next/navigation";
import { ChevronIcon } from "@/assets/svg";

export default function NavMenuItem({
  item,
  activeMenu,
  setActiveMenu,
  activeSubMenu,
  setActiveSubMenu,
}) {
  const pathName = usePathname();

  const toggleMenu = (label) => {
    setActiveMenu(label === activeMenu ? null : label);
    setActiveSubMenu(null); // reset nested submenu
  };

  const toggleSubMenu = (label) => {
    setActiveSubMenu(label === activeSubMenu ? null : label);
  };

  return (
    <li className="relative group">
      <div className="flex items-center justify-between lg:block">
        <LinkCustom
          url={item.href}
          className={`cursor-pointer font-bold lg:font-semibold px-1 lg:py-2 block text-base lg:text-sm hover:text-primary w-fit my-2 lg:my-0 lg:mx-2 xl:mx-3 ${
            (
              item.href === "/"
                ? pathName === "/"
                : pathName.startsWith(item.href)
            )
              ? "text-primary lg:border-b-4 border-primary"
              : "text-zinc-600"
          }`}
        >
          {item.label}
        </LinkCustom>

        {Array.isArray(item.items) && (
          <button
            className="lg:hidden px-2"
            onClick={() => toggleMenu(item.label)}
          >
            <ChevronIcon
              className={`transition-transform duration-300 ${
                activeMenu === item.label ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {Array.isArray(item.items) && (
        <ul
          className={`bg-zinc-100 shadow-md border-t-4 border-primary p-2 z-10
          ${activeMenu === item.label ? "block" : "hidden"}  
          lg:absolute lg:top-9 lg:left-0 lg:w-[14rem] lg:group-hover:block`}
        >
          {item.items.map((subItem, index) => (
            <li
              key={index}
              className="relative group/item text-sm  whitespace-nowrap"
            >
              <div className="flex justify-between items-center group">
                <LinkCustom
                  url={subItem.href || "#"}
                  className={`${`hover:bg-gray-200 flex items-center hover:text-primary h-full w-full lg:px-2 py-1.5 ${
                    subItem.href === pathName ? "text-primary" : "text-darkGray"
                  }`}`}
                >
                  <ChevronIcon className="-rotate-90 mr-1" size={14} />
                  {subItem.label}
                </LinkCustom>

                {Array.isArray(subItem.fieldDoctors) && (
                  <button
                    className="lg:hidden ml-2"
                    onClick={() => toggleSubMenu(subItem.label)}
                  >
                    <ChevronIcon
                      className={`transition-transform duration-300 ${
                        activeSubMenu === subItem.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {Array.isArray(subItem.fieldDoctors) && (
                <ul
                  className={`bg-zinc-100 shadow-md p-2 z-20
                  ${activeSubMenu === subItem.label ? "block" : "hidden"}
                  lg:absolute lg:top-0 lg:left-full lg:border-t-4 border-primary lg:w-[14rem] lg:group-hover/item:block`}
                >
                  {subItem.fieldDoctors.map((doc, i) => (
                    <LinkCustom
                      url={`/department/neuroscience${doc.url}`}
                      key={i}
                      className={`lg:px-2 py-1 hover:bg-gray-200 flex hover:text-primary items-center ${
                        doc.url === pathName ? "text-primary" : "text-darkGray"
                      }`}
                    >
                      <ChevronIcon className="-rotate-90 mr-1" size={14} />
                      {doc.name}
                    </LinkCustom>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
