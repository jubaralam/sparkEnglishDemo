// Navbar.js
// import React from 'react';
import { Link } from "react-router-dom"; // If using routing
import logo from "../assets/logo1.png"

const Navbar = () => {
  return (
    <section className="bg-gray-100  sticky top-0 z-10 ">

    <nav className="max-w-7xl  px-4 sm:px-6 lg:px-8  radius-md p-4 flex justify-between items-center sticky top-0 z-10 space-between mx-auto rounded-b-[15px] bg-orange-500">
      <div>
      <Link to="/">
          <img src={logo} alt="Logo" className="h-8 w-auto rounded-xl" />
        </Link>
      </div>
      <div className="flex items-center ">
       
        <ul className="flex space-x-4 ml-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="text-white hover:text-gray-300 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="text-white hover:text-gray-300">Login</button>
      </div>
    </nav>
    </section>
  );
};

export default Navbar;
