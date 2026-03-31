import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({ cartItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-md relative">
      
      <div className="navbar w-full md:w-10/12  mx-auto ">
       <div
          className="xl:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu />
        </div>



 {isOpen && (
        <div className="xl:hidden absolute top-22 left-4 p-2 bg-gray-50   rounded-2xl shadow-md z-40 ">
          <ul className="flex flex-col gap-2  text-lg">
            <li className="bg-purple-100 hover:bg-purple-400 hover:border hover:text-white    border-purple-200 p-2 rounded-2xl"><a>Products</a></li>
            <li className="bg-purple-100 hover:bg-purple-400 hover:border hover:text-white  border-purple-200 p-2 rounded-2xl"><a>Features</a></li>
            <li className="bg-purple-100 hover:bg-purple-400 hover:border hover:text-white  border-purple-200 p-2 rounded-2xl"><a>Pricing</a></li>
            <li className="bg-purple-100 hover:bg-purple-400 hover:border hover:text-white  border-purple-200 p-2 rounded-2xl"><a>Testimonials</a></li>
            <li className="bg-purple-100 hover:bg-purple-400 hover:border hover:text-white  border-purple-200 p-2 rounded-2xl"><a>FAQ</a></li>
          </ul>
        </div>
      )}



        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-2xl md:text-4xl p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </div>
        </div>
        <div className="navbar-center hidden xl:flex">
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
       

        <div className="navbar-end gap-1 md:gap-5">
          <div className="flex gap-2 md:gap-5 items-center ">
            <div className="relative">
              <div className="text-2xl ">
                <LuShoppingCart />
              </div>
              <p className="font-semibold text-red-500 absolute -top-3 -right-2 ">
                {cartItem.length}
              </p>
            </div>
            <button className="btn rounded-2xl md:text-lg">Login</button>
          </div>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white md:text-lg p-2 md:p-4">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
