import React from "react";
import Image from "next/image";
import LinkCustom from "@/components/shared/common/link-custom";
import { SearchIcon } from "@/assets/svg";

const ServiceCards = ({ src, icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center mb-14 w-full ">
        <LinkCustom url="#" className="group cursor-pointer w-full">
          <Image
            src={src}
            width={320}
            height={430}
            alt="Service 1"
            className="w-full h-full zoom-in-out object-cover group-hover:opacity-40"
          />
          {/* show on hover  */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100">
            <SearchIcon className="text-primary" size={50} />
          </div>
        </LinkCustom>

        {/* icons */}
        <LinkCustom
          url="#"
          className="absolute -bottom-11 w-fit p-4 rounded-full bg-primary hover:bg-white group"
        >
          {icon}
        </LinkCustom>
      </div>

      {/* title and description */}
      <span className="text-darkGray my-1">{title}</span>
      <span className="font-bold text-2xl text-center px-5">{description}</span>
    </div>
  );
};

export default ServiceCards;
