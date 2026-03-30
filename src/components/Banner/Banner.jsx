import React from "react";
import bannerImage from "../../assets/images/banner.png";
import bannerIcon from "../../assets/images/Rectangle 3.png";
import logo from "../../assets/images/Play.png";

const Banner = () => {
  return (
    <div>
      <div className=" flex items-center  my-20">
        
        <div className=" mx-auto  items-center  grid grid-cols-1 lg:grid-cols-2 gap-6  w-10/12 " >

            
          {/* Left Content */}
          <div className="space-y-4 ">
            <div className="bg-gray-200 lg:w-6/12   py-2 rounded-full text-center">
                <div className="inline-flex text-center items-center gap-2  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-lg font-medium   ">
                <img src={bannerIcon} alt="" /> <p>New: AI-Powered Tools Available</p>
              </div>
             
            </div>

            <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tighter ">
              Supercharge Your<br /><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital Workflow</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg ">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
          

<div className="flex gap-4">
      <div className="flex flex-wrap gap-4 pt-4">
              <button className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white  px-8 py-4 rounded-2xl font-semibold text-lg  flex items-center gap-3 group ">
                Explore Products
              </button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-2 border-[#9514FA] transition-all  px-8 py-4 rounded-2xl font-semibold text-lg  flex items-center gap-3 group ">
                <img
                  className="group-hover:translate-x-1 transition"
                  src={logo}
                  alt=""
                />
                Watch Demo
              </button>
            </div>
</div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                className="relative h-130 w-auto  rounded-3xl "
                src={bannerImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
