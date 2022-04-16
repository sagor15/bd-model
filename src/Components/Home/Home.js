import React from 'react';
import Services from '../Services/Services';
import "./Home.css";

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='sm:flex md:flex-1 justify-around items-center py-9'>
            <div className='w-2/5 '>
                <h1 className='text-5xl leading-snug'>Hi !! I am Mehejabin Chowdhury</h1>
                <p className='leading-relaxed my-4 text-xl'>I am actor and model in bangladesh . acting is my passion and goal .
                 first and foremost, I would like to be very technical and professional.</p>
                <button className='home-btn'>More Details</button>
            </div>
            <div className='homeRightContainer'>
                <img src='https://i.ibb.co/PQWGVWp/photostudio-7-designify.png' alt="" />
            </div>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;