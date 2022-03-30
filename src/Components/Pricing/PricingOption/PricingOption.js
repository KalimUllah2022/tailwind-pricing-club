import { ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from './Benefit/Benefit';
const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div className='my-5'>
                <h3 className='text-xl font-bold text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 w-full flex justify-center rounded py-2 mt-10'>Buy Now <ShoppingCartIcon className='w-5 h-5'></ShoppingCartIcon></button>
        </div>
    );
};

export default PricingOption;