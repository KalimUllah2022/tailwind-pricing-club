import React from 'react';
import PricingOption from './PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, benefits: [
            'Lifetime Free',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
        ]},
        {id: 2, name: 'Regular', price: 9.99, benefits: [
            'Everything On Free',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
        ]},
        {id: 3, name: 'Premium', price: 19.99, benefits: [
            'Everything On Regular',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
        ]}
    ];
    return ( 

        <div className='bg-indigo-300  py-4 mt-8'>
            <h1 className='text-6xl text-white font-mono'>Best Deals of the Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque fuga! Quas dolores ad, rem eligendi sint expedita commodi odio!</p>
            <div className='grid mx-4 md:grid-cols-3 gap-5 mt-8 '>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
        
    );
};

export default Pricing;