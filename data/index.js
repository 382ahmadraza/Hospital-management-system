// All the array of objects or hard-corded data store here

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
  },
  {
    tile: "Message of Trustee",
    description:
      "Ahmad Raza Hospital was established in 1979 by our elders with the vision to serve the humanity",
    btn: "READ MORE",
  },
  {
    tile: "Professional staff",
    description:
      "Hospitals employ a variety of health professions to deliver competent, ethical and professional services",
    btn: "READ MORE",
  },
  {
    tile: "Consult our doctors",
    description:
      "Select the doctor you prefer and book a visit with him or her in a matter of minutes. Click the bellow:",
    btn: "CHOOSE A DOCTOR",
  },
];

import { LocationPin, Mobile, Time } from "@/assets/svg";
import { Facebook, Instagram, Linkdin } from "@/assets/svg/social";
import Button from "@/components/shared/common/button";
import DropDown from "@/components/shared/common/drop-down";
import { ArrowRight } from "lucide-react";

export const navItems = [
  { label: "Board Of Trustees", href: "/about-us/board-of-trustees" },
  { label: "Management Team", href: "/about-us/management-team" },
];

export const navItems1 = [
  {
    label: "Neuroscience",
    href: "/departments/neuroscience",
    fieldDoctors: [
      { name: "Dr.M Naeem ", url: "/about-us" },
      { name: "Dr.Azaan Aslam ", url: "/about-us" },
      { name: "Dr.Faizan Aslam ", url: "/about-us" },
      { name: "Dr.Atif Maqsood ", url: "/about-us" },
    ],
  },
  {
    label: "Medicine",
    href: "/departments/medicine",
    fieldDoctors: [
      { name: "Dr.Ghulam Abbas", url: "/about-us" },
      { name: "Dr.Masood Javed ", url: "/about-us" },
      { name: "Mubarak Ali ", url: "/about-us" },
    ],
  },
  {
    label: "Child Health",
    href: "/departments/child-health",
    fieldDoctors: [
      { name: "Dr.Hina Ayasha ", url: "/about-us" },
      { name: "Dr.Arshad Farooq ", url: "/about-us" },
      { name: "Dr.Tanveer Ahmad ", url: "/about-us" },
      { name: "Prof. Dr.Shakil Ahmad ", url: "/about-us" },
    ],
  },
  {
    label: "Dental Surgery",
    href: "/departments/dental-surgery",
    fieldDoctors: [{ name: "Dr.Qurat-ul-Ain", url: "/about-us" }],
  },
  {
    label: "ENT",
    href: "/departments/ent",
    fieldDoctors: [
      { name: "Prof. Dr.M Saleem ", url: "/about-us" },
      { name: "Dr.Liaqat Ali Chatta ", url: "/about-us" },
    ],
  },
  {
    label: "Dermatology",
    href: "/departments/dermatology",
    fieldDoctors: [{ name: "Dr.Hafiza Hina Imtiaz ", url: "/about-us" }],
  },
  {
    label: "Urology",
    href: "/departments/urology",
    fieldDoctors: [
      { name: "Dr.Furhan Jamshed ", url: "/about-us" },
      { name: "Dr.Sohail ", url: "/about-us" },
    ],
  },
  {
    label: "Eye Surgery",
    href: "/departments/eye-surgery",
    fieldDoctors: [
      { name: "Dr.Amir Shahzad ", url: "/about-us" },
      { name: "Dr.Nasir Yaseen ", url: "/about-us" },
    ],
  },
  {
    label: "Gastroenterology",
    href: "/departments/gastroenterology",
    fieldDoctors: [{ name: "Dr.Kashif Nawaz Sahi ", url: "/about-us" }],
  },
  {
    label: "Gynaecology",
    href: "/departments/gynaecology",
    fieldDoctors: [
      { name: "Prof. Dr.Nazia Musarat ", url: "/about-us" },
      { name: "Prof. Dr.Raheela Furhat ", url: "/about-us" },
    ],
  },
  {
    label: "General Surgery",
    href: "/departments/general-surgery",
    fieldDoctors: [
      { name: "Dr.Servat Saqib ", url: "/about-us" },
      { name: "Dr.Zakriya Rasheed ", url: "/about-us" },
      { name: "Dr.Sultan Mehmood Khan ", url: "/about-us" },
      { name: "Dr.Adnan Ahmad Khan ", url: "/about-us" },
    ],
  },
  {
    label: "Orthopedic",
    href: "/departments/orthopedic",
    fieldDoctors: [
      { name: "Prof. Dr.Zulfiqar Ahmaed ", url: "/about-us" },
      { name: "Dr.Abdul Aziz ", url: "/about-us" },
    ],
  },
  {
    label: "Psychiatry",
    href: "/departments/psychiatry",
    fieldDoctors: [{ name: "Dr.Shubhan ullah Ansari", url: "/about-us" }],
  },
  {
    label: "Pulmonology",
    href: "/departments/pulmonology",
    fieldDoctors: [{ name: "Dr.Awais Aslam ", url: "/about-us" }],
  },
  {
    label: "Cardiology",
    href: "/departments/cardiology",
    fieldDoctors: [{ name: "Dr.Waqar Shamim ", url: "/about-us" }],
  },
  {
    label: "Dietitian and Nutritionist",
    href: "/departments/dietitian-nutritionist",
    fieldDoctors: [{ name: "Dn. Hafsa Nazir Ahmad ", url:'contact-us' }],
  },
];

export const navItems2 = [
  { label: "Laboratory", href: "/diagnostic/laboratory" },
  { label: "Radiology", href: "/diagnostic/radiology" },
];
// export const navLinks = [
//     { id: 1, btn: <Button btnText="Home" />, href: "/" },
//     {
//       id: 2,
//       btn: <DropDown loop={navItems} navLink="About us" />,
//       href: "/about-us",
//     },
//     {
//       id: 3,
//       btn: <DropDown loop={navItems1} navLink="Department" />,
//       href: "/department",
//     },
//     { id: 4, btn: <Button btnText="ARMDC" />, href: "/armdc" },
//     {
//       id: 5,
//       btn: <DropDown loop={navItems2} navLink="Diagnostic Center" />,
//       href: "/diagnostic-center",
//     },
//     { id: 6, btn: <Button btnText="Contact Us" />, href: "/contact-us" },
//     { id: 7, btn: <Button btnText="Careers" />, href: "/careers" },
//     {
//       id: 8,
//       btn: <Button btnText="Online Lab Reports" />,
//       href: "/online-lab-reports",
//     },
//   ];

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
