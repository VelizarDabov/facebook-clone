"use client";
import Image from "next/image";
import React from "react";
import {
  BallIcon,
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* header left  */}
      <div className="flex  items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />
        <div className="flex  ml-2 items-center rounded-full bg-gray-200 p-2 ">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden ml-2  items-center bg-transparent outline-none placeholder-gray-500 flex-shrink md:inline-flex"
          />
        </div>
      </div>
      {/* hader center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6  md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* header right */}
      <div className="flex items-center sm:space-x-2 justify-end">
      
           <p className="font-semibold whitespace-nowrap pr-3">Velizar Dabov</p>
           <ViewGridIcon className="icon"/>
            <ChatIcon className='icon' />
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>

        
      </div>
    </div>
  );
};

export default Header;
