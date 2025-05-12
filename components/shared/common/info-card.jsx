import React from "react";
import Button from "./button";

const InfoCard = ({title , description , btn}) => {
  return (
    <div
      className="flex flex-col h-full justify-between text-white p-11"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className=" ">{description}</p>
      <Button
        btnText={btn}
        className="px-4 text-xs mt-11 border hover:bg-white font-semibold"
      />
    </div>
  );
};

export default InfoCard;
