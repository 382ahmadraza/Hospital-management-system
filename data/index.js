// All the array of objects or hard-corded data store here

// radiology
export const radiology = [
  "/assets/radio1.jpeg",
  "/assets/radio2.jpeg",
  "/assets/radio3.jpeg",
  "/assets/radio4.jpeg",
  
];


// laboratory
export const lab = [
  "/assets/lab1.jpg",
  "/assets/lab2.jpg",
  "/assets/lab3.jpg",
  "/assets/lab4.jpg",
  
];

  

export const managementTeam = [
  { name: "Dr. Muhammad Altaf Bhatti", designation: "Chairman Board of Governors", url: "/assets/dr-2.jpg" },
  { name: "Dr. Muhammad Hanif", designation: "Dean", url: "/assets/dr-2.jpg" },
  { name: "Kaleem Anwar", designation: "Registrar", url: "/assets/dr-2.jpg" },
  { name: "Muhammad Sultan Ahmed", designation: "Director QEC", url: "/assets/dr-2.jpg" },
  { name: "Javed Iqbal", designation: "Director P&D", url: "/assets/dr-2.jpg" },
  { name: "Nadeem Anwar", designation: "Director IT", url: "/assets/dr-2.jpg" },
  { name: "Faiz Ahmad", designation: "Director Admin", url: "/assets/dr-2.jpg" },
  { name: "Masood Akram", designation: "Director Finance", url: "/assets/dr-2.jpg" },
  { name: "Ramey Anwar", designation: "Director ORIC", url: "/assets/dr-2.jpg" },
  { name: "Muhammad Akram", designation: "Director Library", url: "/assets/dr-2.jpg" },
  { name: "Asif Raza", designation: "Director HR", url: "/assets/dr-2.jpg" },
  { name: "Allah Rakhi", designation: "Director Public Relations", url: "/assets/dr-2.jpg" },
];

 

// trustees socials 
import { Google, Twitter } from "@/assets/svg/social";
export  const links = [
    { id: 1, icon: <Facebook size={24} className="text-zinc-400 hover:text-primary" /> },
    { id: 2, icon: <Twitter size={24} /> },
    { id: 3, icon: <Google size={24} /> },
  ];


// trustees member 
export const trustees = [
  {
    id: 1,
    url: "/assets/dr-1.jpeg",
    label: "Managing Trustee",
    drName: "Mian Muhammad Adrees",
    designation: "CEO Sitara Chemical Industries Ltd",
  },
  {
    id: 2,
    url: "/assets/dr-2.jpg",
    label: "Deputy Managing Trustee/Member",
    drName: "Mian Imran Ghafoor",
    designation: "CEO Sitara Peroxide Ltd",
  },
  {
    id: 3,
    url: "/assets/dr-3.jpeg",
    label: "Trustee/Member",
    drName: "Usama Khan",
    designation: "Chief of Surgery",
  },
  {
    id: 4,
    url: "/assets/dr-2.jpg",
    label: "Trustee/Member",
    drName: "Ahmed Raza",
    designation: "Head of Cardiology",
  },
  {
    id: 5,
    url: "/assets/dr-2.jpg",
    label: "Trustee/Member",
    drName: "Sara Khan",
    designation: "Director of Nursing",
  },
  {
    id: 6,
    url: "/assets/dr-1.jpeg",
    label: "Trustee/Member",
    drName: "Bilal Ahmed",
    designation: "Chief of Pediatrics",
  },{
    id: 7,
    url: "/assets/dr-2.jpg",
    label: "Trustee/Member",
    drName: "Aisha Malik",
    designation: "Director of Research",
  }
];

// aboout us text 
export const text = (
  <p className="text-justify text-sm lg:text-sm font-light text-darkGray">
    <span className="font-semibold">Al Raza HOSPITA</span> is a welfare
    project of the Sitara Group of Industries, established in 1979 and
    inaugurated by the President of the Islamic Republic of Pakistan with the
    objective of providing health facilities to the people of Faisalabad and
    adjoining areas at the lowest possible cost. The hospital is registered
    under Section 2(36) of the Income Tax Ordinance 2001 as a non-profit
    organization (Npo). ARH is a teaching hospital for Al Raza Medical &
    Dental College, approved by UHS Lahore. The hospital has more than 500 beds,
    approved by the Pakistan Medical & Dental Council for the house jobs of
    junior doctors. <br /> <br />
    Since its inception in 1979, the hospital has achieved many milestones
    regarding the treatment of ailing humanity. Besides almost full occupancy of
    beds in indoor, more than 1100 patients are being benefit daily from
    outdoor. OPD has been established in a newly constructed centrally
    air-conditioned building. It consists of general and executive OPD. The
    consultants on hospital roll as well as visiting consultants provide outdoor
    services. OPD services are available in disciplines of internal medicine,
    General Surgery, Nephrology, Neurology, Neurosurgery, Urology, Eye, ENT,
    Gynae/Obs, Dermatology, Psychiatry, Dental & Maxillofacial surgery,
    Physiotherapy, and Nutrition. on the-spot lab sample collection facility is
    also available in OPD. The patients are extended outpatient services at a
    registration fee of Rs. 50/- only for OPD and 100/- only for Emergency
    patients. The poor and needy patients are provided with free medicines.
    <br /> <br />
    Al Raza Hospital has various categories of rooms for patients to suit
    their preferences and budgets. All rooms maintain the highest standard of
    quality and hygiene. The rooms are air-conditioned and provided with the
    all-medical facilities. Dedicated medical and nursing staff have been
    deployed to look after the patients. patients may choose between
    semi-private (Saddiqu-e-Akbar, Usman-e-Ghani & Umer-e-Farooq), private, VIP,
    and V.VIP.
    <br /> <br />
    The professional team of consultants and clinical staff, in collaboration
    with administrative support, is committed to providing round-the-clock
    quality medical care to the needy people.
  </p>
);

// footer links here
export const footerLinks = [
  {
    label: "Home",
    icon: <ArrowRight className="opacity-0 group-hover:opacity-100" />,
    link: "/",
  },
  {
    label: "About",
    icon: <ArrowRight className="opacity-0 group-hover:opacity-100" />,
    link: "#",
  },
  {
    label: "Get In Touch ",
    icon: <ArrowRight className="opacity-0 group-hover:opacity-100" />,
    link: "#",
  },
  {
    label: "Terms & Conditions",
    icon: <ArrowRight className="opacity-0 group-hover:opacity-100" />,
    link: "/Properties",
  },
];

// features
import { DoctorIcon, Healing, MedicalDeviceIcon, Scalpel } from "@/assets/svg";

export const features = [
  { icon: <Healing size={60} />, label: "Healing success", value: 9 },
  { icon: <Scalpel size={60} />, label: "Operational success", value: 8 },
  { icon: <MedicalDeviceIcon size={60} />, label: "Dedication", value: 10 },
  { icon: <DoctorIcon size={60} />, label: "care expressed", value: 9 },
];

// campanies
export const campanies = [
  "/assets/companies/1.jpg",
  "/assets/companies/2.jpg",
  "/assets/companies/3.jpg",
  "/assets/companies/4.jpg",
  "/assets/companies/5.jpg",
  "/assets/companies/6.jpg",
  "/assets/companies/7.jpg",
  "/assets/companies/8.jpg",
];

// services cards
import { HeartPulseIcon, LabDiagnosisIcon, SurgeonIcon } from "@/assets/svg";

export const services = [
  {
    id: 1,
    title: "Critical Care",
    description: "Emergency Services",
    image: "/assets/organ.jpg",
    icon: (
      <HeartPulseIcon
        className="text-white group-hover:text-primary"
        size={50}
      />
    ),
  },
  {
    id: 2,
    title: "Health Professionals",
    description: "Medical & Surgical Specialities",
    image: "/assets/medical.png",
    icon: (
      <SurgeonIcon className="text-white group-hover:text-primary" size={50} />
    ),
  },
  {
    id: 3,
    title: "Standard",
    description: "Lab and Diagnostics",
    image: "/assets/lab.jpg",
    icon: (
      <LabDiagnosisIcon
        className="text-white group-hover:text-primary"
        size={50}
      />
    ),
  },
];

// time table data
export const WorkingHours = [
  {
    id: 1,
    day: "Monday",
    time: "24 Hours Open",
  },
  {
    id: 2,
    day: "Tuesday",
    time: "24 Hours Open",
  },
  {
    id: 3,
    day: "Wednesday",
    time: "24 Hours Open",
  },
  {
    id: 4,
    day: "Thursday",
    time: "24 Hours Open",
  },
  {
    id: 5,
    day: "Friday",
    time: "24 Hours Open",
  },
  {
    id: 6,
    day: "Saturday",
    time: "24 Hours Open",
  },
  {
    id: 7,
    day: "Sunday",
    time: "24 Hours Open",
  },
];

// Doctors
export const doctors = [
  { name: "Dr. M.Uzair", href: "" },
  { name: "Dr. Uzair", href: "" },
  { name: "Dr. Shehzaib Amin", href: " " },
  { name: "Dr. Shehzaib", href: "" },
  { name: "Dr. Muhammad Uzair", href: "" },
  { name: "Dr. Uzair", href: "" },
  { name: "Dr. M. Bilal", href: "" },
  { name: "Dr. Bilal", href: "" },
  { name: "Dr. Muhammad Ali", href: "" },
  { name: "Dr. Abrar Aslam", href: "" },
  { name: "Dr. Adnan Ahmad Khan", href: "" },
  { name: "Dr. Atif Maqsood", href: "" },
  { name: "Dr. Awais Aslam", href: "" },
  { name: "Dr. Faizan Aslam", href: "" },
  { name: "Dr. Azam Aslam", href: "" },
  { name: "Dr. Masood Javed", href: "" },
  { name: "Dr. Muhammad Aslam", href: "" },
  { name: "Dr. Muhammad Asif", href: "" },
  { name: "Dr. Ghulam Abbas", href: "" },
  { name: "Dr. Ghulam Mustafa", href: "" },
  { name: "Dr. Ghulam Sarwar", href: "" },
];

// slides images
export const images = [
  "/assets/slides/slide-1.jpg",
  "/assets/slides/slide-2.png",
  "/assets/slides/slide-3.jpg",
  "/assets/slides/slide-4.jpg",
  "/assets/slides/slide-5.jpg",
  "/assets/slides/slide-6.jpg",
  "/assets/slides/slide-7.jpg",
  "/assets/slides/slide-8.jpg",
];

// info cards data
export const cards = [
  {
    tile: "Board of Trustees",
    description:
      "The Board of Trustees guides Ahmad Raza Hospital to exceptional healthcare standards with strategic insight.",
    btn: "READ MORE",
    href:'/board-of-trustees'
  },
  {
    tile: "Message of Trustee",
    description:
      "Ahmad Raza Hospital was established in 1979 by our elders with the vision to serve the humanity",
    btn: "READ MORE",
    href:'/board-of-trustees'

  },
  {
    tile: "Professional staff",
    description:
      "Hospitals employ a variety of health professions to deliver competent, ethical and professional services",
    btn: "READ MORE",
    href:'/management-team'

  },
  {
    tile: "Consult our doctors",
    description:
      "Select the doctor you prefer and book a visit with him or her in a matter of minutes. Click the bellow:",
    btn: "CHOOSE A DOCTOR",
    href:'#'
  },
];

import { LocationPin, Mobile, Time } from "@/assets/svg";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Board Of Trustees", href: "/board-of-trustees" },
  { label: "Management Team", href: "/management-team" },
];

export const navItems1 = [
  {
    label: "Neuroscience",
    href: "/department/neuroscience",
    fieldDoctors: [
      { id: 1, name: "Dr.M Naeem", url: "/department/neuroscience/drm-naeem", img: "/assets/dr.jpeg", dept: "Neuroscience", details: "" },
      { id: 2, name: "Dr.Azaan Aslam", url: "/department/neuroscience/drazaan-aslam", img: "/assets/", dept: "Neuroscience", details: "" },
      { id: 3, name: "Dr.Faizan Aslam", url: "/department/neuroscience/drfaizan-aslam", img: "/assets/", dept: "Neuroscience", details: "" },
      { id: 4, name: "Dr.Atif Maqsood", url: "/department/neuroscience/dratif-maqsood", img: "/assets/", dept: "Neuroscience", details: "" },
    ],
  },
  {
    label: "Medicine",
    href: "/department/medicine",
    fieldDoctors: [
      { id: 5, name: "Dr.Ghulam Abbas", url: "/department/medicine/drghulam-abbas", img: "/assets/", dept: "", details: "" },
      { id: 6, name: "Dr.Masood Javed", url: "/department/medicine/drmasood-javed", img: "/assets/", dept: "", details: "" },
      { id: 7, name: "Mubarak Ali", url: "/department/medicine/mubarak-ali", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Child Health",
    href: "/department/child-health",
    fieldDoctors: [
      { id: 8, name: "Dr.Hina Ayasha", url: "/department/child-health/drhina-ayasha", img: "/assets/", dept: "", details: "" },
      { id: 9, name: "Dr.Arshad Farooq", url: "/department/child-health/drarshad-farooq", img: "/assets/", dept: "", details: "" },
      { id: 10, name: "Dr.Tanveer Ahmad", url: "/department/child-health/drtanveer-ahmad", img: "/assets/", dept: "", details: "" },
      { id: 11, name: "Prof. Dr.Shakil Ahmad", url: "/department/child-health/prof-drshakil-ahmad", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Dental Surgery",
    href: "/department/dental-surgery",
    fieldDoctors: [
      { id: 12, name: "Dr.Qurat-ul-Ain", url: "/department/dental-surgery/drqurat-ul-ain", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "ENT",
    href: "/department/ent",
    fieldDoctors: [
      { id: 13, name: "Prof. Dr.M Saleem", url: "/department/ent/prof-drm-saleem", img: "/assets/", dept: "", details: "" },
      { id: 14, name: "Dr.Liaqat Ali Chatta", url: "/department/ent/drliaqat-ali-chatta", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Dermatology",
    href: "/department/dermatology",
    fieldDoctors: [
      { id: 15, name: "Dr.Hafiza Hina Imtiaz", url: "/department/dermatology/drhafiza-hina-imtiaz", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Urology",
    href: "/department/urology",
    fieldDoctors: [
      { id: 16, name: "Dr.Furhan Jamshed", url: "/department/urology/drfurhan-jamshed", img: "/assets/", dept: "", details: "" },
      { id: 17, name: "Dr.Sohail", url: "/department/urology/drsohail", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Eye Surgery",
    href: "/department/eye-surgery",
    fieldDoctors: [
      { id: 18, name: "Dr.Amir Shahzad", url: "/department/eye-surgery/dramir-shahzad", img: "/assets/", dept: "", details: "" },
      { id: 19, name: "Dr.Nasir Yaseen", url: "/department/eye-surgery/drnasir-yaseen", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Gastroenterology",
    href: "/department/gastroenterology",
    fieldDoctors: [
      { id: 20, name: "Dr.Kashif Nawaz Sahi", url: "/department/gastroenterology/drkashif-nawaz-sahi", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Gynaecology",
    href: "/department/gynaecology",
    fieldDoctors: [
      { id: 21, name: "Prof. Dr.Nazia Musarat", url: "/department/gynaecology/prof-drnazia-musarat", img: "/assets/", dept: "", details: "" },
      { id: 22, name: "Prof. Dr.Raheela Furhat", url: "/department/gynaecology/prof-drraheela-furhat", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "General Surgery",
    href: "/department/general-surgery",
    fieldDoctors: [
      { id: 23, name: "Dr.Servat Saqib", url: "/department/general-surgery/drservat-saqib", img: "/assets/", dept: "", details: "" },
      { id: 24, name: "Dr.Zakriya Rasheed", url: "/department/general-surgery/drzakriya-rasheed", img: "/assets/", dept: "", details: "" },
      { id: 25, name: "Dr.Sultan Mehmood Khan", url: "/department/general-surgery/drsultan-mehmood-khan", img: "/assets/", dept: "", details: "" },
      { id: 26, name: "Dr.Adnan Ahmad Khan", url: "/department/general-surgery/dradnan-ahmad-khan", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Orthopedic",
    href: "/department/orthopedic",
    fieldDoctors: [
      { id: 27, name: "Prof. Dr.Zulfiqar Ahmaed", url: "/department/orthopedic/prof-drzulfiqar-ahmaed", img: "/assets/", dept: "", details: "" },
      { id: 28, name: "Dr.Abdul Aziz", url: "/department/orthopedic/drabdul-aziz", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Psychiatry",
    href: "/department/psychiatry",
    fieldDoctors: [
      { id: 29, name: "Dr.Shubhan ullah Ansari", url: "/department/psychiatry/drshubhan-ullah-ansari", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Pulmonology",
    href: "/department/pulmonology",
    fieldDoctors: [
      { id: 30, name: "Dr.Awais Aslam", url: "/department/pulmonology/drawais-aslam", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Cardiology",
    href: "/department/cardiology",
    fieldDoctors: [
      { id: 31, name: "Dr.Waqar Shamim", url: "/department/cardiology/drwaqar-shamim", img: "/assets/", dept: "", details: "" },
    ],
  },
  {
    label: "Dietitian and Nutritionist",
    href: "/department/dietitian-nutritionist",
    fieldDoctors: [
      { id: 32, name: "Dn. Hafsa Nazir Ahmad", url: "/department/dietitian-nutritionist/dn-hafsa-nazir-ahmad", img: "/assets/", dept: "", details: "" },
    ],
  },
];




const navItems2 = [
  { label: "Laboratory", href: "/diagnostic/laboratory" },
  { label: "Radiology", href: "/diagnostic/radiology" },
];

// navelements & dropdowns here
export const navElements = [
  { label: "Home", href: "/", items: "btn" },
  { label: "About Us", href: "/about-us", items: navItems },
  { label: "Departments", href: "/department", items: navItems1 },
  { label: "ARMDC", href: "/armdc", items: "btn" },
  { label: "Diagnostic Center", href: "/diagnostic-center", items: navItems2 },
  { label: "Contact Us", href: "/contact-us", items: "btn" },
  { label: "Careers", href: "/careers", items: "btn" },
  { label: "Online Lab Reports", href: "/online-lab-reports", items: "btn" },
];

export const social = [
  { href: "https://www.facebook.com", icon: <Facebook /> },
  { href: "https://www.instagram.com/", icon: <Instagram /> },
  { href: "https://www.linkedin.com/", icon: <Linkdin /> },
];

// header top contact details bar
export const HeaderContact = [
  {
    id: 1,
    icon: <Time className="text-primary p-2 lg:p-0" size={50} />,
    label: "Monday - Satureday",
    value: "24 Hours Open",
  },
  {
    id: 2,
    icon: <Mobile className="text-primary p-2 lg:p-0" size={50} />,
    label: "0418780910-03020408062",
    value: "info@arh.com.pk",
  },
  {
    id: 3,
    icon: <LocationPin className="text-primary p-2 lg:p-0" size={50} />,
    label: "Gulistan Colony No: 1",
    value: "Faisalabad, Pakistan.",
  },
];
