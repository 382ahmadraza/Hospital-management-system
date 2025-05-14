import React from "react";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <div className="flex justify-between px-20 py-8 text-sm bg-zinc-800 text-white">
      <p className="">
        © 2023 Copyright by (AL RAZA HOSPITAL). All rights reserved.
      </p>

      <SocialLinks />
    </div>
  );
};

export default Footer;
