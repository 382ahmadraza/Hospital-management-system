import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={'py-16'}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"DERMATOLOGY"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        Department of Dermatology is headed by Dr. Muhammad Saeed Ahmad.
        Patients attending Dermatology OPD (General & Executive) are examined &
        diagnosed by 02 female & 01 male Dermatologist/Skin & Cosmetologist and
        Prof. Dr. Saeed Ahmad. Consultant Dermatologist & Venerology’s. Eczema,
        Acne, Fungal infections, Scabies, Skin Warts, Melasma, Pyoderma. Atopic
        Dermatitis, Atopic Allergic disorders I-e . Acute Urticaria are commonly
        observed skin diseases Ultraviolet Therapy (UVB) & Lasers has already
        been planned for treatment of the patients.
      </p>
    </Container>
  );
};

export default page;
