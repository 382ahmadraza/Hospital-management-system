import { Healing } from "@/assets/svg";
import React from "react";

const Features = () => {
  const fillPercentage = (9 / 10) * 100;
  return (
    <div className="border border-black w-fit">
      <div className="relative w-54 h-54 flex items-center justify-center">
        <svg className="absolute w-full h-full" viewBox="0 0 36 36">
          <circle
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="0.25"
            fill="none"
            cx="18"
            cy="18"
            r="16"
          />
          <circle
            className="text-primary"
            stroke="currentColor"
            strokeWidth="0.25"
            fill="none"
            cx="18"
            cy="18"
            r="16"
            strokeDasharray="100"
            strokeDashoffset={`${100 - fillPercentage}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute font-bold text-sm">
            <Healing/>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Healing success</p>
      <hr className="w-10 text-orange-500 my-2 border"/>
      </div>
    </div>
  );
};

export default Features;
