import React, { useState } from "react";
import {
  LocationMarkerIcon,
  ShoppingBagIcon,
  SearchIcon,
  ChartPieIcon,
  FilterIcon,
  UserIcon,
  UserGroupIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="flex bg-white shadow-md shadow-gray-500 h-[12vh] items-center justify-between">
      <div className="flex ml-5 items-center space-x-8">
        <div className="flex cursor-pointer items-center space-x-2">
          <span>
            <LocationMarkerIcon className="w-4 h-4 text-black" />
          </span>
          <span className="uppercase text-sm text-gray-600 font-semibold">
            Dhaka,Bangladesh
          </span>
        </div>
        <div className="flex cursor-pointer items-center space-x-2">
          <span>
            <ShoppingBagIcon className="w-4 h-4 text-red-500 " />
          </span>
          <span className="uppercase text-sm text-gray-600 font-semibold">
            Pick up
          </span>
        </div>
        <div className="flex cursor-pointer items-center space-x-2">
          <span>
            <ChartPieIcon className="w-4 h-4 text-yellow-600" />
          </span>
          <span className="uppercase text-sm text-gray-600 font-semibold">
            Best Deals
          </span>
        </div>
      </div>
      <div className="mr-[4rem] flex items-center justify-between space-x-3">
        <div className="flex w-[20rem] h-[2.3rem] rounded-md border-[2px] border-gray-500 items-center">
          <input
            type="text"
            className="ml-4 h-[100%] flex-1 outline-0 "
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            onClick={() => {
              router.push(`/search/${search}`);
            }}
            className="w-[2rem] cursor-pointer text-center flex items-center flex-col justify-center rounded-r-md h-[101%]"
          >
            <SearchIcon className=" w-5 h-5 mr-3  text-red-600 " />
          </div>
        </div>

        <div className="h-[2.3rem] cursor-pointer w-10 flex flex-col items-center justify-center  rounded-md bg-red-600">
          <FilterIcon className="text-white w-5" />
        </div>
        <div className="h-[2.3rem] cursor-pointer w-10 flex flex-col items-center justify-center  rounded-md bg-red-600">
          <ShoppingBagIcon className="text-white w-5" />
        </div>
        <div className="h-[2.3rem] cursor-pointer w-10 flex flex-col items-center justify-center  rounded-md bg-red-600">
          <UserCircleIcon className="text-white w-5" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
