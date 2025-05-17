import React from "react";
import { cards } from "@/data";
import InfoCard from "../shared/common/info-card";
import Container from "../shared/common/container";

const InfoCardsSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-1 sm:px-4 md:px-16">
      {cards.map((card, index) => (
        <div key={index} className="odd:bg-primary even:bg-primaryLight " >
          <InfoCard
            title={card.tile}
            description={card.description}
            btn={card.btn}
          />
        </div>
      ))}
    </div>
    </Container>
  );
};

export default InfoCardsSection;
