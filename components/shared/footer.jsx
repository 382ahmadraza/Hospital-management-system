import React from "react";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <div className="flex flex-wrap sm:justify-between justify-center text-center items-center gap-4 px-7 md:px-20 py-8 text-xs md:text-sm bg-zinc-800 text-white">
      <p className="">
        © 2023 Copyright by (AL RAZA HOSPITAL). All rights reserved.
      </p>

      <SocialLinks />
    </div>
  );
};

export default Footer;
