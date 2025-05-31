import TrusteesCard from "@/components/board-of-trustee/trustees-card";
import Container from "@/components/shared/common/container";
import React from "react";
import { trustees } from "@/data";
import SatisfySection from "@/components/board-of-trustee/satisfy-section";

const BoardOfTrustees = () => {
  return (
    <>
      <Container parentStyle={"py-10 bg-zinc-100"}>
        <div className="flex flex-col justify-center items-center space-y-3 py-16">
          <p className="text-4xl font-bold">
            Our <span className="text-red-500/80">Trustees</span>
          </p>
          <span className="font-semibold text-xl text-darkGray text-center">
            Meet our Board Of Trustees
          </span>
          <hr className="text-red-500/80 w-20 border rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
          {trustees.map((trustee) => (
            <TrusteesCard
              key={trustee.id}
              url={trustee.url}
              label={trustee.label}
              drName={trustee.drName}
              designation={trustee.designation}
              icon={true}
              socialLinks={true} // Assuming socialLinks is part of the trustee data
            />
          ))}
        </div>
      </Container>

<SatisfySection/>
    </>
  );
};

export default BoardOfTrustees;
