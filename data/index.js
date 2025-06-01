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
      { name: "Dr.M Naeem ", url: " /dr-m-naeem" },
      { name: "Dr.Azaan Aslam ", url: "/about-us" },
      { name: "Dr.Faizan Aslam ", url: "/about-us" },
      { name: "Dr.Atif Maqsood ", url: "/about-us" },
    ],
  },
  {
    label: "Medicine",
    href: "/department/medicine",
    fieldDoctors: [
      { name: "Dr.Ghulam Abbas", url: "/about-us" },
      { name: "Dr.Masood Javed ", url: "/about-us" },
      { name: "Mubarak Ali ", url: "/about-us" },
    ],
  },
  {
    label: "Child Health",
    href: "/department/child-health",
    fieldDoctors: [
      { name: "Dr.Hina Ayasha ", url: "/about-us" },
      { name: "Dr.Arshad Farooq ", url: "/about-us" },
      { name: "Dr.Tanveer Ahmad ", url: "/about-us" },
      { name: "Prof. Dr.Shakil Ahmad ", url: "/about-us" },
    ],
  },
  {
    label: "Dental Surgery",
    href: "/department/dental-surgery",
    fieldDoctors: [{ name: "Dr.Qurat-ul-Ain", url: "/about-us" }],
  },
  {
    label: "ENT",
    href: "/department/ent",
    fieldDoctors: [
      { name: "Prof. Dr.M Saleem ", url: "/about-us" },
      { name: "Dr.Liaqat Ali Chatta ", url: "/about-us" },
    ],
  },
  {
    label: "Dermatology",
    href: "/department/dermatology",
    fieldDoctors: [{ name: "Dr.Hafiza Hina Imtiaz ", url: "/about-us" }],
  },
  {
    label: "Urology",
    href: "/department/urology",
    fieldDoctors: [
      { name: "Dr.Furhan Jamshed ", url: "/about-us" },
      { name: "Dr.Sohail ", url: "/about-us" },
    ],
  },
  {
    label: "Eye Surgery",
    href: "/department/eye-surgery",
    fieldDoctors: [
      { name: "Dr.Amir Shahzad ", url: "/about-us" },
      { name: "Dr.Nasir Yaseen ", url: "/about-us" },
    ],
  },
  {
    label: "Gastroenterology",
    href: "/department/gastroenterology",
    fieldDoctors: [{ name: "Dr.Kashif Nawaz Sahi ", url: "/about-us" }],
  },
  {
    label: "Gynaecology",
    href: "/department/gynaecology",
    fieldDoctors: [
      { name: "Prof. Dr.Nazia Musarat ", url: "/about-us" },
      { name: "Prof. Dr.Raheela Furhat ", url: "/about-us" },
    ],
  },
  {
    label: "General Surgery",
    href: "/department/general-surgery",
    fieldDoctors: [
      { name: "Dr.Servat Saqib ", url: "/about-us" },
      { name: "Dr.Zakriya Rasheed ", url: "/about-us" },
      { name: "Dr.Sultan Mehmood Khan ", url: "/about-us" },
      { name: "Dr.Adnan Ahmad Khan ", url: "/about-us" },
    ],
  },
  {
    label: "Orthopedic",
    href: "/department/orthopedic",
    fieldDoctors: [
      { name: "Prof. Dr.Zulfiqar Ahmaed ", url: "/about-us" },
      { name: "Dr.Abdul Aziz ", url: "/about-us" },
    ],
  },
  {
    label: "Psychiatry",
    href: "/department/psychiatry",
    fieldDoctors: [{ name: "Dr.Shubhan ullah Ansari", url: "/about-us" }],
  },
  {
    label: "Pulmonology",
    href: "/department/pulmonology",
    fieldDoctors: [{ name: "Dr.Awais Aslam ", url: "/about-us" }],
  },
  {
    label: "Cardiology",
    href: "/department/cardiology",
    fieldDoctors: [{ name: "Dr.Waqar Shamim ", url: "/about-us" }],
  },
  {
    label: "Dietitian and Nutritionist",
    href: "/department/dietitian-nutritionist",
    fieldDoctors: [{ name: "Dn. Hafsa Nazir Ahmad ", url: "contact-us" }],
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
