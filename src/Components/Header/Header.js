import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firbase-init";

const Header = () => {
        const [user , setUser] = useState({});
    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
             
            } else {
              setUser({});
            }
          });
    },[])

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
   
    return (
        <div className='flex-none justify-around items-center py-4 md:flex-1 sm:flex header'>
            <div className='text-4xl text-indigo-500/75 mehe-shadow'>
                <span>Mehejabin</span>
            </div>
            <nav className='navber'>
                <Link to='/'>Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
                <Link to='/about'>About</Link>
                {/* <Link  to='/signup'>Sign Up</Link> */}
                {
                    user.uid ? <Link onClick={handleSignOut} className='bg-indigo-500/50 text-white rounded login ' to="/login">SignOut</Link> :
                    <Link className='bg-indigo-500/50 text-white rounded login ' to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;