import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"ORTHOPEDIC"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

            <Image src={'/assets/pulmonology.jpg'} alt="urology" height={1000} width={1000} className="w-full"/>
      
       
    </Container>
  );
};

export default page;
