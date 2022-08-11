import React from "react";
import {
  HomeIcon,
  BookmarkAltIcon,
  CubeIcon,
  CashIcon,
  ChatAltIcon,
  CogIcon,
} from "@heroicons/react/solid";
const IconBox = () => {
  return (
    <>
      <div className="flex cursor-pointer w-[100%] p-3 mb-4 group transition-all duration-200 hover:bg-red-600 items-center space-x-4">
        <span className="text-slate-200">
          <HomeIcon className="w-5 group-hover:text-white transition-all duration-200 text-gray-300 hover:text-white h-5" />
        </span>
        <span className="uppercase group-hover:text-white font-semibold text-gray-300">
          Home
        </span>
      </div>
      <div className="flex cursor-pointer p-3 mb-4 group transition-all duration-200 hover:bg-red-600 items-center space-x-4">
        <span className="text-slate-200">
          <CubeIcon className="w-5 group-hover:text-white transition-all duration-200 text-gray-300 hover:text-white h-5" />
        </span>
        <span className="uppercase font-semibold text-gray-300">Explore</span>
      </div>
      <div className="flex cursor-pointer p-3 mb-4 group transition-all duration-200 hover:bg-red-600 items-center space-x-4">
        <span className="text-slate-200">
          <BookmarkAltIcon className="w-5 group-hover:text-white transition-all duration-200 text-gray-300 hover:text-white h-5" />
        </span>
        <span className="uppercase font-semibold text-gray-300">
          Favourities
        </span>
      </div>
      <div className="flex cursor-pointer p-3 mb-4 group transition-all duration-200 hover:bg-red-600 items-center space-x-4">
        <span className="text-slate-200">
          <CashIcon className="w-5 group-hover:text-white transition-all duration-200 text-gray-300 hover:text-white h-5" />
        </span>
        <span className="uppercase font-semibold text-gray-300">Order</span>
      </div>
      <div className="flex cursor-pointer p-3 mb-4 group transition-all duration-200 hover:bg-red-600 items-center space-x-4">
        <span className="text-slate-200">
          <ChatAltIcon className="w-5 group-hover:text-white transition-all duration-200 text-gray-300 hover:text-white h-5" />
        </span>
        <span className="uppercase font-semibold text-gray-300">Message</span>
      </div>
      <div className="flex cursor-pointer p-3 mb-4 group transition-all duration-200 hover:bg-red-600 items-center space-x-4">
        <span className="text-slate-200">
          <CogIcon className="w-5 group-hover:text-white transition-all duration-200 text-gray-300 hover:text-white h-5" />
        </span>
        <span className="uppercase font-semibold text-gray-300">Setting</span>
      </div>
    </>
  );
};

export default IconBox;
