import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import Image from "next/image";

const page = () => {
  return (
    <Container parentStyle={"py-10"}>
      <p>GENERAL INFO</p>

      <Heading
        level={2}
        CustomHeading={"MEDICINE"}
        CustomHeadingStyle={"my-4"}
      />

      <Heading
        level={1}
        CustomHeading={"Departments of Pediatrics"}
        CustomHeadingStyle={"my-4 !lg:text-6xl"}
      />

      <p className="text-justify text-zinc-600">
        Dr. Hina Ayesha leads the Department of Pediatrics. The Neonatal
        Intensive Care Unit (NICU) is purpose-built and stands as one of the
        finest in Faisalabad, delivering specialized care to extremely ill and
        premature neonates. The unit is staffed by well-trained nursing
        professionals and expert doctors. Equipped with essential facilities
        such as ventilators, cardiac monitors, phototherapy machines, overhead
        warmers, and neonatal resuscitation trolleys, the NICU ensures
        comprehensive care. Additionally, it boasts a Portable X-Ray and
        operates round the clock with 24-hour backup and excellent diagnostic
        capabilities. A dedicated Children’s Emergency Unit is also available,
        offering continuous emergency services to pediatric patients.
      </p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6 ">
    <Image src={'/assets/ch1.jpg'} alt="child-health" height={600} width={900}/>
      <Image src={'/assets/ch2.jpg'} alt="child-health" height={600} width={900}/>
</div>
      
    </Container>
  );
};

export default page;
