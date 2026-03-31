import React from 'react';

const Cart = ({item , handleDelete}) => {
    return (
        <div className='flex justify-between p-6 md:p-8 rounded-2xl bg-gray-100 items-center mb-6'>
           <div className='flex items-center gap-3 md:gap-6'>
             <img src={item.icon} alt="" className='w-10 h-10 md:w-14 md:h-14' />
            <div>
                <h3 className=' text-xl md:text-2xl font-bold'>{item.name}</h3>
                <p className='text-gray-400  md:text-lg'>${item.price}</p>
            </div>
           </div>
            <p className='text-red-600 btn rounded-2xl' onClick={()=>handleDelete(item)}>Remove</p>
        </div>
    );
};

export default Cart;