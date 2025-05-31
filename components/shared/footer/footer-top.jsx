import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IconTextBtn from "../common/icon-text-btn";
import LinkCustom from "../common/link-custom";
import { LocationPin, Mobile } from "@/assets/svg";
import { footerLinks } from "@/data/index";
import SocialLinks from "../social-links";
import Container from "../common/container";

const FooterTop = () => {
  return (
    <footer className="relative px-2 md:px-8 lg:px-16 pt-11 flex flex-col text-white ">
      {/* Background Image */}
      <div className='absolute inset-0 bg-[url("/assets/bg1.jpg")] bg-cover bg-center'></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-black/80 "></div>

      {/* Content */}
      <Container>
        <div className="relative z-10 w-full mx-auto">
          {/* Footer upper section */}
          <div className="bg-primary p-3 md:p-8 flex flex-wrap justify-between items-center">
            <div className="md:w-2/3">
              <h2
                className="font-alice text-xl sm:text-2xl lg:text-3xl"
                aria-label="heading"
              >
                Take the First Step to Better Health
              </h2>
              <p className="text-white text-xs lg:text-sm my-3">
                Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                suscipit turpis.
              </p>
            </div>

            <IconTextBtn
              label="Get In Touch"
              ariaLebel="get in touch"
              title="Get In Touch"
              icon={<ArrowRight />}
              className="bg-white gap-3 py-2 !rounded-none text-sm !text-black sm:py-4"
            />
          </div>

          {/* Footer Middle Section */}
          <div className=" flex flex-col md:flex-row justify-between gap-4 mt-7 md:mt-11 md:gap-8 p-3">
            {/* Logo side */}
            <div className="md:w-2/5 lg:w-[35%] ">
              <LinkCustom href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  width={100}
                  height={100}
                  alt="Desi Flats"
                />
              </LinkCustom>

              <p className="text-gray text-xs lg:text-sm my-3">
                Your wellness is our mission. Let us help you take the first
                step toward better health.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <SocialLinks />
              </div>
            </div>

            {/* Links & Contact */}
            <div className="md:w-1/2 lg:w-2/5 flex flex-col md:flex-row gap-3 justify-end ">
              <div className="md:w-[35%] mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold" aria-label="heading">
                  Links
                </h3>

                {/* footer links */}
                <ul className="text-white  [&>*]:my-2 text-sm  ">
                  {footerLinks.map((item, i) => (
                    <li
                      key={i}
                      className="group w-fit cursor-pointer hover:border-b"
                    >
                      <LinkCustom
                        aria-label={item.label}
                        href={item.link}
                        className="flex items-center gap-4  py-2 hover:text-primary"
                      >
                        {item.label}
                        {item.icon}
                      </LinkCustom>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="md:w-[55%] text-sm *:my-4">
                <div className="flex items-center gap-3">
                  <LocationPin size={30} className="text-primary" />
                  Gulistan Colony No: 1,
                  <br /> Faisalabad, Pakistan.
                </div>
                <hr className="mx-2"/>
                <div className="flex items-center gap-3">
                  <Mobile size={30} className="text-primary" />
                  info@arh.com.pk
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterTop;
