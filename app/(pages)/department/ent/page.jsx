import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading CustomHeading={"ENT DEPARTMENT"} CustomHeadingStyle={"my-3 text-zinc-700"} />

      <p className="text-sm text-zinc-600">
        ENT Department Aziz Fatimah Hospital is state of the art department,
        which has no parallel in the province. We are fully equipped with modern
        surgical and diagnostic tools up-to-date with current technology. The
        latest equipment for hearing assessment is also present to assess
        hearing of patients. Head of department conducts clinical classes in
        wards on daily basis for improved and effective education of students.
        The department has been recognized for post-graduate training by CPSP,
        UHS and PMDC. Students are been trained under direct supervision of head
        of department PROF.DR. MUHAMMAD SALEEM.
      </p>

      <Heading
        CustomHeading={"OUTDOOR"}
        level={2}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />
      <p>
        In the OPD, rigid nasoendoscopes and fiber optic endoscopes are
        available, along with multimedia and LCDs, to facilitate the students in
        learning as they aid in better visualization of anatomical structures
        and increase understanding of disease.
      </p>

      <Heading CustomHeading={'RESEARCH INTEREST'} level={3} CustomHeadingStyle={'my-3 text-zinc-700'}/>
      <ul className="list-disc">
        <li>Encouragement to the students who are involved in these healthy activities.</li>
        <li>Published multiple papers at national and international conferences.</li>
        <li>Published 17 papers in national and international journals.</li>
      </ul>
    </Container>
  );
};

export default page;
