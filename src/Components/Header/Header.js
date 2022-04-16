import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='flex-none justify-around items-center py-4 md:flex-1 sm:flex header'>
            <div className='text-4xl text-indigo-500/75 mehe-shadow'>
                <span>Mehejabin</span>
            </div>
            <nav className='navber'>
                <Link to='/'>Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
                <Link className='bg-indigo-500/50 text-white rounded login' to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;