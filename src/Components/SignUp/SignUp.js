import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from "../../img/icon/google.png";
import "./SignUp.css";

const SignUp = () => {
    const navigate = useNavigate();
    const handleLogin = () =>{
        navigate('/login');
        
    }
    return (
        <div>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-5 mb-4'>Login</h1>
                <form >
                <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" />
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

                    <div className='google1'>
                        <p><img src={Icon} alt="" /> SignIn with google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;