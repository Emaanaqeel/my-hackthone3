// import React from 'react'
 import { IoIosHeart } from "react-icons/io";
 import { BiSolidBell } from "react-icons/bi";
 import { IoMdSettings } from "react-icons/io";
 import { FiSearch, FiFilter } from "react-icons/fi";
 import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";






export default function Navbar  ()  {
  return (
    <header className="bg-white shadow-md sm:w-full  flex items-center justify-between px-6 py-4">
      <h1 className="text-xl font-bold text-blue-600">MORENT</h1>


      <div className="flex items-center w-full max-w-md mx-auto bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2">
      {/* Search Icon */}
      <FiSearch className="text-gray-400 mr-3 hover:text-black" size={20} />
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search something here"
        className="flex-1 text-sm text-gray-600 placeholder-gray-400 outline-none"
      />
      
      {/* Filter Icon */}
    
      <FiFilter className="text-gray-400 ml-3 hover:text-black" size={20}  />
    </div>
     
      
      <div className="flex items-center space-x-4">

       
        <IoIosHeart className='text-2xl hover:text-gray-500'/>
    <BiSolidBell  className='text-2xl hover:text-gray-500'/>
    <IoMdSettings className='text-2xl hover:text-gray-500 ' />

    
      <Sheet>
  <SheetTrigger>
  <Menu />
  </SheetTrigger>
  <SheetContent>
    
  <IoIosHeart className='text-2xl hover:text-gray-500'/>
    <BiSolidBell  className='text-2xl hover:text-gray-500'/>
    <IoMdSettings className='text-2xl hover:text-gray-500 ' />
  </SheetContent>
</Sheet>

      

      
        <img
          src="/images/profile.jpg"
          alt="User"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};


