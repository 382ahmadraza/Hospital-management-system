import React from "react";
import Button from "./button";
import Toggle from "./toggle";
import { doctors } from "@/data";
import LinkCustom from "./link-custom";

const InfoCard = ({url, title, description, btn }) => {
  return (
    <div className="flex flex-col h-full justify-between text-white p-11">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className=" ">{description}</p>
      {btn === "CHOOSE A DOCTOR" ? (
        <Toggle doctor={doctors} text="CHOOSE A DOCTOR" className='mt-11 cursor-pointer'/>
      ) : (
        <LinkCustom url={url}>
          <Button
          btnText={btn}
          className="px-8 py-3 text-xs mt-11 border hover:bg-white font-semibold"
        />
        </LinkCustom>
      )}
    </div>
  );
};

export default InfoCard;
