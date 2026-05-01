import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../pages/Services'
import Carrier from '../pages/Carrier'
import Contact from '../pages/Contact'
import About from '../pages/About'

const Home = () => {
  return (
    <>
      <section  id="home" className="w-full flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] py-4 overflow-x-hidden">
        <Navbar />

        {/* MAIN WRAPPER */}
        <div className="w-full px-4 md:px-10 lg:px-20 flex flex-col items-center max-w-7xl">

          {/* TOP BADGE */}
          <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5 mt-30 rounded-full bg-white/50 border border-white">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
            </div>
            <p className="text-sm text-black/60">
              Join 12,450+ brands growing with us
            </p>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-[66px]/19 text-center max-w-2xl mt-8 text-gray-800 bg-clip-text leading-tight font-medium">
            Websites built to perform beautifully.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 text-center max-w-2xl mt-4">
            We design high-impact websites that convert and scale. From sleek
            interfaces to full stack experiences, we bring your brand to life
            online.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full sm:w-auto justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">
              <a href="#carrier">Get Started Now</a>
            </button>
            <button className="bg-white hover:bg-white/5 border border-violet-400 text-gray-600 text-xs md:text-sm px-5 py-3 rounded-lg transition cursor-pointer">
              <a href="#contact">Book a demo</a>
            </button>
          </div>

          {/* DIVIDER (FULL WIDTH) */}
          <div className="w-full h-0.5 mt-10 bg-linear-to-r from-white/10 via-violet-600 to-white/10"></div>

          {/* STATS (FULL WIDTH GRID) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 md:py-18 w-full">
            <div className="text-center">
              <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
                20+
              </h2>
              <p className="text-xs md:text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
                12k+
              </h2>
              <p className="text-xs md:text-sm text-gray-500">
                Projects Completed
              </p>
            </div>

            <div className="text-center">
              <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
                5k+
              </h2>
              <p className="text-xs md:text-sm text-gray-500">
                Happy Customers
              </p>
            </div>

            <div className="text-center">
              <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
                5+
              </h2>
              <p className="text-xs md:text-sm text-gray-500">
                Countries
              </p>
            </div>
          </div>
        </div>

        {/* OTHER SECTIONS */}
        <div className="w-full px-4 md:px-10 lg:px-20">
          <Services />
          <Carrier />
          <About />
          <Contact />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home