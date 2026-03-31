import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';

const CartItems = ({cartItem , setCartItem}) => {

    const totalPrice = cartItem.reduce((sum,item)=> sum+item.price ,0)

    const handlePayment =()=>{
        toast.success('Payment Successfull !!!!')
        setCartItem([])
    }

    const handleDelete =(item)=>{
        toast.error('Order Removed From Cart')
const filterItem = cartItem.filter(items=> items.id !== item.id)
setCartItem(filterItem)
    }
    return (
        <div className='w-10/12 mx-auto my-10 border border-gray-200 p-5 md:p-10 rounded-2xl'>
        
             <div className='text-3xl md:text-4xl lg:text-5xl font-extrabold  text-center'>
                <h1>
                    Your Cart
                </h1>
            </div>
            <div className='container mx-auto my-4 '>
                {
                    cartItem.map(item=> <Cart key={item.id} item ={item} handleDelete={handleDelete}></Cart>)
                }
            </div>
          

           <div>
            {
cartItem.length > 0 ? <div>


    <div className='flex justify-between p-8 rounded-2xl border border-gray-200 items-center my-6 '>
        <p>Total:</p>
        <p className='text-2xl font-bold text-black'>${totalPrice}</p>
    </div>
    <div className='btn w-full rounded-full p-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xl text-white'>
        <button onClick={handlePayment}>Proceed to Checkout</button>
    </div>
</div>




:  <div className='flex text-center justify-center text-gray-300 bg-gray-50 py-60 rounded-2xl my-4 text-4xl  font-bold'>
    Cart Is Empty
</div>
            }
           </div>
        </div>
    );
};

export default CartItems;