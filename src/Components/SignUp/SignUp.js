import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from "../../img/icon/google.png";
import "./SignUp.css";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firbase-init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { async } from '@firebase/util';
import Loading from '../Blog/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const provider = new GoogleAuthProvider();

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = () =>{
        navigate('/login');
        
    }
    // const [agree , setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});

      const [updateProfile, updating, error] = useUpdateProfile(auth);



      if(loading || updating){
        return <Loading></Loading>
    }


      if(user){
        console.log("user" , user)
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
   
    const handleSignUpSubmit = async (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log( password ,email)

        
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
          alert('veryfi your email');
          navigate('/')         
    }

   


    return (
        <div>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-2 mb-2'>Sign Up</h1>
                <form  onSubmit={handleSignUpSubmit}>
                <div className='loginContainer1'>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="" />
                    </div>
                    {/* <p className='text-center'>{error}</p> */}
                    <div className='loginBtnContainer'>
                        <button  className="btn">Sign Up</button>
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
            <ToastContainer />
        </div>
    );
};

export default SignUp;