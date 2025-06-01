import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"Department of General Surgery"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        The Department of General Surgery at Aziz Fatimah Hospital is dedicated
        to providing comprehensive surgical services to patients through both
        the General and Executive Outpatient Departments (OPD). Our hospital
        boasts the region’s most modern and well-equipped operation theater
        (OT).
        <br />
        <br />
        Our team of highly skilled surgeons specializes in performing a wide
        range of surgical procedures, including minor and major surgeries.
        Whether it’s routine appendectomies or complex gastrointestinal
        surgeries, our surgeons are trained and experienced to handle diverse
        surgical cases with precision and care.
        <br />
        <br />
        One of the distinguishing features of our surgical department is our
        state-of-the-art Intensive Care Unit (ICU) and High Dependency Unit
        (HDU), which are seamlessly integrated to provide optimal post-operative
        care to our patients. This ensures that patients receive round-the-clock
        monitoring and specialized medical attention during their recovery
        phase.
        <br />
        <br />
        In addition to traditional open surgeries, we also offer advanced
        laparoscopic surgical procedures. Laparoscopic surgery, also known as
        minimally invasive surgery, offers several benefits to patients,
        including shorter recovery times, reduced post-operative pain, and
        smaller incisions.
        <br />
        <br />
        At Aziz Fatimah Hospital, we are committed to delivering high-quality
        surgical care with a focus on patient safety, comfort, and outcomes. Our
        multidisciplinary approach, coupled with cutting-edge technology and a
        patient-centered philosophy, makes us a trusted choice for surgical
        interventions in the community.
      </p>
    </Container>
  );
};

export default page;
