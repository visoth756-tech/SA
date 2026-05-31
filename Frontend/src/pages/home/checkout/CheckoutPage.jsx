import React from 'react'
import Navbar from '../../../components/home/Navbar'
import Footer from '../../../components/home/Footer'
import StepIndicator from '../../../components/home/StepIndicator'

function CheckoutPage() {
  return (
    <div className='bg-cream text-darkbrown'>
      <Navbar />
      <StepIndicator />

      {/* <!-- Checkout Form + Summary --> */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* <!-- Form --> */}
          <div className="lg:w-2/3 flex flex-col gap-6">

            {/* <!-- Delivery Info --> */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h5 className="font-bold text-lg mb-5"><i className="fa-solid fa-location-dot mr-2 text-caramel"></i>Delivery Information</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold mb-1 block">First Name</label>
                  <input type="text" placeholder="John" className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold mb-1 block">Street Address</label>
                  <input type="text" placeholder="123 Coffee Street" className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">City</label>
                  <input type="text" placeholder="Phnom Penh" className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown" />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">Phone</label>
                  <input type="text" placeholder="+855 123 456" className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold mb-1 block">Delivery Notes (optional)</label>
                  <textarea rows="2" placeholder="e.g. Ring bell, leave at door…" className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm resize-none focus:border-coffeebrown"></textarea>
                </div>
              </div>
            </div>

            {/* <!-- Delivery Method --> */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h5 className="font-bold text-lg mb-5"><i className="fa-solid fa-truck mr-2 text-caramel"></i>Delivery Method</h5>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-4 border-2 border-coffeebrown rounded-xl p-4 cursor-pointer">
                  <input type="radio" name="delivery" checked className="accent-coffeebrown" />
                  <div>
                    <p className="font-semibold">Standard Delivery</p>
                    <p className="text-gray-400 text-sm">30–45 min · $1.50</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-coffeebrown">
                  <input type="radio" name="delivery" className="accent-coffeebrown" />
                  <div>
                    <p className="font-semibold">Express Delivery</p>
                    <p className="text-gray-400 text-sm">15–20 min · $3.00</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-coffeebrown">
                  <input type="radio" name="delivery" className="accent-coffeebrown" />
                  <div>
                    <p className="font-semibold">Pick Up In Store</p>
                    <p className="text-gray-400 text-sm">Ready in 10 min · Free</p>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* <!-- Order Summary --> */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h5 className="font-bold text-xl mb-5">Order Summary</h5>

              {/* <!-- Item preview --> */}
              <div className="flex gap-3 items-center mb-5 pb-5 border-b border-gray-100">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=100&auto=format&fit=crop"
                  className="w-14 h-14 rounded-xl object-cover" alt="Latte" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">Latte</p>
                  <p className="text-gray-400 text-xs">Medium · x1</p>
                </div>
                <span className="font-bold text-sm text-coffeebrown">$7.50</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span>Subtotal</span><span>$7.50</span>
              </div>
              <div className="flex justify-between text-sm mb-5">
                <span>Delivery</span><span>$1.50</span>
              </div>
              <hr className="border-gray-100 mb-5" />
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-coffeebrown">$9.00</span>
              </div>

              <a href="payment.html" className="block bg-caramel text-white text-center py-3 rounded-full font-semibold hover:opacity-90 no-underline">
                Continue to Payment
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CheckoutPage