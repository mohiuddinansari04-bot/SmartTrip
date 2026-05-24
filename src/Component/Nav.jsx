import React from "react";
import { FaRocket } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
djfbefj

function Nav() {
  return (
    <>
      <div className="w-full">
        <nav className="bg-sky-700 px-4 py-3 flex flex-row md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <h1 className="flex items-center text-2xl sm:text-3xl font-bold text-white bg-sky-600 rounded shadow px-4 py-2">
            <FaRocket className="text-2xl sm:text-3xl text-white mr-2" />
            SmartTrip
          </h1>

          {/* Nav Links */}
          <ul className="lg:flex flex-col sm:flex-row hidden justify-center items-center gap-4 text-lg font-medium">
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

          {/* Login Button */}

          <button className="flex items-center gap-2 text-white text-lg sm:text-xl px-4 py-2 rounded hover:bg-sky-500 ">
            <AiOutlineLogin />
            Login
          </button>
        </nav>
      </div>
    </>
  );
}

export default Nav;
