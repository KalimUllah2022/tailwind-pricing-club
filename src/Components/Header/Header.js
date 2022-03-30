import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-6xl'>This is my Header</h2>
        </div>
    );
};

export default Header;