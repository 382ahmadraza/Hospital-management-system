"use client";
import HeadingWithBg from "@/components/shared/common/heading-with-bg";
import Heading from "@/components/shared/common/heading";
import React from "react";
import Container from "@/components/shared/common/container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { lab } from "@/data/index";
import CustomArrow from "@/components/shared/common/custom-arrow";

const page = () => {
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
    <div>
      <div>
        <HeadingWithBg text={"AZIZ FATIMA HOSPITAL LAB"} />
      </div>

      <Container>
        <div className="w-fit space-y-2">
          <hr className="text-primary w-1/3 border" />
          <Heading
            CustomHeading={"LABORATORY"}
          />
        </div>

{/* main container  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">

        {/* slider   */}
          <div className="">
            <Slider {...settings} className="slider-container relative  mb-8">
              {lab.map((image, index) => (
                <Image
                  src={image}
                  width={1000}
                  height={500}
                  alt={`Slide ${index + 1}`}
                  className="  "
                />
              ))}
            </Slider>
          </div>

          {/* content  */}
          <div className="">
            <p className="text-sm text-zinc-600">
              Aziz Fatima Hospital Laboratory is hospital-attached clinical
              laboratory is an integral part of a healthcare institution,
              seamlessly integrated into the patient care . This specialized
              facility is strategically located within the hospital premises to
              provide swift and accurate diagnostic services, catering to
              inpatients, outpatients, and emergency cases.
              <br />
              <br />
              The primary mission of a Aziz Fatima Hospital clinical laboratory
              is to support the medical staff in diagnosing, monitoring, and
              treating patients effectively. It operates under stringent quality
              standards and is staffed by skilled clinical laboratory
              professionals, including medical technologists and pathologists,
              who collaborate closely with physicians to ensure timely and
              precise test results.
              <br />
              <br />
              This laboratory offers a diverse range of diagnostic tests
              encompassing hematology, microbiology, clinical chemistry,
              immunology, Molecular, Blood bank and more. In emergency
              situations, rapid results from the lab are often critical in
              guiding immediate medical interventions.
              <br />
              <br />
              The integration of advanced technology, Like Cobas Pure of Roche,
              XN-550 of system an updated automation, has revolutionized Aziz
              Fatima clinical laboratory, enabling faster turnaround times and
              enhanced diagnostic capabilities. This update automation addition
              increasingly involved in tailoring treatment plans to individual
              patients, making them indispensable in modern healthcare.
              <br />
              <br />
              Moreover, the Aziz Fatima clinical laboratory plays a pivotal role
              in enhancing patient care through seamless information sharing
              with other hospital departments. It is an essential hub for
              medical research, education, and continuous quality improvement
              initiatives.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
