import React, { use, useState } from 'react';
import AvailableTools from '../AvailableTools/AvailableTools';

const ToolsData = ({Data}) => {
    const allData = use(Data)
    // console.log(allData)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container w-10/12 mx-auto my-20'>
             {
                allData.map(data=> <AvailableTools key={data.id} data={data}></AvailableTools>)
            }
           </div>
            
        </div>
    );
};

export default ToolsData;