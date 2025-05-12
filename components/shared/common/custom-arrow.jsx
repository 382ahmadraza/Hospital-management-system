import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const CustomArrow = ({
  nextIconStyle,
  prevIconStyle,
  onClick,
  direction,
  AdditionalStyle,
}) => {
  return (
    <button
      className={`absolute top-20 sm:top-24 md:top-28 lg:top-44 xl:top-56 2xl:top-72  z-10 p-2 text-white ${AdditionalStyle} ${
        direction === "next"
          ? "right-1 bg-white/40 hover:bg-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          : "left-1 bg-white/40 hover:bg-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      } transition-colors duration-200  cursor-pointer`}
      onClick={onClick}
      aria-label={"carousel-arrows"}
      aria-controls="carousel-items"
      tabIndex={0}
    >
      {direction === "next" ? (
        <ArrowRight className={`h-4 w-4 ${nextIconStyle}`} />
      ) : (
        <ArrowLeft className={`h-4 w-4 ${prevIconStyle}`} />
      )}
    </button>
  );
};

export default CustomArrow;
