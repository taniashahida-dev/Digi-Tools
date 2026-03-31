import React, { use, useEffect, useState } from 'react';
import AvailableTools from '../AvailableTools/AvailableTools';
import CartItems from './CartItems/CartItems';



const ToolsData = ({Data,cartItem , setCartItem}) => {
    // const allData = use(Data)


    const [allData, setAllData] = useState([]);

useEffect(() => {
  Data.then(res => setAllData(res));
}, [])
 
    const [activeBtn, setActiveBtn] = useState("products");
    // console.log(allData)
    return (
        <div>
            <div className='text-center space-y-4 my-6 mt-10 md:my-20'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Premium Digital Tools</h1>
                <p className='text-gray-400 md:text-xl'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

  <div className="tabs tabs-box justify-center bg-transparent gap-3">
        <input
          onClick={() => setActiveBtn("products")}
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-60 text-purple-600 bg-gray-200 ${activeBtn === "products" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg"}`}
          aria-label="Products"
          defaultChecked
        />
        <input
          onClick={() => setActiveBtn("cart")}
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-60 text-purple-600 bg-gray-200 ${activeBtn === "cart" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white  text-lg"}`}
          aria-label={`Cart(${cartItem.length})`}
        />
      </div>
{
    activeBtn==="products" ?
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container w-10/12 mx-auto my-10 md:my-20'>
             {
                allData.map(data=> <AvailableTools cartItem={cartItem} setCartItem={setCartItem} key={data.id} data={data}></AvailableTools>)
            }
           </div>: <CartItems cartItem={cartItem} setCartItem={setCartItem}></CartItems>
}
            
        </div>
    );
};

export default ToolsData;