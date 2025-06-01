import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"ORTHOPEDIC"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        The Department of Orthopedics, under the leadership of Prof. Dr.
        Zulfiqar Ahmed, operates within the confines of excellence at Aziz
        Fatimah Hospital, recognized as the Best Hospital in Faisalabad. A
        spectrum of orthopedic procedures, ranging from plating, nailing, total
        knee replacement, total hip replacement, and hand surgery, to trauma
        cases, are meticulously administered in accordance with the esteemed
        ATLS guidelines. Our hospital proudly offers a spectrum of services,
        including the General Ward, Semi-Private Ward, VIP rooms, ICU, and HDU.
        <br />
        <br />
        Currently, the Aziz Fatimah Hospital is the biggest private hospital in
        Faisalabad. The Orthopedic Department, under the direction of Prof. Dr.
        Zulfiqar Ahmed and Dr. Abdul Aziz, together with their committed staff,
        offers 24/7 services to cater to the various requirements of our
        patients. Anticipating continued growth, the Ortho Department is poised
        to achieve registration with the CPSP (College of Physicians and
        Surgeons of Pakistan) for FCPS Part II training in orthopedics in the
        near future.
      </p>
    </Container>
  );
};

export default page;
