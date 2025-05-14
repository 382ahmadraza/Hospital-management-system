import React from "react";
import { social } from "@/data/index";
import LinkCustom from "./common/link-custom";

const SocialLinks = () => {
  {
    /* social media icons  */
  }
  return (
    <div className="flex items-center px-2 h-full gap-3">
      {social.map((item, index) => (
        <LinkCustom key={index} url={item.href}>
          {item.icon}
        </LinkCustom>
      ))}
    </div>
  );
};

export default SocialLinks;
