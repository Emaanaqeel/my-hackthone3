

export default function PaymentMethod() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <p className="text-sm text-gray-500 mb-6">Please enter your payment method</p>
  
        <div className="space-y-6">
          <div>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Credit Card</span>
            </label>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="Card Number"
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Expiration Date"
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="Card Holder"
                className="border rounded-lg p-3 w-full"
              />
              <input
                type="text"
                placeholder="CVC"
                className="border rounded-lg p-3 w-full"
              />
            </div>
          </div>
  
          <div>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>PayPal</span>
            </label>
          </div>
  
          <div>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Bitcoin</span>
            </label>
          </div>
        </div>
      </div>
    );
  }