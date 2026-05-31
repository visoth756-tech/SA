import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdClose, IoMdList, IoMdReorder } from "react-icons/io";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-orange-50 backdrop-blur-sm shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-3xl font-bold text-mediumbrown">
          ☕ Coffeep
        </Link>

        <button
          className="lg:hidden text-2xl text-mediumbrown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdList />}
        </button>

        <ul
          className={`
            ${isOpen ? "flex" : "hidden"}
            lg:flex flex-col lg:flex-row
            items-center gap-3 lg:gap-8
            absolute lg:static top-full left-0 right-0
            bg-white lg:bg-transparent
            shadow-lg lg:shadow-none
            rounded-b-2xl lg:rounded-none
            px-6 py-6 lg:p-0
          `}
        >
          <li>
            <HashLink
              smooth
              to="/#home"
              className="font-medium text-mediumbrown hover:text-caramel transition"
            >
              Home
            </HashLink>
          </li>

          <li>
            <Link
              to="/product"
              className="font-medium text-mediumbrown hover:text-caramel transition"
            >
              Products
            </Link>
          </li>

          <li>
            <HashLink
              smooth
              to="/#about"
              className="font-medium text-mediumbrown hover:text-caramel transition"
            >
              About
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#contact"
              className="font-medium text-mediumbrown hover:text-caramel transition"
            >
              Contact
            </HashLink>
          </li>
        </ul>
        <div className="flex items-center gap-4 mt-2 lg:mt-0 lg:ml-4">
          <Link to="/cart-item">Cart Item</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/orderpage">Order Page</Link>

          <Link to="" className="relative flex items-center justify-center w-10 h-10 rounded-full border hover:border-caramel hover:text-caramel transition duration-200">
            <FaCartArrowDown size={20} />

            <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-caramel text-white text-xs">
              2
            </span>
          </Link>

          <button className="hover:scale-105 transition">
            <img
              src="/images/customer_fill.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-caramel object-cover"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;