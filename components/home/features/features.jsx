import React from "react";
import FeatureCard from "./feature-card";
import { features } from "@/data";
import Container from "@/components/shared/common/container";

const Features = () => {
  return (
    <Container>
      <div className=" my-16 pt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              label={feature.label}
              value={feature.value}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Features;
