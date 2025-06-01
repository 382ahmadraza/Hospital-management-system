import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"OPHTHALMOLOGY (EYE)"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        The treatment facilities for common eye elements are available in the
        department. The latest laser eye surgical procedures are being carried
        out as day care surgery. The facilities for optometric services are
        available in the department. The department is managed by a qualified
        ophthalmologist. Another senior consultant is being inducted shortly. As
        public welfare, free eye camps are arranged at regular intervals also.
      </p>
    </Container>
  );
};

export default page;
