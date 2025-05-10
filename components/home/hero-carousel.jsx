'use client';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

const HeroCarousel = () => {

  const images = [
    "/assets/slides/slide-1.jpg",
    "/assets/slides/slide-2.png",
    "/assets/slides/slide-3.jpg",
    "/assets/slides/slide-4.jpg",
    "/assets/slides/slide-5.jpg",
    "/assets/slides/slide-6.jpg",
    "/assets/slides/slide-7.jpg",
    "/assets/slides/slide-8.jpg",
  ]

 const NextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} style={{ right: 10 }} />;
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className='z-10 absolute' onClick={onClick} style={{ left: 20 }} />;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

  return (

    <Slider {...settings} className='h-[450px] w-full border'>
      {images.map((image, index) => (
          <Image src={image} width={1000} height={400} alt={`Slide ${index + 1}`} className=" " />
      ))}
    </Slider>
  );
};

export default HeroCarousel;
