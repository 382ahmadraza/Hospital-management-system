import Container from "@/components/shared/common/container";
import Heading from "@/components/shared/common/heading";
import React from "react";

const page = () => {
  return (
    <Container parentStyle={"py-16"}>
      <p>GENERAL INFO</p>

      <Heading
        CustomHeading={"CARDIOLOGY"}
        CustomHeadingStyle={"my-3 text-zinc-700"}
      />

      <p className="text-sm text-zinc-600">
        Dietitians and nutritionists are healthcare professionals who specialize
        in the field of nutrition and dietary management. They play a pivotal
        role in promoting overall health and well-being by providing expert
        advice on proper nutrition, dietary choices, and lifestyle
        modifications.
        <br />
        <br />
        Dietitians and nutritionists assess individual nutritional needs based
        on factors such as age, health condition, activity level, and specific
        dietary requirements. They work closely with clients to develop
        personalized nutrition plans that align with their goals, whether it be
        weight management, addressing specific health concerns, or optimizing
        athletic performance.
        <br />
        <br />
        These professionals are knowledgeable about the nutritional content of
        various foods, dietary supplements, and the impact of different
        nutrients on the body. They stay abreast of the latest research and
        developments in nutrition science to provide evidence-based
        recommendations.
        <br />
        <br />
        In addition to advising on healthy eating habits, dietitians and
        nutritionists often educate clients about the importance of a balanced
        diet, the role of nutrients in disease prevention, and the potential
        benefits of adopting a sustainable and mindful approach to food
        consumption.
        <br />
        <br />
        Overall, dietitians and nutritionists contribute significantly to the
        promotion of health and the prevention of nutrition-related diseases,
        fostering a holistic understanding of the vital connection between diet,
        lifestyle, and well-being.
      </p>
    </Container>
  );
};

export default page;
