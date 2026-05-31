import React from 'react'
import Navbar from '../../../components/home/Navbar'
import StepIndicator from '../../../components/home/StepIndicator'

function CartItem() {
  return (
    <div className="bg-cream text-darkbrown">
      <Navbar />
      <StepIndicator />

      {/* <!-- Page Header --> */}
      <div className="pb-6 max-w-6xl mx-auto px-6">
        <h2 className="font-bold text-4xl">Your Cart</h2>
        <p className="text-gray-400 mt-1">1 item</p>
      </div>

      {/* <!-- Cart Content --> */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* <!-- Items --> */}
          <div className="lg:w-2/3 flex flex-col gap-4">

            {/* <!-- Cart Item --> */}
            <div className="bg-white rounded-2xl p-5 flex gap-5 items-center shadow-sm">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=200&auto=format&fit=crop"
                className="w-24 h-24 rounded-2xl object-cover" alt="Latte" />
                <div className="flex-1">
                  <span className="text-xs text-caramel font-semibold uppercase tracking-wide">Hot Coffee</span>
                  <h5 className="font-bold text-lg mt-1">Latte</h5>
                  <p className="text-gray-400 text-sm">Size: Medium</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button className="text-gray-300 hover:text-red-400 text-lg"><i className="fa-solid fa-trash"></i></button>
                  {/* <!-- Qty control --> */}
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full border border-coffeebrown text-coffeebrown font-bold hover:bg-coffeebrown hover:text-white text-sm" id="dec">−</button>
                    <span className="font-bold" id="qty">1</span>
                    <button className="w-8 h-8 rounded-full border border-coffeebrown text-coffeebrown font-bold hover:bg-coffeebrown hover:text-white text-sm" id="inc">+</button>
                  </div>
                  <span className="font-bold text-coffeebrown" id="item-price">$7.50</span>
                </div>
            </div>

            {/* <!-- Continue Shopping --> */}
            <a href="products.html" className="text-coffeebrown no-underline text-sm font-semibold hover:text-caramel">
              ← Continue Shopping
            </a>
          </div>

          {/* <!-- Order Summary --> */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h5 className="font-bold text-xl mb-5">Order Summary</h5>

              <div className="flex justify-between text-sm mb-3">
                <span>Subtotal</span>
                <span id="subtotal">$7.50</span>
              </div>
              <div className="flex justify-between text-sm mb-3">
                <span>Delivery Fee</span>
                <span>$1.50</span>
              </div>
              <div className="flex justify-between text-sm mb-5 text-gray-400">
                <span>Discount</span>
                <span>−$0.00</span>
              </div>

              <hr className="border-gray-100 mb-5" />

                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span id="total" className="text-coffeebrown">$9.00</span>
                </div>

                {/* <!-- Coupon --> */}
                <div className="flex gap-2 mb-6">
                  <input type="text" placeholder="Coupon code" className="flex-1 p-3 rounded-xl border border-gray-200 outline-none text-sm" />
                    <button className="bg-coffeebrown text-white px-4 rounded-xl text-sm hover:bg-darkest">Apply</button>
                </div>

                <a href="checkout.html" className="block bg-caramel text-white text-center py-3 rounded-full font-semibold hover:opacity-90 no-underline">
                  Proceed to Checkout
                </a>
            </div>
          </div>

        </div>
      </div>

      <footer className="bg-deepbrown text-white pt-10 pb-5">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-[#ddd]">
          © 2025 Coffeep. All Rights Reserved
        </div>
      </footer>
    </div>
    )
}

export default CartItem