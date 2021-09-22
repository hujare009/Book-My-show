import React from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
  BiShareAlt,
} from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It all starts here!</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-12 h-12 ">
            <img
              src="https://i.ibb.co/zPBYW3H/IMGBIN-BOOKMYSHOW-OFFICE-ANDROID-TICKET-PNG.PNG"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            Kolhapur <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute insert-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          <NavSm />
        </div>

        <div className="hidden md:block lg:hidden">
          {/*midium Screen*/}
          <NavSm />
        </div>

        <div className="hidden lg:flex">
          {/*Large Screen*/}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
