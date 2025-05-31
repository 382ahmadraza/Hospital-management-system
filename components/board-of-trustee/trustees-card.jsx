import Image from "next/image";
import React from "react";
import Heading from "../shared/common/heading";
import { Flag, SearchIcon } from "@/assets/svg";
import LinkCustom from "../shared/common/link-custom";
import { links, social } from "@/data";

const TrusteesCard = ({ url, label='', drName, designation ,icon , socialLinks}) => {
  return (
    <div className=" flex flex-col bg-white">
      {/* image div  */}
      <div className="relative group ">
        <Image
          src={url}
          height={300}
          width={270}
          alt="doctor"
          className="h-full w-full  group-hover:opacity-40 object-cover transition-opacity duration-300 ease-in-out "
          loading="lazy"
        />
        {/* flag div  */}
        {icon ===true &&(
          <div className="absolute -bottom-8 left-4 z-10 bg-white p-2 rounded-full cursor-pointer">
          <div className="p-2 border-primary border-2 rounded-full bg-primary text-white hover:text-primary hover:bg-white">
            <Flag />
          </div>
        </div>
        )}

        {/* show on hover  */}
        <div className="absolute inset-0 flex justify-center cursor-pointer items-center opacity-0 group-hover:opacity-70">
          <SearchIcon className="text-primary" size={50} />
        </div>
      </div>

      {/* name and designation div  */}
      <div className="p-4 mt-4 space-y-2 text-zinc-600">
        <p>{label}</p>
        <Heading CustomHeading={drName} CustomHeadingStyle={"!text-2xl"} />
        <p>{designation}</p>

        {/* social links  */}

        {socialLinks === true && (
        <div className="flex justify-end gap-2">
          {links.map((link) => (
            <LinkCustom
              url={"#"}
              key={link.id}
              className="hover:text-primary hover:bg-zinc-400 *:p-1.5 *:h-8 *:w-8 text-zinc-400 border border-zinc-400 rounded-full cursor-pointer"
            >
              {link.icon}
            </LinkCustom>
          ))}
        </div>
          )}
      </div>
    </div>
  );
};

export default TrusteesCard;
