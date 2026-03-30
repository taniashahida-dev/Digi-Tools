import React from 'react';

const AvailableTools = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className=" rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
      
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            src={data.icon}
            alt="icon"
            className="w-6 h-6"
          />
        </div>

        <span className={`bg-green-100  text-sm px-3 py-1 rounded-full  ${
    data.tagType === "new"
      ? "text-green-600 bg-green-100"
      : data.tagType === "popular"
      ? "text-purple-700 bg-gray-100"
      : "text-yellow-600 bg-amber-100"
  }`}>
         {data.tag}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mt-5">
        Resume Builder Pro
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 text-sm leading-relaxed">
        Create professional resumes and cover letters that land interviews.
      </p>

      {/* Price */}
      <div className="mt-4">
        <span className="text-2xl font-bold">$15</span>
        <span className="text-gray-400 text-sm ml-1">/One-Time</span>
      </div>

      {/* Features */}
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> 100+ templates
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> ATS optimization
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> Export to PDF
        </li>
      </ul>

      {/* Button */}
      <button className="mt-6 w-full py-3 rounded-full text-white font-medium 
      bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition">
        Buy Now
      </button>
    </div>
        </div>
    );
};

export default AvailableTools;