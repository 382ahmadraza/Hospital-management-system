import { MedIcon } from "@/assets/svg";
import ContactForm from "@/components/contact-form/contact-form";
import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import HeadingWithBg from "@/components/shared/common/heading-with-bg";
import PigeonMap from "@/components/shared/common/map";
import { Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <HeadingWithBg text="CONTACT US" subText="INFO" addStyle="h-40" />
      <Container className="pb-16">
        <span className="text-lg">Contact us anytime</span>

        <div className="w-fit space-y-2      mb-10">
          <hr className="text-primary w-1/3 " />
          <Heading CustomHeading="SEND US YOUR COMMENTS" />
        </div>

        {/* main contrainer */}
        <div className=" flex flex-col lg:flex-row justify-between ">
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
          <div className=" *:my-4 lg:pr-20     ">
            <div className="flex items-center h-fit gap-4">
              <>
                <MedIcon className="text-primary"/>
              </>
              <div className="flex flex-col">
                <span className="font-medium ">EMERGENCY CONTACT</span>
                <span className="text-gray-600 text-sm">Call 24/7</span>
                <span className="text-gray-600 text-sm">
                  0418780910-0418780815
                </span>
              </div>
            </div>

            <div className="flex items-center h-fit gap-4">
              <>
                <Phone className="text-primary" />
              </>
              <div className="flex flex-col">
                <span className="font-medium ">WHATSAPP</span>
                <span className="text-gray-600 text-sm">+92 302 0408062</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
        <>
            <PigeonMap/>
        </>
    </div>
  );
};

export default page;
