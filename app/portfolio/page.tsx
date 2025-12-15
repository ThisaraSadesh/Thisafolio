import About from "@/components/About";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Reviews from "@/components/Reviews";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import React from "react";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip ">
      <div className=" w-screen">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <About />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
};

export default page;
