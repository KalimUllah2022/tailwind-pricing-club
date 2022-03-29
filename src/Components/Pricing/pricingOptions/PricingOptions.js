import React from 'react';

const PricingOptions = (props) => {
    const {name, price} = props.option;
    return (
        <div className='bg-white p-4 rounded'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>

            </p>
        </div>
    );
};

export default PricingOptions;