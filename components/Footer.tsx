"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import ReviewForm from "./forms/ReviewForm";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const text = "support@thisarasadesh.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <footer className=" md:mb-5 mw-full mb-[100px] pb-10 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <div className="flex gap-5 items-center justify-center">
          <div>
            {/* button border magic from tailwind css buttons  */}
            {/* add rounded-md h-8 md:h-8, remove rounded-full */}
            {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
            {/* add handleCopy() for the copy the text */}
            <div
              className={`absolute -bottom-5 right-0 ${
                copied ? "block" : "block"
              }`}
            >
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
              {/* <img src="/confetti.gif" alt="confetti" /> */}
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
            
          </div>
          <a href="mailto:support@thisarsadesh.com">
            <MagicButton
              position="right"
              title="Let's get in touch"
              icon={<FaLocationArrow />}
            />
          </a>
           <ReviewForm />
          
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center pl-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Thisara
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link}><img src={profile.img} alt={profile.img} width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
