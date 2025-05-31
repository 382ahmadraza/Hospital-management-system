import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-10"}>
      <p>GENERAL INFO</p>

      <Heading
        level={2}
        CustomHeading={"DENTAL SURGERY"}
        CustomHeadingStyle={"my-4"}
      />

      <p className="text-justify text-zinc-600 text-sm">
        Dental & Maxillofacial Surgery services are readily accessible in both
        General and Executive OPD settings, offering a comprehensive range of
        treatments to address various oral health needs. The available services
        include:
        <ol className="space-y-2 my-2 *:first-letter:font-bold">
          <li>
            1. Scaling: Professional teeth cleaning to remove plaque and tartar,
            promoting optimal oral hygiene.
          </li>
          <li>
            2. Filling: Restoration of cavities or damaged teeth using filling
            materials to ensure structural integrity.
          </li>
          <li>
            3. Extraction: Safe removal of teeth that are beyond repair or
            causing complications.
          </li>
          <li>
            4. Root Canal Treatment: Endodontic procedures to treat infected or
            damaged tooth pulp, preserving the natural tooth.
          </li>
        </ol>
        These services are delivered by skilled professionals in the field of
        Dental & Maxillofacial Surgery, ensuring patients receive comprehensive
        and personalized care to maintain and enhance their oral health. Whether
        seeking routine dental maintenance or more specialized procedures, both
        General and Executive OPD settings cater to a diverse range of dental
        needs.
      </p>
    </Container>
  );
};

export default page;
