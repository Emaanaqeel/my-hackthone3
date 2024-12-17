// components/SearchSection.js
import Link from "next/link";
import { FiRepeat } from "react-icons/fi";

const SearchSection = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-2 gap-4">
      {/* Pick-Up */}
      <div>
        <h3 className="text-lg font-medium mb-2"><input type="radio" name="capacity" className="mr-2" />  Pick - Up</h3>
        <div className="grid grid-cols-3 gap-4">
          <select className="border rounded-lg p-2 text-gray-600">
            <option>Select your city</option>
            <option>karachi</option>
            <option>lahore</option>
            <option>hydrabad</option>
          </select>
          <input type="date" className="border rounded-lg p-2" />
          <input type="time" className="border rounded-lg p-2" />
        </div>
      </div>

      {/* Drop-Off */}
      <div>
        <h3 className="text-lg font-medium mb-2"><input type="radio"  name="capacity" className="mr-2" />  Drop - Off </h3>
        <div className="grid grid-cols-3 gap-4">
          <select className="border rounded-lg p-2 text-gray-600">
          <option>Select your city</option>
            <option>karachi</option>
            <option>lahore</option>
            <option>hydrabad</option>
          </select>
          <input type="date" className="border rounded-lg p-2" />
          <input type="time" className="border rounded-lg p-2" />
        </div>
      </div>

      {/* Swap Button */}
      <div className="col-span-2 flex justify-center">
        <Link href="">
        <button className="bg-blue-500 text-white rounded-full p-4 hover:bg-indigo-700">
          <FiRepeat size={24} />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchSection;
