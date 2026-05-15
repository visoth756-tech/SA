import './Header.css';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-transparent backdrop-blur-sm">
      <nav className="flex justify-between items-center gap-4 p-4">
        <div>
          <a href="#">
            <img src="images/logo.png" alt="" className="w-35" />
          </a>
        </div>
        <div
          className="
            flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8
            border-b-2 border-primary pb-1
          "
        >
          <a href="#home" className="text-primary hover:underline whitespace-nowrap">Home</a>
          <a href="#product" className="text-primary hover:underline whitespace-nowrap">Product</a>
          <a href="#review" className="text-primary hover:underline whitespace-nowrap">Review</a>
          <a href="#service" className="text-primary hover:underline whitespace-nowrap">Service</a>
        </div>
        <div className="flex">
          <a href="#">
            <img src="images/search.png" alt="" className="w-10" />
          </a>
          <a href="#">
            <img src="images/shop.png" alt="" className="w-10" />
          </a>
          <a href="#">
            <img src="images/person.png" alt="" className="w-10" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header