import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { DirectionAwareHover } from "./ui/DirectionHoverCard";
import { Languages } from "@/data";

const About = () => {
  const words = ["Responsive", "Seamless", "Modern"];

  return (
<section id="about">
  <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
    <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
      <h1 className=" text-2xl md:text-6xl lg:text-4xl text-white leading-snug">
       Web developer with 1 year of experience creating  
        <FlipWords words={words} /> <br />
       web apps with performance monitoring using
      </h1>

      <div className="flex flex-wrap gap-4 items-center justify-center pt-10">
        {Languages &&
          Languages.map((lng) => (
            <DirectionAwareHover key={lng.id} imageUrl={lng.img}>
              <p className="font-bold text-xl">{lng.title}</p>
            </DirectionAwareHover>
          ))}
      </div>
    </div>
  </div>
</section>

  );
};
export default About;
