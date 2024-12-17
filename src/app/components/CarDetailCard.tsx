import Image from "next/image";
 import Link from "next/link";

export default function CarDetailsCard() {
    return (
  
      
  <main>
  
  
  
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-bold">Sports car with the best design and acceleration</h2>
            <p className="text-gray-500">Safety and comfort while driving a futuristic and elegant sports car.</p>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">$80.00/day</span>
              <span className="line-through text-gray-400">$100.00</span>
            </div>
            <Link href="/payment">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700" >Rent Now</button>
            </Link>
          </div>
          <img
            src="/images/View.png"
            alt="View"
            className="w-64 rounded-lg object-cover ml-6"
          />
        </div>
      </div>
  
   </main>
    );
  }
  