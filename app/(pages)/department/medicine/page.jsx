import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={'py-10'}>
      <p>GENERAL INFO</p>

      <Heading
        level={1}
        CustomHeading={"MEDICINE"}
        CustomHeadingStyle={"my-4"}
      />

      <p>
        Department holds most prominent and well reputed physicians of the city
        and is one of the busiest service of Aziz Fatimah Hospital. It is a 32
        beds facility with daily outdoor service for which Aziz Fatimah Medicine
        department has the repute. Besides this, 25 Private and 63 semi private
        rooms , 9 VIP and ICU & HDU are also available for admitted patients.
        <br />
        <br />
        Department provides all the required services of Internal Medicine,
        Gastroenterology, Pulmonary Medicine , and Cardiology. Department has
        round the clock facilities of ECG, Echo Cardiology, Gastroscopy and
        Lungs function tests.
      </p>
    </Container>
  );
};

export default page;
