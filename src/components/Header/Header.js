import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link className='text-xl mx-4' to='/awsome'>Awsome Auth</Link>
            <Link className='text-xl mx-4' to='/home'>Home</Link>
            <Link className='text-xl mx-4' to='/about'>About</Link>
            <Link className='text-xl mx-4' to='/login'>Login</Link>
            <Link className='text-xl mx-4' to='/register'>Register</Link>
        </div>
        </div>
    );
};

export default Header;