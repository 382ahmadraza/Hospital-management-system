import React from "react";
import Heading from "./heading";
import Container from "./container";

const HeadingWithBg = ({ text, subText = "", addStyle = "" }) => {
  return (
    <Container
      parentStyle={`text-white  bg-[url('/assets/trustee-bg.jpg')] no-repeat bg-center object-cover mb-10 `}
    >
      <span
        className={`text-start h-36  pl-5 flex flex-col justify-center  ${addStyle}`}
      >
        <p>{subText}</p>
        <Heading CustomHeading={text} />
      </span>
    </Container>
  );
};

export default HeadingWithBg;
