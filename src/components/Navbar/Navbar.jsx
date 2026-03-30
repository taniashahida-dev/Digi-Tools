import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
    return (
        <div className='border-b border-gray-200'>
                <div className="navbar  w-10/12  mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-4xl p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
       <p className='flex gap-4 items-center'> <LuShoppingCart /> Login</p>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-lg p-4">Get Started</a>
      </div>
    </div>
        </div>
    );
};

export default Navbar;