import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"CARDIOLOGY"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        The Cardiology OPD Unit now features the expertise of a qualified
        Consultant Cardiologist. A crucial diagnostic tool within the unit is
        echocardiography, administered under the careful supervision of the
        Consultant Cardiologist. This test is instrumental in identifying a
        range of cardiac complications. Additionally, the facility offers
        continuous ECG monitoring through the Holter Monitor, providing valuable
        insights for patient diagnosis.
        <br />
        <br />
        Furthermore, the unit has recently acquired and installed a
        state-of-the-art Exercise Tolerance Test (ETT) Machine to enhance
        diagnostic capabilities. In a bid to extend services, ECG services have
        been initiated in both the OPD Block and the Intensive Care Unit/High
        Dependency Unit (ICU/HDU). These developments collectively strengthen
        our commitment to providing comprehensive and advanced cardiac care to
        our patients.
      </p>
    </Container>
  );
};

export default page;
