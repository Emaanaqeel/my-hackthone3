import Link from "next/link";


export default function Confirmation() {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
        <p className="text-sm text-gray-500 mb-6">
          We are getting to the end. Just a few clicks and your rental is ready!
        </p>
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>
              I agree with sending marketing and newsletter emails. No spam, promised!
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>I agree with our terms and conditions and privacy policy.</span>
          </label>
        </div>
        <Link href="/admindashboard">
        <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-lg w-full hover:bg-indigo-700">
          Rent Now
        </button>
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          All your data are safe. We are using the most advanced security to provide you the best experience ever.
        </p>
      </div>
    );
  }