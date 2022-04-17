import React from 'react';
import "./Login.css";
import Icon from "../../img/icon/google.png"
import { useNavigate } from 'react-router-dom';


    


const Login = () => {
    const navigate = useNavigate();
    const handleSignup = () =>{
        navigate('/signup');
        console.log('ami asi')
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
                        <label htmlFor="password">Password</label> <br /> 
                        <input type="password" name="password" id="" />
                    </div>
                    <div className='loginBtnContainer'>
                    <button className="btn">Login</button>
                    </div>
                    
                </form>
                <div className='accountOrNot'>
                   <p>You have no account ? <button onClick={handleSignup}>Sign Up</button></p>
                </div>
                <div className='OrSection'>
                   <p>Or</p>

                   <div className='google'>
                       <p><img src={Icon} alt="" /> SignIn with google</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Login;