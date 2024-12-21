// import Link from "next/link";
// import Image from "next/image";

// export default function CarCard({ name, price, type, capacity }:any) {
//     return (
//       <div className="bg-white rounded-lg shadow p-4">
//         <img
//           src="/images/car8.png"
//           alt={name}
//           className="w-full h-40 object-cover rounded-md"
//         />
//         <div className="mt-4">
//           <h3 className="font-semibold">{name}</h3>
//           <p className="text-sm text-gray-500">{type} • {capacity}</p>
//           <p className="text-lg font-bold mt-2">${price}/day</p>
//           <Link href="/detailcar">
            
//           <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
//             Rent Now
//           </button>
//           </Link>
//         </div>
//       </div>
//     );
//   }


// components/CarCard.js
import React from 'react';

const CarCard = ({ name, category, price, oldPrice, image, capacity, fuel, transmission }:any) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-36 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{category}</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-blue-600 text-lg font-bold">${price}.00 <span className="text-gray-400 line-through text-sm">{oldPrice ? `$${oldPrice}.00` : ''}</span></p>
        </div>
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
          Rent Now
        </button>
      </div>
      <div className="flex items-center text-gray-500 text-xs mt-2 space-x-4">
        <span>{fuel}L</span>
        <span>{transmission}</span>
        <span>{capacity} People</span>
      </div>
    </div>
  );
};

export default CarCard;
