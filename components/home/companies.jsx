"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Heading from "../shared/common/heading";
import { campanies } from "@/data/index";
import Container from "../shared/common/container";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 786, // md to lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm to md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="px-4 mt-11 lg:mx-20">
        <Heading
          level={1}
          CustomHeading="Panel Companies / Valuable Clients"
          CustomHeadingStyle="text-center my-2 lg:!text-[42px]"
        />

        <div className=" ">
          <Slider
            {...settings}
            className="slider-container flex w-[96%] mx-auto h-full gap-4"
          >
            {campanies.map((image, index) => (
              <Image
                src={image}
                width={1000}
                height={500}
                alt={`Slide ${index + 1}`}
                className="w-full h-[150px] xs:h-full  "
              />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Companies;
