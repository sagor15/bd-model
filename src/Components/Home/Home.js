import React from 'react';
import { useNavigate } from 'react-router-dom';
import Other from '../Other/Other';
import Services from '../Services/Services';
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const handleAbout = () =>{
        navigate('/about');
    }
    return (
        <div className='container mx-auto '>
            <div className='sm:flex md:flex-1 justify-around items-center py-9  '>
            <div className='w-2/5 homeContainer '>
                <h1 className='text-5xl leading-snug homeHone'>Hi !! I am Mehejabin Chowdhury</h1>
                <p className='leading-relaxed my-4 text-xl'>I am actor and model in bangladesh . acting is my passion and goal .
                 first and foremost, I would like to be very technical and professional.....</p>
                <button className='home-btn' onClick={handleAbout}>More Details</button>
            </div>
            <div className='homeRightContainer'>
                <img src='https://i.ibb.co/PQWGVWp/photostudio-7-designify.png' alt="" />
            </div>
            </div>
            <div>
                <Services></Services>
                <Other></Other>
            </div>
        </div>
    );
};

export default Home;