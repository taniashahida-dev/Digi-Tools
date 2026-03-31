import React from 'react';
import Cart from './Cart';

const CartItems = ({cartItem , setCartItem}) => {

    const totalPrice = cartItem.reduce((sum,item)=> sum+item.price ,0)

    const handlePayment =()=>{
        setCartItem([])
    }

    const handleDelete =(item)=>{
const filterItem = cartItem.filter(items=> items.id !== item.id)
setCartItem(filterItem)
    }
    return (
        <div className='container mx-auto my-10 border border-gray-200 p-10 rounded-2xl'>
        
             <div className='text-5xl font-extrabold  text-center'>
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


    <div className='flex justify-between p-8 rounded-2xl border border-gray-200 items-center my-6'>
        <p>Total:</p>
        <p>${totalPrice}</p>
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