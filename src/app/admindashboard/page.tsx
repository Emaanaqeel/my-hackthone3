import { FiHome,  FiBarChart, FiInbox, FiSettings, FiLogOut, FiHelpCircle, FiMoon } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchSection from "../components/SearchSection";
import PickDrop from "../components/PickDrop";


export default function Dashboard() {
  return (
    <main>
  
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
      {/* Sidebar */}
    
      
       <aside className="md:flex hidden w-64 h-screen bg-gray-100 border-r px-6 py-8  flex-col  justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-6">Main Menu</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-blue-500">
            <FiHome className="mr-3" size={20} />
            Dashboard
          </a>
          <a href="/" className="flex items-center text-gray-600 hover:text-blue-500">
            <FaCarAlt  className="mr-3" size={20} />
            Car Rent
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
            <FiBarChart className="mr-3" size={20} />
            Insight
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
            <FiInbox className="mr-3" size={20} />
            Inbox
          </a>
        </nav>
        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-6">Preferences</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
            <FiSettings className="mr-3" size={20} />
            Settings
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
            <FiHelpCircle className="mr-3" size={20} />
            Help & Center
          </a>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FiMoon className="mr-3" size={20} />
            Dark Mode
          </button>
        </nav>
      </div>
      <button className="flex items-center text-gray-600 hover:text-red-500">
        <FiLogOut className="mr-3" size={20} />
        Log Out
      </button>
    </aside>
      
      {/* Main Content */}

      <div className="flex-1 p-4 lg:p-8">
        <div className="flex grids grid-cols-1 lg:grid-cols-3 gap-6">

          {/* left section */}
          <div className="flex  lg:col-span-2 space-y-6">
            {/* rental section */}
            <div className="bg-white  p-4 lg:p-6 rounded-lg shadow-lg">
              <h2 className="font-bold text-lg lg:text-xl mb-3 lg:mb-5">
                Details Rental
              </h2>

              {/* map image */}
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                src="/images/Map.png"
                alt="map placeholder"
                height={350}
                width={600}
                layout="responsive"
                
                />

              </div>
              {/* car detail */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 lg:mb-6">
                <Image src="/images/Look1.png" alt="car" width={132} height={70} />
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-xl lg:text-2xl">
                    Nissan GT - R
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-md ">Sports Car </p>

                </div>
              </div>

              {/* pick up */}
              <div className="mb-4 lg:mb-6">
             <PickDrop/>
              </div>

              {/* totalprice */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-t pt-4 ">
                <p className="font-bold text-sm lg:text-lg">
                  Total Rental price 
                  <br />
                  <span className="text-gray-500 text-xs lg:text-sm font-normal">
                  Overall price and includes rental discount

                  </span>
                   </p>
                   <p className="text-2xl lg:text-4xl font-bold text-black mt-2 sm:mt-0">
                  $80.00
                   </p>
              </div>
            </div>
          </div>

          {/* right section */}

          <div className="w-[50%] space-y-4">
            {/* top 5 car rental */}
            <div className="bg-white p-4 lg:p-5 rounded-lg shadow-lg">
              <h2 className="font-semibold text-lg lg:text-xl mb-4 text-center">
                Top 5 Car Rental

              </h2>

              {/* chart */}

              <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6">
                <Image
                src="/images/Chart.png"
                alt="chart"
                height={160}
                width={160}
                className="rounded-full"

                />
                <div className="absolute inset-0  flex flex-col justify-center items-center font-bold text-sm lg:text-lg">
              72,030
              <br />
              <span className="text-gray-500 text-xs lg:text-sm">
            Rental car
              </span>
                </div>
              </div>

              {/* car listing */}

              <ul className="space-y-2">
                {[
                  
                  { label: "sport car", value: "17,439", color: "#065ww3"},
                  { label: "SUV", value: "9,478", color: ""},
                  { label: "Coupe", value: "18,197", color: ""},
                  { label: "Hatchback", value: "12,510", color: ""},
                  { label: "MPV", value: "14,406", color: ""},
                ].map((item, index) =>(
                  <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md shadow-sm"
                  >
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full"
                      style={{backgroundColor: item.color}}>

                      </div>
                      <span className="font-medium text-gray-600 text-sm lg:text-md">
                        {item.label}

                      </span>                      
                    </div>
                    <span className="font-bold text-gray-800 text-sm lg:text-md">
                        {item.value}

                      </span>

                  </li>

                ))  }
              </ul>
            </div>

            {/*recent  transaction */}
            

          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
              <h2 className="font-semibold text-lg lg:text-xl mb-4 flex justify-between">
                Recent Transaction{" "}
                <span className="text-blue-500 text-xs lg:text-sm cursor-pointer">
                  View All
                </span>
              </h2>
              <ul className="space-y-3 lg:space-y-4">
                {[
                  {
                    name: "Nissan GT - R",
                    tag: "Sport Car",
                    date: "20 July",
                    price: "$80.00",
                    img: "/images/car21.png",
                  },
                  {
                    name: "Koenigsegg",
                    tag: "Sport Car",
                    date: "19 July",
                    price: "$99.00",
                    img: "/images/car22.png",
                  },
                  {
                    name: "Rolls - Royce",
                    tag: "Sport Car",
                    date: "18 July",
                    price: "$96.00",
                    img: "/images/car23.png",
                  },
                  {
                    name: "CR - V",
                    tag: "SUV",
                    date: "17 July",
                    price: "$80.00",
                    img: "/images/car24.png",
                  },
                ].map((car, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={car.img}
                        alt={car.name}
                        width={50}
                        height={30}
                        className="rounded-md"
                      />
                      <div className="text-sm lg:text-lg">
                        <h3 className="font-bold">{car.name}</h3>
                        <p className="text-gray-500 text-xs lg:text-sm">
                          {car.tag}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-xs lg:text-sm">
                      <p className="text-gray-500">{car.date}</p>
                      <span className="font-bold text-gray-800">
                        {car.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
            
    </main>
  
  );
}

