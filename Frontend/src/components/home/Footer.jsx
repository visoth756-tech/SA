import React from 'react'

function Footer() {
  return (
    <footer className="bg-deepbrown text-white pt-12 pb-5 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold mb-5">ABOUT US</h5>
            <p className="text-[#ddd] text-sm">Serving delicious coffee and cozy vibes everyday.</p>
            <div className="flex gap-3 mt-4">
              <i className="fa-brands fa-facebook text-xl cursor-pointer"></i>
              <i className="fa-brands fa-instagram text-xl cursor-pointer"></i>
              <i className="fa-brands fa-twitter text-xl cursor-pointer"></i>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-5">PAGE</h5>
            <p className="mb-1"><a href="#home" className="text-[#ddd] no-underline text-sm hover:text-white">Home</a></p>
            <p className="mb-1"><a href="products.html" className="text-[#ddd] no-underline text-sm hover:text-white">Products</a></p>
            <p className="mb-1"><a href="#about" className="text-[#ddd] no-underline text-sm hover:text-white">About</a></p>
          </div>
          <div>
            <h5 className="font-bold mb-5">OPENING TIME</h5>
            <p className="text-[#ddd] text-sm mb-1">Monday - Friday : 8AM - 10PM</p>
            <p className="text-[#ddd] text-sm mb-1">Saturday : 9AM - 11PM</p>
            <p className="text-[#ddd] text-sm">Sunday : 9AM - 10PM</p>
          </div>
        </div>
        <hr className="my-6 border-white/20" />
        <div className="text-center text-sm text-[#ddd]">© 2025 Coffeep. All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer