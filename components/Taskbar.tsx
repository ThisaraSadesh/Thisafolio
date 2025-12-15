"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Taskbar = () => {
  const pathname = usePathname();
  const page = pathname.replace("/", "");

  return (
    <div className=" bg-blue-600 z-70 h-10 w-screen fixed  bottom-0 flex items-center ">
      <div className="flex items-center italic gap-1 cursor-pointer bg-green-600 h-full px-2 py-1 rounded-md w-[100px]">
        <Image src="/winxpicon.png" alt="icon" width={25} height={25} />
        <span className=" text-shadow-black-300">Start</span>
      </div>

      {page === "portfolio" && (
        <div className="flex items-center p-2 gap-2 b-shadow-black-300 h-full mx-4 bg-blue-500 rounded-md cursor-pointer">
          <Image
            src="/ie.png"
            alt="icon"
            width={25}
            height={25}
          />

          <span>ThisaraFolio</span>
        </div>
      )}
    </div>
  );
};

export default Taskbar;
