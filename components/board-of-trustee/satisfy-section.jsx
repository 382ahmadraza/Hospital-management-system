import Image from "next/image";
import React from "react";
import Boxes from "./satisfy-boxes";
import Container from "../shared/common/container";

const SatisfySection = () => {
  const satisfyData = [
    {
      number: 10,
      label: "YEARS WITH YOU",
      description:
        "Phasellus laoreet tristique sagittis. Phasellus commodo dolor sed elit iaculis interdum.",
    },
    {
      number: 41,
      label: "AWARDS",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: 25,
      label: "DOCTORS",
      description:
        "Suspendisse sed lorem elit. Aenean nec faucibus lacus. Phasellus ultrices risus vitae eros suscipit pellentesque.",
    },
    {
      number: 800,
      label: "SATISFIED CLIENTS",
      description:
        "Mauris vitae varius tortor. Fusce eros diam, auctor sit amet lorem ut, efficitur iaculis magna. Vivamus bibendum.",
    },
  ];

  return (
    <div className=' bg-fixed bg-[url("/assets/trustee-bg.jpg")]'>
      <Container className={"!px-5"}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pb-10 py-10 lg:py-0">
          <div className="h-full w-[90%] lg:w-1/3 flex justify-end pt-16">
            <Image
              src={"/assets/satisfy-dr.png"}
              height={420}
              width={320}
              alt="suni-doctor"
              className="h-full w-full"
            />
          </div>

          <div className="lg:w-3/5 grid md:grid-cols-2 *:my-2 items-center">
            {satisfyData.map((item, index) => (
              <Boxes
                key={index}
                number={item.number}
                label={item.label}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SatisfySection;
