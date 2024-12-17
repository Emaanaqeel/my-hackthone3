import React from 'react'

export default function Footer() {
  return (
<main>

  
  
  <footer className="relative flex flex-col text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          
          <span className=" text-blue-600 font-bold ml-3 text-2xl">MORENT</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">
        Our vision is to provide convenience and help increase your sales business.
        </p>
      </div> 
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-1xl mb-3">
            About
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600  hover:text-blue-600">How it works</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Featured</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Partnership</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Bussiness Relation</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-1xl mb-3">
            Community
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600  hover:text-blue-600">Events</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Blog</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Podcast</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Invite a friend</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold textblack tracking-widest text-1xl mb-3">
          Socials
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600  hover:text-blue-600">Discord</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Instagram</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Facebook</a>
            </li>
            <li>
              <a className="text-gray-600  hover:text-blue-600">Twitter</a>
            </li>
          </nav>
        </div>
       
      </div>
    </div>
    <div className="bg-white">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-black text-sm text-center sm:text-left">
        ©2022 MORENT. All rights reserved
          
        </p>
        
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-5">
          
          <div className="ml-3 text-black">
          Privacy & Policy 

         
            </div> 
           <br /> <div className="ml-3 text-black">
            Terms & Condition

         
            </div>
        </div> 
        
      </div>
    </div>
  </footer>
 


</main>
  
  )}