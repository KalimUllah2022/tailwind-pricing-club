import React from 'react';
import PricingOptions from './pricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0},
        {id: 2, name: 'Regular', price: 9.99},
        {id: 3, name: 'Premium', price: 19.99},
    ];
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the town</h1>
            <p> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    pricingOptions.map(option => <PricingOptions key={option.id} option={option}></PricingOptions>)
                }
            </div>
        </div>
    );
};

export default Pricing;