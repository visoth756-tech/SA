
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-center gap-8 py-4 font-semibold">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#product" className="hover:text-blue-500">Product</a>
        <a href="#review" className="hover:text-blue-500">Review</a>
        <a href="#service" className="hover:text-blue-500">Service</a>
      </nav>
    </header>
  )
}

export default Header