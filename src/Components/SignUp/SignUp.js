import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from "../../img/icon/google.png";
import "./SignUp.css";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firbase-init';





const provider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login');
        
    }
const googleAuth = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      const errorMessage = error.message; 
    });
}
   



    return (
        <div>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-5 mb-4'>Sign Up</h1>
                <form >
                <div className='loginContainer1'>
                        <label htmlFor="email">Name</label> <br />
                        <input type="text" name="email" id="" />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="" />
                    </div>
                    <div className='loginBtnContainer'>
                        <button className="btn">Sign Up</button>
                    </div>

                </form>
                <div className='accountOrNot'>
                    <p>You have a account ? <button onClick={handleLogin}>Login</button></p>
                </div>
                <div className='OrSection1'>
                    <p>Or</p>

                    <div onClick={googleAuth} className='google1'>
                        <p><img src={Icon}  alt="" /> SignUp with google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;