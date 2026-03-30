import React from 'react';
import user from "../../assets/images/user.png"
import  packag from "../../assets/images/package.png"
import rocket from "../../assets/images/rocket.png"

const Steps = () => {
    return (
        <div className='bg-gray-100 my-20'>
          <div className='w-10/12 mx-auto text-center py-10 ' >
              <div className=' space-y-2 mt-20'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-gray-400 text-lg lg:text-xl mt-3'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  my-20'>
                <div className='bg-white  rounded-2xl px-3 py-14  space-y-3 relative'>
                     <span className='text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full p-2  items-center text-center absolute top-6 right-6'>01</span>
                 <div className='flex justify-center '>   <img className='bg-gray-200 rounded-full p-4' src={user} alt="" /></div>
                    <h2 className='text-2xl font-semibold'>Create Account</h2>
                    <p className='text-gray-400'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                </div>
                <div className='bg-white  rounded-2xl px-3 py-14 space-y-3 relative'>
                     <span className='text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full p-2  items-center text-center absolute top-6 right-6'>02</span>
                   <div  className='flex justify-center '> <img className='bg-gray-200 rounded-full p-4' src={packag} alt="" /></div>
                    <h2 className='text-2xl font-semibold'>Choose Products</h2>
                    <p className='text-gray-400'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                </div>
                <div className='bg-white  rounded-2xl px-3 py-14 space-y-3 relative'>
                     <span className='text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full p-2  items-center text-center absolute top-6 right-6'>03</span>
                   <div  className='flex justify-center '> <img className='bg-gray-200 rounded-full p-4' src={rocket} alt="" /></div>
                    <h2 className='text-2xl font-semibold'>Start Creating</h2>
                    <p className='text-gray-400'>Download and start using your premium <br /> tools immediately.</p>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Steps;