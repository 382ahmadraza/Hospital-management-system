"use client";
import { CalendarIcon } from "@/assets/svg";
import { WhatsAppIcon } from "@/assets/svg/social";
import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import HeadingWithBg from "@/components/shared/common/heading-with-bg";
import { navItems1 } from "@/data";
import { CalendarDays, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DoctorPage() {
  const { department, doctor } = useParams();

  // Us department ka data dhoondo
  const dept = navItems1.find((item) =>
    item.href.includes(department)
  );

  if (!dept) {
    return <div>Department not found</div>;
  }

  const doctorList = dept.fieldDoctors;

  // Doctor dhoondo URL se
  const doctorData = doctorList.find((doc) =>
    doc.url.includes(doctor)
  );

  if (!doctorData) {
    return <div>Doctor not found</div>;
  }

  const contact = [
    {id:1 , label:'(041) 8780910', icon:<Phone/>},
    {id:2 , label:'+93 3020408062', icon:<WhatsAppIcon/>},
    {id:3 , label:'info@arh.com.pk', icon:<Mail/>},
    {id:4 , label:'Book Appointment', icon:<CalendarDays/>}
  ]

  return (
    <div className="">
      <HeadingWithBg text={doctorData.name} subText={doctorData.dept} addStyle="lg:!ml-[40%]     "/>
     <Container>
      <div className="flex justify-between *:border">
       <div className="relative bottom-32 w-1/3">
        <div className="border">
          <Image src={doctorData.img} alt="doctor" height={300} width={200}/>
        </div>
        <p>Book a visit with {doctorData.name}</p>
        <Heading CustomHeading={'WORKING HOURS'} CustomHeadingStyle={'!text-2xl'}/>
        <p>Contact {doctorData.name}</p>
        <Heading CustomHeading={'CONTACT INFO'} CustomHeadingStyle={'!text-2xl'}/>
        
        {contact.map((item )=>(
          <div key={item.id} className="flex gap-2 text-gray-500">
              {item.icon}
              {item.label}
          </div>
        ))}
        <div>

        </div>
      </div>
      <div className="w-3/5">
         <p>
          Dr. Ghulam Abbas Sheikh is one of the senior consultant physicians in Faisalabad with more than 35 years of experience in the field of Internal Medicine. He is working as Professor of Medicine and Head of Medical department and Vice Principal (Clinical) at AFMDC. He is managing and supervising the admitted and OPD Patients as an Internal medicine specialist and supervises the post graduate trainee doctors as supervisor. He is actively involved in undergraduate and postgraduate clinical teaching with more than 35 research publications to his credit. He is also an Examiner and paper assessor for MBBS, FCPS. He is specialist in the management of diseases like Diabetes, Hypertension, Hepatitis B/C, Digestive, Neuropsychiatric, Chest and Joint diseases. He has special interest in gastro-hepatology and GI endoscopy.

        </p>
      <p><strong>Department:</strong> {dept.label}</p>
      <p><strong>Name:</strong> {doctorData.name}</p>
      <p><strong>URL:</strong> {doctorData.url}</p>
      </div>
     </div>
     </Container>
    </div>
  );
}
