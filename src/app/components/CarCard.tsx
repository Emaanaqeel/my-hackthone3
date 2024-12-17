import Link from "next/link";
import Image from "next/image";

export default function CarCard({ name, price, type, capacity }:any) {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <img
          src="/images/car8.png"
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="mt-4">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{type} • {capacity}</p>
          <p className="text-lg font-bold mt-2">${price}/day</p>
          <Link href="/detailcar">
            
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Rent Now
          </button>
          </Link>
        </div>
      </div>
    );
  }