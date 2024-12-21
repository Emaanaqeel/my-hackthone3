import React from "react";
import Link from "next/link";
import Car from "../components/Car";
import Footer from "../components/Footer";

const CarListing = () => {
  const popularCars = [
    {
      name: "Koenigsegg",
      category: "Sport",
      price: 99,
      oldPrice: null,
      image: "/images/car1.png",
    },
    {
      name: "Nissan GT - R",
      category: "Sport",
      price: 80,
      oldPrice: 100,
      image: "/images/car2.png",
    },
    {
      name: "All New Terios",
      category: "SUV",
      price: 99,
      oldPrice: null,
      image: "/images/car7.png",
    },
    {
      name: "CR - V",
      category: "SUV",
      price: 80,
      oldPrice: 100,
      image: "/images/car8.png",
    },
    {
      name: "New MG ZS",
      category: "SUV",
      price: 80,
      oldPrice: 100,
      image: "/images/car10.png",
    },
    {
      name: "MG ZX Exclusive",
      category: "SUV",
      price: 80,
      oldPrice: 100,
      image: "/images/car9.png",
    },
  ];

  return (
    <main>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4  bg-white shadow-lg p-4 lg:p-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-6">
            {/* Type Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-400">Type</h3>
              <ul className="space-y-2">
                <li>
                  <input type="checkbox" className="mr-2" /> MPV (16)
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Sedan (20)
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Coupe (14)
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Hatchback (14)
                </li>
              </ul>
            </div>

            {/* Capacity Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-400">
                Capacity
              </h3>
              <ul className="space-y-2">
                <li>
                  <input type="radio" name="capacity" className="mr-2" /> 2
                  Person (10)
                </li>
                <li>
                  <input type="radio" name="capacity" className="mr-2" /> 4
                  Person (14)
                </li>
                <li>
                  <input type="radio" name="capacity" className="mr-2" /> 6
                  Person (12)
                </li>
                <li>
                  <input type="radio" name="capacity" className="mr-2" /> 8 or
                  More (16)
                </li>
              </ul>
            </div>

            {/* Price Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
              />
              <div className="text-sm text-gray-600 mt-2">Max: $100.00</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 lg:p-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Popular Car</h2>
            {/* Responsive grid for cars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {popularCars.map((car, index) => (
                <Car key={index} {...car} />
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="mt-6 text-center">
            <Link href="/catogory">
              <button className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Show more car
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
   
  );
};

export default CarListing;
