import React from "react";

const FeatureCard = ({ icon, label , value}) => {
  const fillPercentage = (value / 10) * 100;

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative h-72 w-72 sm:w-54 sm:h-54 flex items-center justify-center">
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
        {/* icon  */}
        <span className="absolute font-bold text-sm">{icon}</span>
      </div>

      {/* label  */}
      <div className="flex flex-col items-center justify-center">
        {label}
        <hr className="w-10 text-orange-500 my-2 border" />
      </div>
    </div>
  );
};

export default FeatureCard;
