"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import CustomArrow from "../shared/common/custom-arrow";
import { images } from "@/data/index";

const HeroCarousel = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" prevIconStyle="h-4 w-4" />,
    nextArrow: <CustomArrow direction="next" nextIconStyle="h-4 w-4" />,
  };

  return (
    <Slider
      {...settings}
      className="slider-container relative w-[100%] h-full mb-8"
    >
      {images.map((image, index) => (
        <Image
          src={image}
          width={1000}
          height={500}
          alt={`Slide ${index + 1}`}
          className="w-full h-[150px] xs:h-full  "
        />
      ))}
    </Slider>
  );
};

export default HeroCarousel;
