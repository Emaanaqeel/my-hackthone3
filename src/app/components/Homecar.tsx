
import CarCard from '../components/CarCard';
import React from 'react';
import SearchSection from "../components/SearchSection";
import Car from "../components/Car";
import Link from "next/link";

export default function Home() {
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
      name: "Koenigsegg",
      category: "Sport",
      price: 99,
      oldPrice: null,
      image: "/images/car3.png",
    },
    {
      name: "All New Terios",
      category: "Sport",
      price: 99,
      oldPrice: null,
      image: "/images/car7.png",
    },
    // Add more cars
  ];

  const recommendationCars = [
    {
      name: "CR-V",
      category: "SUV",
      price: 72,
      oldPrice: 80,
      image: "/images/car6.png",
    },
    {
      name: "All New Rush",
      category: "SUV",
      price: 98,
      oldPrice: 80,
      image: "/images/car6.png",
    },
    {
      name: "All New Terios",
      category: "SUV",
      price: 72,
      oldPrice: 80,
      image: "/images/car7.png",
    },
    {
      name: "CR - V",
      category: "SUV",
      price: 80,
      oldPrice: null,
      image: "/images/car8.png",
    },
    {
      name: "MG ZX Exclusice",
      category: "SUV",
      price: 72,
      oldPrice: 80,
      image: "/images/car9.png",
    },
    {
      name: "New MG ZS",
      category: "SUV",
      price: 72,
      oldPrice: 80,
      image: "/images/car10.png",
    },
    {
      name: "MG ZX Exclusice",
      category: "SUV",
      price: 72,
      oldPrice: 80,
      image: "/images/car9.png",
    },
    {
      name: "New MG ZS",
      category: "SUV",
      price: 72,
      oldPrice: 80,
      image: "/images/car10.png",
    },
    // Add more cars
  ];

  return (
    <>
      <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        {/* Section 1 - Ads with buttons */}
        <div
          id="block1"
          className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center"
        >
          <div className="relative flex flex-col items-center w-full sm:w-auto">
            <img
              src={"/images/Ads 1.png"}
              alt="Ad 1"
              className="max-w-full"
            />
            <button className="absolute bottom-20 left-1 m-3 bg-blue-600 hover:bg-blue-500 text-white font-normal py-2 px-4 rounded hidden lg:block">
              Rental Car
            </button>
          </div>

          <div className="relative flex flex-col items-center w-full sm:w-auto">
            <img
              src={"/images/Ads 2.png"}
              alt="Ad 2"
              className="max-w-full"
            />
            <button className="absolute bottom-20 left-1 m-3 bg-blue-400 hover:bg-blue-600 text-white font-normal py-2 px-4 rounded hidden lg:block">
              Rental Car
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
        {/* Search Section */}
        <SearchSection />

        {/* Popular Cars */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Popular Car</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {popularCars.map((car, index) => (
              <Car key={index} {...car} />
            ))}
          </div>
        </div>

        {/* Recommendation Cars */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Recommendation Car</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recommendationCars.map((car, index) => (
              <Car key={index} {...car} />
            ))}
          </div>
          <Link href="/catogory">
            <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg block mx-auto hover:bg-indigo-700">
              Show more car
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
