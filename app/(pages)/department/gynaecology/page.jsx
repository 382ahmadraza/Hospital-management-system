import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"Gynaecology"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        One of the busiest departments of the hospital providing round the clock
        services of gynecology & obsteritic. The department has three fcps
        qualified gynecologists providing medical care to the gyne / obs
        patients. Round the clock medical cover by female medical officers is
        available, for emergency patients.
        <br />
        <br />
        Department has a fully equipped labour room and operation theater with
        round the clock nursing services to the incoming patients. A senior
        consultant of the department, provides fertility service to the needy
        patients. The population welfare services is also extended to the
        population of the area with special emphasis on antenatal services.
        <br />
        <br />
        Department is planning to provide service of pain free deliveries with
        the aim to provide best possible medicare of international standards.
      </p>
    </Container>
  );
};

export default page;
