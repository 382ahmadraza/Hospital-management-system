import React from "react";
import SocialLinks from "../social-links";
import FooterTop from "./footer-top";
import Container from "../common/container";

const Footer = () => {
  return (
    <>
      <FooterTop />

      <Container parentStyle={'bg-zinc-800'}>
        <div className="flex flex-wrap sm:justify-between justify-center text-center items-center gap-4 px-7 md:px-20 py-8 text-xs md:text-sm  text-white">
          <p className="">
            © 2023 Copyright by (AL RAZA HOSPITAL). All rights reserved.
          </p>

          <SocialLinks />
        </div>
      </Container>
    </>
  );
};

export default Footer;
