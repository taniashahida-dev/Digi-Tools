import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { RiFacebookFill } from 'react-icons/ri';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <footer className="bg-zinc-950  pt-16 pb-10">
      <div className="w-10/12 mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-2" >
           
              <h2 className="text-4xl font-bold tracking-tighter text-white">
             DigiTools
              </h2>
           

            <p className="text-zinc-400 text-lg max-w-md">
             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-xl">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                 Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-xl">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                 Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-xl">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
              Contact
                </a>
              </li>
            </ul>
          </div>


          <div className=' md:col-span-2 space-y-3'>
            <p className='text-white text-xl '>Social Links</p>
          <div className='flex gap-3 text-center items-center'>
           <div className='text-black bg-white p-2 rounded-full text-2xl '>
             <FiInstagram />
           </div>
          <div className='text-black bg-white p-2 rounded-full text-2xl'><RiFacebookFill /></div>
         <div     className='text-black bg-white p-2 rounded-full text-2xl'>
             <FaXTwitter />
         </div>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div> © 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-[#9514FA] transition">
             Privacy Policy          
            </a>
            <a href="#" className="hover:text-[#9514FA] transition">
                Terms of Service 
            </a>
            <a href="#" className="hover:text-[#9514FA] transition">
               Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;