import { UserIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import IconBox from "./IconBox";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-[60]">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="text-center cursor-pointer"
      >
        <Image src="/images/logo.png" height={100} width={100} />
      </div>
      <div className="flex mt-4 mb-auto text-white flex-col">
        <div>
          <IconBox />
        </div>
        <div className="absolute -bottom-28 p-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center flex-col bg-white rounded-full">
              <UserIcon className="w-6 h-6 bg-white rounded-full text-black" />
            </div>
            <div>
              <h1 className="text-md font-normal text-gray-300">
                Sajal Talukder
              </h1>
              <h1 className="text-sm text-gray-400">sajaltalukder@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
