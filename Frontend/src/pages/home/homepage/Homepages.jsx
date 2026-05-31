import './HomePages.css'
import coffeeImg from "../../../assets/Group 19.png";
import Footer from '../../../components/home/Footer';

function HomePages() {
  return (
    <div className="bg-cream text-darkbrown">
      {/* <!-- Hero --> */}
      <section id="home" className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[42px] lg:text-[60px] font-bold leading-tight">
                Fresh Coffee,<br />Delivered To Your Door
              </h1>
              <p className="my-6 text-gray-500 text-base">Enjoy premium coffee made with love and delivered fresh every day.</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="products.html" className="bg-coffeebrown text-white px-8 py-3 rounded-full no-underline hover:bg-darkest">Order Now</a>
                <a href="#menu-section" className="border-2 border-coffeebrown text-coffeebrown px-8 py-3 rounded-full no-underline">View Menu</a>
              </div>
            </div>
            <div className="lg:w-1/2 text-center overflow-hidden">
              <img src={coffeeImg} className="hero-img" alt="coffee" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Menu --> */}
      <section id="menu-section" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-caramel italic">Our Menu</h3>
            <h2 className="font-bold text-4xl mt-1">YOUR FAVORITE BREWS AND BITES,<br />ALL IN ONE MENU</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="coffee-card bg-white rounded-2xl overflow-hidden p-4 flex flex-col">
              <img src={coffeeImg} className="w-full rounded-2xl" alt="Latte" />
              <h5 className="mt-4 font-bold">Latte</h5>
              <p className="text-[#1a1919] text-sm font-semibold flex-1">Soft creamy latte with rich coffee taste.</p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-coffeebrown">$7.50</span>
                <a href="product-detail.html"><i className="fa-solid fa-cart-shopping cursor-pointer hover:text-caramel"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About --> */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-caramel italic">About Us</h3>
            <h2 className="font-bold text-4xl mt-1">THE HEART BEHIND EVERY<br />BREW EXPERIENCE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 text-center">
              <img src={coffeeImg} className="w-full rounded-2xl mb-4" alt="Specialty Coffee" />
              <h5 className="font-bold">Specialty Coffee</h5>
              <p className="mt-1">Fresh roasted beans everyday.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner --> */}
      <div className="bg-caramel text-gold font-bold text-center py-4 my-20 overflow-hidden">
        SWEET SIP ✦ PURE BEANS ✦ EASY FEELS ✦ SOFT LIGHT ✦ SWEET SIP
      </div>

      {/* <!-- Contact --> */}
      <section id="contact" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <span className="text-caramel font-semibold uppercase tracking-wider">
                Contact Us
              </span>

              <h2 className="text-4xl font-bold text-darkbrown mt-3 leading-tight">
                Have a Question?
                <br />
                Contact Us Now
              </h2>

              <p className="mt-6 text-gray-600">
                Our baristas are ready to answer your questions and help you find the perfect coffee experience.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-phone text-caramel"></i>
                  </div>
                  <span>+855 123 456</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-caramel"></i>
                  </div>
                  <span>coffeep@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-location-dot text-caramel"></i>
                  </div>
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-coffeebrown p-8 md:p-10 rounded-3xl shadow-xl">
              <h3 className="text-white text-2xl font-bold mb-6">
                Send Us a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-caramel"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-caramel"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-caramel"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-4 rounded-xl bg-white outline-none focus:ring-2 focus:ring-caramel"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-white outline-none resize-none mb-5 focus:ring-2 focus:ring-caramel"
              />

              <button
                className="w-full py-4 bg-caramel text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                SEND MESSAGE
              </button>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <Footer />
    </div>

  )
}

export default HomePages