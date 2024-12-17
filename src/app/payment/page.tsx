import Link from 'next/link'
import BillingInfo from '../components/BillingInfo';
import RentalInfo from '../components/RentalInfo';
import PaymentMethod from '../components/PaymentMethod';
import Confirmation from '../components/Confirmation';
import RentalSummary from '../components/RentalSummary';
import Image from 'next/image';

import Footer from '../components/Footer';


export default function Checkout() {
  return (
    <main>
    
      
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Rental Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="col-span-2 space-y-6">
            <BillingInfo />
            <RentalInfo />
            <PaymentMethod />
            <Confirmation />
          </div>

          {/* Right Section */}
          <RentalSummary />
        </div>
      </div>
    </div>

<Footer/>
 </main>
  );
}




