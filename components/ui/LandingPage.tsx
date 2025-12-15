import Image from "next/image";
import React from "react";
import Folder from "../Folder";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-[url('/winxp.jpg')] h-screen bg-cover bg-center">
      <div className="flex flex-col items-center justify-center w-[120px] gap-y-6 p-4">
        <Folder title="My Computer" image="/Mycomputer.ico" />
        <Folder title="Recycle Bin" image="/RecycleBin.ico" />
        <Folder title="Documents" image="/OpenFolder.ico" />
        {/* <Folder title=" Skills" image="/internetexplorer.ico" />
        <Folder title=" Projects" image="/internetexplorer.ico" />
        <Folder title="Testimonials" image="/internetexplorer.ico" />
        <Folder title="Contact" image="/internetexplorer.ico" /> */}
       <Link href="/portfolio"><Folder title="Portfolio" image="/ie.png" /></Link>
      </div>
    </div>
  );
};

export default LandingPage;
