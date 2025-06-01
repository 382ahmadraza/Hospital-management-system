import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"PHYCHIATRY"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        Dr. Subhan U. Ansari, M.B.B.S., F.C.P.S (Psychiatry), serves as the Head
        of the Department at Aziz Fatimah Hospital in Faisalabad. As a
        distinguished Consultant Psychiatrist, he specializes in addressing a
        broad range of mental health issues affecting children and adolescents.
        With a focus on delivering compassionate and effective care, Dr.
        Ansari’s expertise extends to the treatment of depression and mood
        disorders in teenagers, anxiety disorders in children, attention deficit
        hyperactivity disorder (ADHD), autism spectrum disorders, behavioral
        disorders, academic difficulties, and issues related to suicidal and
        self-harm thoughts.
        <br />
        <br />
        Dr. Subhan U. Ansari’s commitment to providing comprehensive support is
        evident in his thorough understanding of mental health disorders. His
        dedication plays a crucial role in contributing to the well-being of
        individuals grappling with various psychological challenges.
      </p>
    </Container>
  );
};

export default page;
