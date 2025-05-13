import React from "react";
import Button from "./button";
import Toggle from "./toggle";
import { doctors } from "@/data";

const InfoCard = ({ title, description, btn }) => {
  return (
    <div className="flex flex-col h-full justify-between text-white p-11">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className=" ">{description}</p>
      {btn === "CHOOSE A DOCTOR" ? (
        <Toggle doctor={doctors} text="CHOOSE A DOCTOR" className='mt-11 cursor-pointer '/>
      ) : (
        <Button
          btnText={btn}
          className="px-8 text-xs mt-11 border hover:bg-white font-semibold"
        />
      )}
    </div>
  );
};

export default InfoCard;
