import React from 'react'
import Navbar from "@/components/shared/common/navbar/navbar";
import HeroCarousel from '@/components/home/hero-carousel';

export default function Home() {
  return (
    <div className="font-montserrat">
      <Navbar/>
      <HeroCarousel/>
      awearee
    </div>
  );
}




// if want to add the home page in the pages folder

// import { redirect } from 'next/navigation'

// const page = () => {
//   return (
//       redirect("/home")
//   )
// }

// export default page







