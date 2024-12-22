

import React from 'react';
import sidebar from '../components/sidebar';
import CarCard from '../components/CarCard';
import Footer from '../components/Footer';
import { FiHeart, FiStar } from 'react-icons/fi';
import Link from 'next/link';

const CarListing = () => {
  const cars = [
    { name: 'Koenigsegg', category: 'Sport', price: 99, oldPrice: null, image: '/images/car1.png', fuel: 90, transmission: 'Manual', capacity: 2 },
    { name: 'Nissan GT - R', category: 'Sport', price: 80, oldPrice: 100, image: '/images/car2.png', fuel: 80, transmission: 'Manual', capacity: 2 },
    { name: 'Rolls-Royce', category: 'Sport', price: 96, oldPrice: null, image: '/images/car3.png', fuel: 70, transmission: 'Automatic', capacity: 4 },
    { name: 'All New Rush', category: 'SUV', price: 72, oldPrice: 80, image: '/images/car8.png', fuel: 70, transmission: 'Manual', capacity: 6 },
    { name: 'CR - V', category: 'SUV', price: 80, oldPrice: 100, image: '/images/car5.png', fuel: 80, transmission: 'Manual', capacity: 6 },
    { name: 'All New Terios', category: 'SUV', price: 74, oldPrice: null, image: '/images/car6.png', fuel: 90, transmission: 'Manual', capacity: 6 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row">
       

    {/* Sidebar */}
    <div className="hidden lg:flex w-64 h-screen bg-white border-r px-6 py-8 flex-col justify-between">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            {/* Category Section */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-400">Type</h3>
              <ul className="space-y-4">
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
              <input type="range" min="0" max="100" className="w-full" />
              <div className="text-sm text-gray-600 mt-2">Max: $100.00</div>
            </div>
          </div>
        </div>

    
        <main className="flex-1 p-4 lg:p-8">
          {/* Featured Section */}
         
                <div className="flex-1 p-6 lg:p-12">
                  {/* Car Details Section */}
                  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Car Info */}
                      <div>
                        
                        <img
                          src="/images/View1.png"
                          alt="Car"
                          className="rounded-lg w-full mb-4 object-cover"
                        />
                        <div className="grid grid-cols-3 gap-4">
                          <img
                            src="/images/View2.png"
                            alt="Thumbnail 1"
                            className="rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                          />
                          <img
                            src="/images/View3.png"
                            alt="Thumbnail 2"
                            className="rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                          />
                          <img
                            src="/images/View4.png"
                            alt="Thumbnail 3"
                            className="rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                          />
                        </div>
                      </div>
          
                      {/* Rental Info */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold">Nissan GT - R</h2>
                          <FiHeart className="text-gray-500 cursor-pointer" size={24} />
                        </div>
                        <div className="flex items-center mb-6">
                          <div className="flex items-center text-yellow-500">
                            {[...Array(4)].map((_, i) => (
                              <FiStar key={i} size={20} />
                            ))}
                            <FiStar className="text-gray-300" size={20} />
                          </div>
                          <span className="text-gray-600 ml-2">(440+ Reviews)</span>
                        </div>
                        <p className="text-gray-600 mb-6">
                          NISMO has become the embodiment of Nissan’s outstanding performance,
                          inspired by the most unforgiving proving ground, the "race track".
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex flex-col">
                            <span className="text-gray-500">Type Car</span>
                            <span className="font-bold">Sport</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-gray-500">Capacity</span>
                            <span className="font-bold">2 Person</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-gray-500">Steering</span>
                            <span className="font-bold">Manual</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-gray-500">Gasoline</span>
                            <span className="font-bold">70L</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-gray-500 line-through">$100.00</span>
                            <span className="text-3xl font-bold text-black ml-2">$80.00</span>
                            <span className="text-gray-500">/days</span>
                          </div>
                          <Link href="payment">
                          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                            Rent Now
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  {/* Reviews Section */}
                  <div className="mt-12">
                    <h2 className="text-xl font-bold mb-4">Reviews</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="space-y-6">
                        {[
                          {
                            name: "Alex Stanton",
                            role: "CEO at Bulakpak",
                            date: "21 July 2022",
                            review:
                              "We are very happy with the service from the MORENT App. Morent has a low price and a large variety of cars with good and comfortable facilities.",
                            rating: 5,
                          },
                          {
                            name: "Skylar Dias",
                            role: "CEO at Amazon",
                            date: "20 July 2022",
                            review:
                              "We are greatly helped by the services of the MORENT Application. Morent has low prices and a wide variety of cars.",
                            rating: 4,
                          },
                        ].map((review, index) => (
                          <div key={index} className="border-b pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="font-bold">{review.name}</h3>
                                <p className="text-gray-500">{review.role}</p>
                              </div>
                              <span className="text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex items-center mb-2">
                              {[...Array(review.rating)].map((_, i) => (
                                <FiStar key={i} className="text-yellow-500" size={16} />
                              ))}
                              {[...Array(5 - review.rating)].map((_, i) => (
                                <FiStar key={i} className="text-gray-300" size={16} />
                              ))}
                            </div>
                            <p className="text-gray-600">{review.review}</p>
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
                        Show All
                      </button>
                    </div>
                  </div>
                </div>
          

          {/* Car Sections */}
          <section>
            <h2 className="text-xl font-bold mb-4">Recent Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, index) => (
                <CarCard key={index} {...car} />
              ))}
            </div>
          </section>

          {/* /* Load More */} 
        <div className="mt-6 text-center">
        <Link href="/catogory">
          <button className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-indigo-800">
            Show more car
          </button>
          </Link>
        </div>
          
          </main>
      </div>
      <Footer/>
    </div>
   
  );
};

export default CarListing;
