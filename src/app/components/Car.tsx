// components/CarCard.js
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

const Car = ({ name, category, price, oldPrice, image }:any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={name} className="w-full rounded-lg mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <div className="flex items-center justify-between my-2">
        <div>
          <span className="text-blue-500 text-lg font-bold">${price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through ml-2">${oldPrice}</span>
          )}
          <span className="text-gray-400 text-sm">/ day</span>
        </div>
        <FiHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
      </div>
      <Link href="/detailcar">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-indigo-700">
        Rent Now
      </button>
      </Link>
    </div>
  );
};

export default Car;
{/* <div className="flex justify-between items-center h-screen">
    <div className="w-1/2 mx-12">
    <div className="flex flex-col gap-9">

    <img src="/images/Ads 1.png" alt="Ads1" />

  </div>
    </div>

    <div className="w-1/2 ">
    
    <img src="/images/Ads 2.png" alt="Ads2" />

    </div>
 
</div> */}