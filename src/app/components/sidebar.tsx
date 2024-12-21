
// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg p-5 w-full lg:w-1/4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-6">
        {/* Type Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-400">Type</h3>
          <ul className="space-y-2">
            <li><input type="checkbox" className="mr-2" /> Sport (10)</li>
            <li><input type="checkbox" className="mr-2" /> SUV (12)</li>
            <li><input type="checkbox" className="mr-2" /> MPV (16)</li>
            <li><input type="checkbox" className="mr-2" /> Sedan (20)</li>
            <li><input type="checkbox" className="mr-2" /> Coupe (14)</li>
            <li><input type="checkbox" className="mr-2" /> Hatchback (14)</li>
          </ul>
        </div>

        {/* Capacity Section */}
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-400">Capacity</h3>
          <ul className="space-y-2">
            <li><input type="radio" name="capacity" className="mr-2" /> 2 Person (10)</li>
            <li><input type="radio" name="capacity" className="mr-2" /> 4 Person (14)</li>
            <li><input type="radio" name="capacity" className="mr-2" /> 6 Person (12)</li>
            <li><input type="radio" name="capacity" className="mr-2" /> 8 or More (16)</li>
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
  );
};

export default Sidebar;



