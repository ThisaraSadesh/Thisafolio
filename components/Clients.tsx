import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Personal
        <span className="text-purple"> Interests</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
 
      </div>
    </div>
  );
};

export default Clients;
