import React from "react";
import {BiChevronRight, BiSearch, BiMenu, BiChevronDown} from "react-icons/bi";  //destructuring

const NavSm = () => {
    return <>
    <div ClassName="text-white flex items-center justify-between">
        <div>
            <h3 ClassName="text-xl font-bold">
                It All Star here!
                </h3>
            <span 
             Classname="text-gray-400 text-xs flex items-center">
                Kolhapur <BiChevronRight />
            </span>
        </div>
        <div ClassName="w-8 h-8">
            <BiSearch ClassName="w-full h-full"/>
            </div>
    </div>
    </>
};
const NavMd = () => {
    return( 
    <div Classname="w-full flex item-center gap-3 bg-white px-3 py-2 rounded-md">
        <BiSearch />
     <input
      type="search" 
      ClassName="w-full bg-transparent boder-none focus:outline-one" 
      placeholder="search for movies, events, Plays, Sports and Activities."
      />
    </div>
    );
};
const Navlg = () => {
    return (
    <>
    <div ClassName="container mx-auto px-4 flex items-center justify-between">
        <div ClassName="flex items-center w-3/5 ">
            <div ClassName="w-12 h-12">
                <img 
                src="https://www.crafin.in/wp-content/uploads/2019/04/bookmyshow.png"
                alt="logo"
                ClassName="w-full h-full" />
            </div>
            <div Classname="w-full flex item-center gap-3 bg-white px-3 py-2 rounded-md">
        <BiSearch />
     <input
      type="search" 
      ClassName="w-full bg-transparent boder-none focus:outline-one" 
      placeholder="search for movies, events, Plays, Sports and Activities."
      />
    </div>
   </div>
   <div className="flex items-center gap-3">
   <span 
         Classname="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            Kolhapur <BiChevronDown />
            </span>
            <button ClassName="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in</button>
            <div ClassName="w-8 h-8 text-white">
            <BiMenu ClassName="w-full h-full" />
            </div>
   </div>
  </div>
  </>

  );
};
const Navbar = () => {
return (
 <>
 <nav ClassName="bg-bms-700 p-4">
    
    <div ClassName="md:hidden">
        {/* Mobile sreen */}
    <NavSm />
    </div>
    <div ClassName="hidden md:flex lg:hidden">
        {/* Medium tb Screen */}
    <NavMd />
    </div>
    <div ClassName="hidden lg:flex">
        {/*Large Screen*/}
    <Navlg />
    </div>
</nav>
</>
);
};
export default Navbar;