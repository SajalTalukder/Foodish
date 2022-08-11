import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

const MainPart = () => {
  return (
    <div>
      <NavBar />
      <div className="relative w-[100%] h-[20rem] mt-0">
        <Image src="/images/hero.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default MainPart;
