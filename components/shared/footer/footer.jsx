import React from "react";
import SocialLinks from "../social-links";
import FooterTop from "./footer-top";
import Container from "../common/container";

const Footer = () => {
  return (
    <div className="font-montserrat">
      <FooterTop />

      <Container parentStyle={'bg-black/90'}>
        <div className="flex flex-wrap sm:justify-between justify-center text-center items-center gap-4 px-7 md:px-20 py-4 text-xs md:text-sm  text-white">
          <p className="">
            © 2023 Copyright by (AL RAZA HOSPITAL). All rights reserved.
          </p>

          <SocialLinks />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
