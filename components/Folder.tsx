import Image from "next/image";
import React from "react";

const Folder = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 hover:cursor-pointer">
      <Image alt="Folder" src={image} width={45} height={45} />
      <p className="text-white text-sm">{title}</p>
    </div>
  );
};

export default Folder;
