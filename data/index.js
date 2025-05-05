// All the array of objects or hard-corded data store here

export const navItems = [
      { label: "Board Of Trustees", href: "/about-us/board-of-trustees" },
      { label: "Management Team", href: "/about-us/management-team" },
];

export const navItems1 = [
 
      { label: "Neuroscience", href: "/departments/neuroscience" },
      { label: "Medicine", href: "/departments/medicine" },
      { label: "Child Health", href: "/departments/child-health" },
      { label: "Dental Surgery", href: "/departments/dental-surgery" },
      { label: "ENT", href: "/departments/ent" },
      { label: "Dermatology", href: "/departments/dermatology" },
      { label: "Urology", href: "/departments/urology" },
      { label: "Eye Surgery", href: "/departments/eye-surgery" },
      { label: "Gastroenterology", href: "/departments/gastroenterology" },
      { label: "Gynaecology", href: "/departments/gynaecology" },
      { label: "General Surgery", href: "/departments/general-surgery" },
      { label: "Orthopedic", href: "/departments/orthopedic" },
      { label: "Psychiatry", href: "/departments/psychiatry" },
      { label: "Pulmonology", href: "/departments/pulmonology" },
      { label: "Cardiology", href: "/departments/cardiology" },
      {
        label: "Dietitian and Nutritionist",
        href: "/departments/dietitian-nutritionist",
      },
 
];

export const navItems2 = [
 
      { label: "Laboratory", href: "/diagnostic/laboratory" },
      { label: "Radiology", href: "/diagnostic/radiology" },
 
];

import { LocationPin, Mobile, Time } from "@/assets/svg";

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
