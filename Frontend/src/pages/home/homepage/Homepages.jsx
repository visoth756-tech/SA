import './HomePages.css'

function HomePages() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center ps-8 pt-10
      "
    >
      <div className="flex items-center">
        <div className='flex flex-col gap-10 border'>
          <div>
            <div className="text-3xl font-serif font-medium">Fresh Coffee, </div>
            <div className="text-3xl font-serif font-medium">Delivered to Your Door</div>
            <div className="font-serif font-medium">Freshly roasted beans for rich flavor. Fast and reliable delivery. Affordable, high-quality coffee.</div>
          </div>

          <div className="font-serif">Order premium coffee online and enjoy fast, reliable delivery.</div>
        </div>
        <div className="slide-in border">
          <img src="images/Homepage_Coffee_Cup.png" alt="" className="w-150" />
        </div>
      </div>
    </section>
  )
}

export default HomePages