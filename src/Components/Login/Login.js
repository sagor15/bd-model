import React from 'react';
import "./Login.css";
import Icon from "../../img/icon/google.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../firbase-init';


const provider = new GoogleAuthProvider();


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    


    const handleSignup = () => {
        
        navigate('/signup');
    }

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate(from , {replace: true});
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
            });
    }
    const handleSignInSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log( password ,email)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                navigate(from , {replace: true});
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
            navigate(from , {replace: true});
    }

    return (
        <div>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-5 mb-4'>Login</h1>
                <form onSubmit={handleSignInSubmit}>
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

                    <div onClick={googleAuth} className='google'>
                        <p><img src={Icon} alt="" /> SignIn with google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;