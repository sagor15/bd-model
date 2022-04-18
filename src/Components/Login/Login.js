import React, { useRef, useState } from 'react';
import "./Login.css";
import Icon from "../../img/icon/google.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../firbase-init';
import Loading from "../../Components/Blog/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateEmail } from 'react-firebase-hooks/auth';
// import { async } from '@firebase/util';


const provider = new GoogleAuthProvider();



const Login = () => {
    const [errore, setErrore] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

      if(loading || sending){
          return <Loading></Loading>
      }

      if(user){
        navigate(from , {replace: true});
      }

      let errorElement;
      if(error){
          errorElement = <p className='text-danger'>Error : {error?.message}</p>
      }

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

        signInWithEmailAndPassword( email, password)
            
    }

    const resetPassword = async (event)=>{
        const email = event.current.value;
        await sendPasswordResetEmail(email);
        toast('send email');
    }

    return (
        <div>
            <div className='loginContainer'>
                <h1 className='text-5xl text-center text-indigo-500 py-2 mb-4'>Login</h1>
                <form onSubmit={handleSignInSubmit}>
                    <div className='loginContainer1'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="" required  />
                    </div>
                    <div className='loginContainer1'>
                        <label htmlFor="password">Password</label> <br />
                        <input  type="password" name="password" id="" required />
                    </div>
                    <p className='text-center'>{errorElement}</p>
                    <div className='loginBtnContainer'>
                        <button className="btn">Login</button>
                    </div>

                </form>
                <div className='accountOrNot'>
                    <p>You have no account ? <button onClick={handleSignup}>Sign Up</button></p>
                </div>
                <div className='accountOrNot'>
                    <p>Forget password ? <button onClick={resetPassword}>Reset</button></p>
                </div>
                <div className='OrSection'>
                    <p>Or</p>

                    <div onClick={googleAuth} className='google'>
                        <p><img src={Icon} alt="" /> SignIn with google</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
// };
export default Login ;