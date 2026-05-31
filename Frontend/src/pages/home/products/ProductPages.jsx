import productImage from '../../../assets/Rectangle 28.png'

import { IoIosArrowForward } from "react-icons/io";

import Footer from "../../../components/home/Footer"
import Navbar from "../../../components/home/Navbar"
import { Link } from "react-router-dom"

function ProductPages() {
  return (
    <div className="bg-cream text-darkbrown">
      <Navbar />

      {/* <!-- Page Header --> */}
      <div className="pt-28 pb-10 text-center">
        <h3 className="text-caramel italic">Browse</h3>
        <h2 className="font-bold text-4xl mt-1">OUR PRODUCTS</h2>
      </div>

      {/* <!-- Filter Bar --> */}
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap gap-3">
        <button className="bg-coffeebrown text-white px-5 py-2 rounded-full text-sm">All</button>
        <button
          className="border border-coffeebrown text-coffeebrown px-5 py-2 rounded-full text-sm hover:bg-coffeebrown hover:text-white">Hot
          Coffee</button>
        <button
          className="border border-coffeebrown text-coffeebrown px-5 py-2 rounded-full text-sm hover:bg-coffeebrown hover:text-white">Cold
          Brew</button>
        <button
          className="border border-coffeebrown text-coffeebrown px-5 py-2 rounded-full text-sm hover:bg-coffeebrown hover:text-white">Desserts</button>
      </div>

      {/* <!-- Product Grid — 1 card for now, loop later --> */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* <!-- Product Card --> */}
          <div className="coffee-card bg-white rounded-2xl overflow-hidden p-4 flex flex-col">
            <Link to="/product/:id">
              <img src={productImage}
                className="w-full rounded-2xl object-cover h-48" alt="Latte" />
            </Link>
            <div className="mt-4 flex-1 flex flex-col">
              <span className="text-xs text-caramel font-semibold uppercase tracking-wide">Hot Coffee</span>
              <h5 className="font-bold mt-1">Latte</h5>
              <p className="text-gray-500 text-sm mt-1 flex-1">Soft creamy latte with rich coffee taste.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-coffeebrown text-lg">$7.50</span>
                <a href="/cart"
                  className="bg-coffeebrown text-white px-4 py-2 rounded-full text-sm hover:bg-darkest no-underline">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Placeholder cards (greyed out — loop will replace) --> */}
          <div className="coffee-card bg-white/50 rounded-2xl overflow-hidden p-4 flex flex-col opacity-40 pointer-events-none">
            <div className="w-full rounded-2xl bg-gray-200 h-48"></div>
            <div className="mt-4 h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="mt-2 h-3 bg-gray-200 rounded w-3/4"></div>
            <div className="mt-4 h-3 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  )
}

export default ProductPages