"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExplorerHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed top-0 w-full z-[1000]">
      <div className="flex items-center justify-between w-full bg-blue-600">
        <p className=" text-shadow-black-200">
          ThisaraFolio - Microsoft Internet Explorer
        </p>
        <div className="flex items-center justify-center gap-1">
          <button>
            <Image src="/maximise.png" alt="icon" width={20} height={20} />
          </button>
          <button>
            <Image src="/minimise.png" alt="icon" width={20} height={20} />
          </button>
          <Link href="/" className="bg-red-500">
            <Image src="/close.png" alt="icon" width={20} height={20} />
          </Link>
        </div>
      </div>
      <div className="cursor-default flex items-center bg-gray-300 gap-3 border-b-2 border-b-gray-400 border-gray-300 w-full py-2 text-black text-xs">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Favorites</span>
        <span>Tools</span>
        <span>Help</span>
      </div>

      <div className="flex  items-center py-1 gap-3 w-full bg-gray-300">
        <button>
          <Image src="/previous.png" alt="icon" width={20} height={20} />
        </button>
        <button>
          <Image src="/next.png" alt="icon" width={20} height={20} />
        </button>

        <button>
          <Image src="/maximise.png" alt="icon" width={20} height={20} />
        </button>

        <button>
          <Image src="/multiply.png" alt="icon" width={20} height={20} />
        </button>

        <button>
          <Image src="/refresh.png" alt="icon" width={20} height={20} />
        </button>
        <button>
          <Image src="/home-button.png" alt="icon" width={20} height={20} />
        </button>

        <button>
          <Image src="/starbtn.png" alt="icon" width={20} height={20} />
        </button>

        <button>
          <Image src="/history.png" alt="icon" width={20} height={20} />
        </button>

        <button>
          <Image src="/printer.png" alt="icon" width={20} height={20} />
        </button>
      </div>

      <div className="flex items-center w-screen justify-start gap-2 bg-gray-300 px-3 py-2 border-b-2 border-b-gray-400">
        <div className="flex items-center p-1 gap-1 bg-white w-[1800px]">
          <div className="w-full flex items-center gap-1 ">
            <Image
              src="/vercel.svg"
              alt="icon"
              width={15}
              height={15}
              className="bg-black rounded-full p-1"
            />
            <span className="text-xs text-black">
              https://thisarasadesh.com
            </span>
          </div>

          <Image src="/down-arrow.png" alt="icon" width={15} height={15} />
        </div>
        <div className="flex items-center gap-1">
          <Image src="/next.png" alt="icon" width={15} height={15} />
          <span>Go</span>
        </div>
      </div>
    </div>
  );
};

export default ExplorerHeader;
