import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AvailableTools = ({data,cartItem , setCartItem}) => {
    // console.log(data)
const [isPurchased,setIsPurchased] = useState(false)

const handleBuyBtn =()=>{
 setIsPurchased(true)
    const cartExist = cartItem.find((item)=> item.id === data.id)
    if (cartExist) {
       toast.warning('Item Already in Cart...')
        return
    } else {
        setCartItem([...cartItem,data])
        toast.success("Added to Cart")
    }
}
    return (
        <div>
            <div className=" rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
      
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            src={data.icon}
            alt="icon"
            className="w-6 h-6"
          />
        </div>

        <span className={`bg-green-100   px-3 py-1 rounded-full  ${
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
      <h2 className="text-2xl font-semibold mt-5">
       {data.name}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2  leading-relaxed">
       {data.description}
      </p>

      {/* Price */}
      <div className="mt-4">
        <span className="text-3xl font-bold">${data.price}</span>
        <span className="text-gray-400  ml-1">/{data.period}</span>
      </div>

     
      <ul className="mt-4 space-y-2  text-gray-600">
        {
            data.features.map((feature, index)=>(
 <li className="flex items-center gap-2" key={index}>
          <span className="text-green-500">✔</span> {feature}
        </li>

            ))
        }
       
       
      </ul>

      {/* Button */}
      <button className={`mt-6 w-full py-3 rounded-full text-white font-medium 
  bg-linear-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition 
  ${isPurchased && "opacity-50 cursor-not-allowed"}`} onClick={handleBuyBtn}>
       {isPurchased?"Purchased":"Buy Now"}
      </button>
    </div>
        </div>
    );
};

export default AvailableTools;