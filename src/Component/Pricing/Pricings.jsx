import React, { use } from 'react';

import axios from 'axios';
import Pricing from './Pricing';

const pricingDataPromise = axios.get("/db/Pricing.json")

const Pricings = () => {

    const pricingData = use(pricingDataPromise);

    return (
        <div className='py-10 lg:py-32 space-y-10 w-[88%] mx-auto ' id='pricing'>
            <div className='text-center flex items-center flex-col gap-4'>
                <h2 className='font-bold text-4xl lg:text-5xl text-base-content/85'>
                    Simple, Transparent Pricing
                </h2>
                <p className='text-base-content/50 lg:w-[50%]'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    pricingData.data.map(pricing => <Pricing pricing={pricing}/>)
                }
            </div>
        </div>
    );
};

export default Pricings;