import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"UROLOGY"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600 mb-4">
        Urology department is headed by a well reputed experienced visiting
        consultant and provides services in all state of art urological
        procedures such as cystoscopy, laparoscopic techniques, stone removing
        techniques and transurethral prostatic removal methods. To provide all
        these services, hospital has all the latest equipment available.
      </p>

      <Image src={'/assets/urology.jpg'} alt="urology" height={1000} width={1000} className="w-full"/>
    </Container>
  );
};

export default page;
