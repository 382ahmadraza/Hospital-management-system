import React from "react";
import ServiceCards from "./service-cards";
import { WorkingHours, services } from "@/data/index";
import Container from "@/components/shared/common/container";

const Services = () => {
  return (
    <Container>
      <div className=" mt-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          return (
            <ServiceCards
              key={service.id}
              src={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}

        {/* time table  */}
        <div className="w-full h-full py-5 lg:py-11 px-4 flex flex-col text-center justify-evenly bg-zinc-200">
          <p className="font-bold text-2xl  ">WORKING HOURS</p>
          <p className="my-3 text-sm">24 Hours Support Call/Whatsapp</p>

          {/* time hours */}
          <div>
            {WorkingHours.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm md:text-xs 2xl:text-base py-2.5 border-b last:border-b-0 border-para"
                >
                  <span className="font-bold text-darkGray">{item.day}</span>
                  <span className="text-zinc-500 ">{item.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
