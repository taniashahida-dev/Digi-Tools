import React from 'react';

const StateSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
            <div className='text-white flex justify-around w-full md:w-10/12 mx-auto p-6  lg:p-20 '>
                <div>
                <h1 className='text-3xl lg:text-6xl font-bold mb-2'>50K+</h1>
                <p className='text-xl text-gray-200'>Active Users</p>
            </div>
               <div className="divider divider-horizontal before:bg-white after:bg-white text-white "></div>
             
            <div>
                <h1 className='text-3xl lg:text-6xl font-bold mb-2'>200+</h1>
                <p className='text-xl text-gray-200'>Premium Tools</p>
            </div>
            <div className="divider divider-horizontal before:bg-white after:bg-white text-white "></div>
            <div>
                <h1 className='text-3xl lg:text-6xl font-bold mb-2'>4.9</h1>
                <p className='text-xl text-gray-200'>Rating</p>
            </div>
            </div>
        </div>
    );
};

export default StateSection;