import React from 'react'
import productImage from '../../../assets/Rectangle 28.png'

import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Navbar from '../../../components/home/Navbar'
import Footer from '../../../components/home/Footer'

function ProductDetail() {
  return (
    <div className='bg-cream text-darkbrown'>
      <Navbar />
      {/* <!-- Breadcrumb --> */}
      <div className="flex items-center pt-28 max-w-6xl mx-auto px-6 mb-6 text-sm text-gray-400">
        <Link to="/" className="text-gray-400 no-underline hover:text-caramel">Home</Link>
        <IoIosArrowForward className="mx-2" />
        <Link to="/product" className="text-gray-400 no-underline hover:text-caramel">Products</Link>
        <IoIosArrowForward className="mx-2" />
        <div className="text-darkbrown">Latte</div>
      </div>

      {/* <!-- Product Detail --> */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 shadow-sm">

          {/* <!-- Image --> */}
          <div className="lg:w-1/2">
            <img src={productImage}
              className="w-full rounded-2xl object-cover" alt="Latte" />
            {/* <!-- Thumbnails --> */}
            <div className="flex gap-3 mt-4">
              <img src={productImage}
                className="w-20 h-20 rounded-xl object-cover border-2 border-coffeebrown cursor-pointer" alt="" />
              <img src={productImage}
                className="w-20 h-20 rounded-xl object-cover border-2 border-transparent cursor-pointer hover:border-coffeebrown" alt="" />
              <img src={productImage}
                className="w-20 h-20 rounded-xl object-cover border-2 border-transparent cursor-pointer hover:border-coffeebrown" alt="" />
            </div>
          </div>

          {/* <!-- Info --> */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs text-caramel font-semibold uppercase tracking-widest">Hot Coffee</span>
            <h1 className="text-4xl font-bold mt-2">Latte</h1>

            {/* <!-- Stars --> */}
            <div className="flex items-center gap-1 mt-3 text-caramel">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <span className="text-gray-400 text-sm ml-2">(128 reviews)</span>
            </div>

            <p className="text-3xl font-bold text-coffeebrown mt-4">$7.50</p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              A classic espresso-based drink with steamed milk and a light layer of foam.
              Made with our signature single-origin beans, roasted fresh every morning.
            </p>

            {/* <!-- Size --> */}
            <div className="mt-6">
              <p className="font-semibold mb-2">Size</p>
              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-full bg-coffeebrown text-white text-sm">Small</button>
                <button className="px-5 py-2 rounded-full border border-coffeebrown text-coffeebrown text-sm hover:bg-coffeebrown hover:text-white">Medium</button>
                <button className="px-5 py-2 rounded-full border border-coffeebrown text-coffeebrown text-sm hover:bg-coffeebrown hover:text-white">Large</button>
              </div>
            </div>

            {/* <!-- Quantity --> */}
            <div className="mt-6">
              <p className="font-semibold mb-2">Quantity</p>
              <div className="flex items-center gap-4">
                <button className="w-9 h-9 rounded-full border border-coffeebrown text-coffeebrown font-bold hover:bg-coffeebrown hover:text-white" id="dec">−</button>
                <span className="text-xl font-bold" id="qty">1</span>
                <button className="w-9 h-9 rounded-full border border-coffeebrown text-coffeebrown font-bold hover:bg-coffeebrown hover:text-white" id="inc">+</button>
              </div>
            </div>

            {/* <!-- Actions --> */}
            <div className="flex gap-4 mt-8">
              <a href="cart.html" className="flex-1 bg-coffeebrown text-white text-center py-3 rounded-full font-semibold hover:bg-darkest no-underline">
                Add to Cart
              </a>
              <a href="checkout.html" className="flex-1 bg-caramel text-white text-center py-3 rounded-full font-semibold hover:opacity-90 no-underline">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail