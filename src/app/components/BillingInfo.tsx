import React from "react";

export default function BillingInfo() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
        <p className="text-sm text-gray-500 mb-6">Please enter your billing info</p>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Address"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="border rounded-lg p-3 w-full"
          />
        </div>
      </div>
    );
  }