import TrusteesCard from "@/components/board-of-trustee/trustees-card";
import Container from "@/components/shared/common/container";
import React from "react";
import { managementTeam } from "@/data";

const ManagementTeam = () => {
  return (
    <Container parentStyle={"py-10 bg-zinc-100"}>
      <div className="flex flex-col justify-center items-center space-y-3 py-20">
        <p className="text-4xl font-bold">
          Our <span className="text-red-500/80">Team</span>
        </p>
        <span className="font-semibold text-xl text-darkGray text-center">
          Meet our awesome and expert team members
        </span>
        <hr className="text-red-500/80 w-20 border rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
        {managementTeam.map((trustee, index) => (
          <TrusteesCard
            key={index}
            url={trustee.url}
            // label={trustee.label}
            drName={trustee.name}
            designation={trustee.designation}
            icon={false}
            socialLinks={false} 
          />
        ))}
      </div>
    </Container>
  );
};

export default ManagementTeam;
