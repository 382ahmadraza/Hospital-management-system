import React from "react";
import Image from "next/image";
import { HeartPulseIcon, LabDiagnosisIcon, SurgeonIcon } from "@/assets/svg";

const ServiceCards = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="relative flex flex-col items-center">
        <Image
          src="/assets/organ.jpg"
          width={320}
          height={430}
          alt="Service 1"
          className="w-full h-full zoom-in-out object-cover  "
        />
        <div className="absolute -bottom-11 w-fit p-3 rounded-full bg-primary hover:bg-white group">
          <HeartPulseIcon className="text-white group-~hover:text-primary"  size={70} />
        </div>
        {/* <SurgeonIcon/> */}
        {/* <LabDiagnosisIcon/> */}
      </div>
    </div>
  );
};

export default ServiceCards;
