import React from "react";
import Navbar from "@/components/shared/navbar/navbar";
// import HeroCarousel from "@/components/home/hero-carousel";
// import InfoCardsSection from "@/components/home/info-cards-section";
// import Services from "@/components/home/services/services";
// import Companies from "@/components/home/companies";
// import PigeonMap from "@/components/shared/common/map";
// import Footer from "@/components/shared/footer/footer";
// import Features from "@/components/home/features/features";

export default function Home() {
  return (
    <div className="font-montserrat ">
      <Navbar />
      {/* <HeroCarousel />
      <InfoCardsSection/>
      <Services/>
      <Features/>
      <Companies/>
      <PigeonMap/>
      <Footer/> */}
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
