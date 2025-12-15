export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


import LandingPage from "@/components/ui/LandingPage";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip ">
      <div className=" w-screen">

      <LandingPage />

        {/* <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Reviews/>
        <Footer /> */}
      </div>
    </main>
  );
}
