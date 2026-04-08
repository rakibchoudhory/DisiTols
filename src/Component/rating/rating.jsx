import React from 'react';

const Rating = () => {
    return (
        <>
          <div className='bg-gradient-to-b from-[#4F39F6] to-[rgb(149,20,250)] '>
            
        <div className='w-11/12 mx-auto grid grid-cols-3 text-center py-8'>

            <div className='border-r-2 border-gray-400'>
                <h1 className='text-3xl text-white font-bold'>50K+</h1>
                <p className='text-gray-300 mt-3'>Active Users</p>
            </div>
            <div className='border-r-2 border-gray-400'>
            <h1 className='text-3xl text-white font-bold'>200+</h1>
            <p className='text-gray-300 mt-3'>Premium Tools</p>
            </div>
            <div>
                <h1 className='text-3xl text-white font-bold'>4.9</h1>
                <p className='text-gray-300 mt-3'>Rating</p>
            </div>

        </div>


        </div>

      

        </>
      
        
    );
};

export default Rating;