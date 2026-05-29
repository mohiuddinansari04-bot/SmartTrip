import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

function Nav() {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <>
    <div className="w-full bg-sky-700">
      
        <nav className="bg-sky-700 px-4 py-3 flex flex-row md:flex-row items-center justify-between gap-4" >
          {/* Logo */}
          <h1 className="flex items-center text-2xl sm:text-3xl font-bold text-white bg-sky-600 rounded shadow px-4 py-2">
            <FaRocket className="text-2xl sm:text-3xl text-white mr-2" />
            SmartTrip
          </h1>

          {/* Nav Links */}
          <ul className="lg:flex flex-col sm:flex-row hidden justify-center items-center gap-6 text-lg font-medium mr-" >
            <li className="hover:underline p-2 rounded cursor-pointer text-white">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:underline p-2 rounded cursor-pointer text-white">
              <Link to="/about">About</Link>
            </li>

            <li className="hover:underline p-2 rounded cursor-pointer text-white">
              <Link to="/contact">Contact</Link>
            </li>
             <li className="hover:underline p-2 rounded cursor-pointer text-white">
              <Link to="/cards">Cards</Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button 
            onClick={() => setshowmenu(!showmenu)}
            className="lg:hidden text-white text-3xl flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <CiMenuBurger />
          </button>
       
         
      
        </nav>

        {/* Mobile Menu */}
        {showmenu && (
          <ul className="lg:hidden flex flex-col bg-sky-600 px-4 py-3 gap-4">
            <li className="hover:underline p-2 rounded cursor-pointer text-white text-lg">
              <Link to="/" onClick={() => setshowmenu(false)}>Home</Link>
            </li>
            <li className="hover:underline p-2 rounded cursor-pointer text-white text-lg">
              <Link to="/about" onClick={() => setshowmenu(false)}>About</Link>
            </li>
            <li className="hover:underline p-2 rounded cursor-pointer text-white text-lg">
              <Link to="/contact" onClick={() => setshowmenu(false)}>Contact</Link>
            </li>
            <li className="hover:underline p-2 rounded cursor-pointer text-white text-lg">
              <Link to="/cards" onClick={() => setshowmenu(false)}>Cards</Link>
            </li>
          </ul>
        )}
        
      </div>

    </>
  );
}

export default Nav;
