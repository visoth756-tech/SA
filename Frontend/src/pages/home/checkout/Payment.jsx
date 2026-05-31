import React from 'react'
import Footer from '../../../components/home/Footer'
import Navbar from '../../../components/home/Navbar'
import StepIndicator from '../../../components/home/StepIndicator'

function Payment() {
  return (
    <div className="bg-cream text-darkbrown">
      <Navbar />
      <StepIndicator />

      {/* <!-- Payment --> */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* <!-- Payment Form --> */}
          <div className="lg:w-2/3 flex flex-col gap-6">

            {/* <!-- Method Tabs --> */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h5 className="font-bold text-lg mb-5"><i className="fa-solid fa-credit-card mr-2 text-caramel"></i>Payment Method</h5>

              <div className="flex gap-3 mb-6 flex-wrap">
                <button id="tab-card" onclick="showTab('card')"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-coffeebrown text-white text-sm font-semibold">
                  <i className="fa-solid fa-credit-card"></i> Card
                </button>
                <button id="tab-aba" onclick="showTab('aba')"
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-coffeebrown text-coffeebrown text-sm font-semibold hover:bg-coffeebrown hover:text-white">
                  <i className="fa-solid fa-mobile-screen"></i> ABA Pay
                </button>
                <button id="tab-cod" onclick="showTab('cod')"
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-coffeebrown text-coffeebrown text-sm font-semibold hover:bg-coffeebrown hover:text-white">
                  <i className="fa-solid fa-money-bill"></i> Cash on Delivery
                </button>
              </div>

              {/* <!-- Card Panel --> */}
              <div id="panel-card">
                {/* <!-- Card Preview --> */}
                <div className="bg-gradient-to-br from-coffeebrown to-deepbrown rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-10 -mb-10"></div>
                  <div className="text-2xl mb-6">☕ Coffeep</div>
                  <p className="tracking-widest text-lg font-mono" id="card-number-preview">•••• •••• •••• ••••</p>
                  <div className="flex justify-between mt-4 text-sm">
                    <div>
                      <p className="text-white/60 text-xs">Card Holder</p>
                      <p id="card-name-preview" className="font-semibold">YOUR NAME</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs">Expires</p>
                      <p id="card-exp-preview" className="font-semibold">MM/YY</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-sm font-semibold mb-1 block">Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" maxlength="19"
                      oninput="fmtCard(this)"
                      className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown font-mono" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold mb-1 block">Card Holder Name</label>
                    <input type="text" placeholder="John Doe"
                      oninput="document.getElementById('card-name-preview').textContent = this.value.toUpperCase() || 'YOUR NAME'"
                      className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-1 block">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" maxlength="5"
                        oninput="document.getElementById('card-exp-preview').textContent = this.value || 'MM/YY'"
                        className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown font-mono" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-1 block">CVV</label>
                      <input type="password" placeholder="•••" maxlength="3"
                        className="w-full p-3 rounded-xl border border-gray-200 outline-none text-sm focus:border-coffeebrown font-mono" />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- ABA Pay Panel --> */}
              <div id="panel-aba" className="hidden text-center py-6">
                <div className="w-40 h-40 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center text-gray-300 text-6xl mb-4">
                  <i className="fa-solid fa-qrcode"></i>
                </div>
                <p className="font-semibold">Scan with ABA Mobile</p>
                <p className="text-gray-400 text-sm mt-1">Open your ABA app and scan this QR code to pay $9.00</p>
              </div>

              {/* <!-- COD Panel --> */}
              <div id="panel-cod" className="hidden text-center py-6">
                <div className="w-20 h-20 bg-green-50 rounded-full mx-auto flex items-center justify-center text-green-400 text-4xl mb-4">
                  <i className="fa-solid fa-money-bill-wave"></i>
                </div>
                <p className="font-semibold text-lg">Cash on Delivery</p>
                <p className="text-gray-400 text-sm mt-2">Please prepare exact change of <strong className="text-darkbrown">$9.00</strong>.<br />Our barista will collect payment at your door.</p>
              </div>

            </div>
          </div>

          {/* <!-- Summary --> */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h5 className="font-bold text-xl mb-5">Order Summary</h5>
              <div className="flex gap-3 items-center mb-5 pb-5 border-b border-gray-100">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=100&auto=format&fit=crop"
                  className="w-14 h-14 rounded-xl object-cover" alt="Latte" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">Latte</p>
                  <p className="text-gray-400 text-xs">Medium · x1</p>
                </div>
                <span className="font-bold text-sm text-coffeebrown">$7.50</span>
              </div>
              <div className="flex justify-between text-sm mb-3"><span>Subtotal</span><span>$7.50</span></div>
              <div className="flex justify-between text-sm mb-5"><span>Delivery</span><span>$1.50</span></div>
              <hr className="border-gray-100 mb-5" />
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-coffeebrown">$9.00</span>
              </div>

              <button onclick="placeOrder()"
                className="w-full bg-caramel text-white py-3 rounded-full font-semibold hover:opacity-90 border-none cursor-pointer">
                Place Order
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                <i className="fa-solid fa-lock mr-1"></i> Secure & encrypted payment
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- Success Modal --> */}
      <div id="success-modal" className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-3xl p-10 text-center max-w-sm mx-4 shadow-xl">
          <div className="w-20 h-20 bg-green-50 rounded-full mx-auto flex items-center justify-center text-green-400 text-4xl mb-5">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <h3 className="font-bold text-2xl mb-2">Order Placed!</h3>
          <p className="text-gray-400 text-sm mb-6">Your coffee is on its way. Sit tight and enjoy the moment ☕</p>
          <a href="index.html" className="block bg-coffeebrown text-white py-3 rounded-full font-semibold hover:bg-darkest no-underline">
            Back to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Payment