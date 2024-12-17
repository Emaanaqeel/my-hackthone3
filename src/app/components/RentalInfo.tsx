export default function RentalInfo() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
        <p className="text-sm text-gray-500 mb-6">Please select your rental date</p>
  
        <div className="space-y-6">
          {/* Pick-Up Section */}
          <div>
            <h3 className="font-semibold"><input type="radio" name="payment" className="form-radio"/>  Pick-Up</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <select className="border rounded-lg p-3 w-full">
                <option>Select your city</option>
                <option >Karachi</option>
                <option >Lahore</option>
                <option >Hydrabad</option>
              </select>
              <input type="date" className="border rounded-lg p-3 w-full" />
              <input type="time" className="border rounded-lg p-3 w-full" />
            </div>
          </div>
  
          {/* Drop-Off Section */}
          <div>
            <h3 className="font-semibold"><input type="radio" name="payment" className="form-radio" />  Drop-Off</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <select className="border rounded-lg p-3 w-full">
             <option >Select your city</option>
             <option >Karachi</option>
             <option >Lahore</option>
             <option >Hydrabad</option>
              </select>
              <input type="date" className="border rounded-lg p-3 w-full" />
              <input type="time" className="border rounded-lg p-3 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }