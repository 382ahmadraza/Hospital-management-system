import Image from "next/image";
import React from "react";
import HeaderContacts from "../../header-contacts";
import { HeaderContact } from "@/data/index";
import { Menu } from "lucide-react";
import ToggleContactDetails from "../../toggle-contact-details";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="h-full lg:h-36 py-3 flex justify-between items-center px-4 md:px-6 lg:px-16 xl:px-20">
      {/* contact bar conatainer */}

      {/* logo container */}
      <div className="w-fit cursor-pointer flex items-center gap-1 lg:p-">
        {/* menu bar  */}
        <div className="lg:hidden">
          <Menu size={30} />
        </div>

        {/* logo  */}
        <Link href={'/'}>
          <Image
            src="/assets/logo.png"
            alt="AR Hospital"
            height={70}
            width={70}
            className=" p-3   lg:p-0"
          />
        </Link>
      </div>

      {/* contact info bar for small screens */}
      <ToggleContactDetails />

      {/* contact bar conatainer */}
      <div className="hidden lg:flex gap-2 xl:gap-11 ">
        {HeaderContact.map((item) => {
          const { id, icon, label, value } = item;
          return (
            <HeaderContacts key={id} icon={icon} label={label} value={value} />
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
