import React from 'react'

function Footer() {
  return (

    <footer className='bg-gray-900 text-white py-10  w-full  mt-10'>

      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>

        {/* Logo Section */}
        <div>
          <h1 className='text-2xl font-bold text-blue-400'>SmartTrip</h1>

          <p className='mt-4 text-gray-400'>Explore the world with amazing travel experiences.</p>

        </div>


        {/* Quick Links */}

        <div>

          <h2 className='text-xl font-semibold mb-4'> quick Links</h2>

          <ul className='text-gray-400 space-y-2'>
            <li className='cursor-pointer hover:text-white'>Home</li>
            <li className='cursor-pointer hover:text-white'>About</li>
            <li className='cursor-pointer hover:text-white'>Services</li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h2>Services</h2>

          <ul className=" text-gray-400 space-y-2 ">
            <li>Flight Booking</li>
            <li>Hotel Booking</li>
            <li>Tour Packages</li>
            <li>Travel Guide</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            Aurangabad, Maharashtra
          </p>

          <p className="text-gray-400 mt-2">
            smarttrip@gmail.com
          </p>

          <p className="text-gray-400 mt-2">
            +91 XXXXXXXXXX
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 SmartTrip. All rights reserved.
      </div>

    </footer>


  )

};
export default Footer;