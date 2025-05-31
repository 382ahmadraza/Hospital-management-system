import React from "react";

const Boxes = ({ number, label, description }) => {
  return (
    <div className="h-full  text-white space-y-2 p-4">
      <div className="text-center  ">
        <span className="text-5xl my-4">{number}</span>
        <p className="text-3xl font-bold mt-3">{label}</p>
      </div>
      <span className="text-sm text-justify">{description}</span>
    </div>
  );
};

export default Boxes;
