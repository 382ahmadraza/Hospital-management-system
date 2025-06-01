import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>
      <Heading
        CustomHeading={"Gastroenterology"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />
      <Heading
        CustomHeading={
          "Everything You Need to Know About Gastroenterology Diseases"
        }
        CustomHeadingStyle={"my-5 text-zinc-700 !text-xl"}
        level={2}
      />
      <p className="text-sm text-zinc-600">
        According to intensive study and research, about 60 to 70 million people
        are diagnosed with primary digestive diseases every year, out of which
        7.9 million cases are emergencies. Though the medical world has made
        phenomenal advances over the last few decades, diseases related to
        gastroenterology have been quite a headache for doctors all around the
        world.
        <br />
        <br />
        The primary reason for this is the ignorance of people. Most of the
        people don’t realize their problems early on, and when they do,
        everything seems to be too little too late. As morbid as it sounds, this
        is fact!
      </p>

      <Heading
        CustomHeading={"How To Be Sure When To Visit The Doctor?"}
        CustomHeadingStyle={"my-5 text-zinc-700 !text-xl"}
        level={3}
      />
      <p className="text-sm text-zinc-600">
        Any kinds of discomfort in your digestive organs, from your mouth to
        your anus, visit the doctor. If you see blood in the stool or vomit, you
        should get checked. Loss of appetite, sudden weight loss, bloating
        without consuming food and sharp and chronic pain in the stomach are
        also common symptoms of digestive diseases.
        <br />
        <br />
        All the above-mentioned procedures are safely performed by our medical
        experts, using proper supervision.
        <br />
        Thus, if you have undetected health issues, it is always advisable to
        visit the doctor for a proper checkup. A renowned gastroenterologist is
        here to help patients by diagnosing their ailments and properly treating
        them.
        <br />
        So why suffer? Don’t fall a victim to ignorance. Get treated for
        gastroenterology diseases on time and live a long and happy life.
      </p>
    </Container>
  );
};

export default page;
