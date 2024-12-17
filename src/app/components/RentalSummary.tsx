import Link from "next/link";


export default function RentalSummary() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
        <p className="text-sm text-gray-500 mb-6">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="/images/Look.png"
            alt="Nissan GT-R"
            className="w-24 h-16 object-cover rounded-md"
          />
          <div>
            <h3 className="font-semibold">Nissan GT-R</h3>
            <p className="text-sm text-gray-500">440+ Reviews</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$80.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$0</span>
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Apply promo code"
            className="border rounded-lg p-3 w-full"
          />

          <Link href="">
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg w-full hover:bg-indigo-700">
            Apply now
          </button>
          </Link>
        </div>
        <div className="flex justify-between mt-4 font-bold">
          <span>Total Rental Price</span>
          <span>$80.00</span>
        </div>
      </div>
    );
  }