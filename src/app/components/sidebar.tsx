import React from 'react'
import { MdCheckBox } from "react-icons/md";


export default function Sidebar()  {
    return (

      <main>
     
      <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="space-y-6">
          {/* Category Section */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Type</h3>
            <ul className="space-y-2">
              <li><input type="checkbox" className="mr-2" /> MPV (16)</li>
              <li><input type="checkbox" className="mr-2" /> Sedan (20)</li>
              <li><input type="checkbox" className="mr-2" /> Coupe (14)</li>
              <li><input type="checkbox" className="mr-2" /> Hatchback (14)</li>
            </ul>
          </div>
 </div>
 </div>
</div>



</main>
    );
  };
  
