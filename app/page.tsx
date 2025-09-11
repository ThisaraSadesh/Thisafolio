import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className=" w-screen">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Reviews/>
        <Footer />
      </div>
    </main>
  );
}
