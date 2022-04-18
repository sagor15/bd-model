import React from 'react';
import "./Other.css";

const Other = () => {
    return (
        <div className='container other'>
            <h1 className='text-4xl text-center py-7'>Career</h1>
            <div className='otherContainer'>
                <div className='otherImg'>
                    <img src="https://i.ibb.co/qyMJPDm/actor1.png" alt="" />
                </div>
                <div className='otherRight'>
                    <p>I  born on 19 April 1991 in Chittagong, Bangladesh.
                        my father Mohiuddin Chowdhury, is self-employed and 
                        has worked in Oman as well as United Arab Emirates 
                         my mother name is Ghazala Chowdhury. She is the 
                         eldest among her siblings, two brothers (Ali Shan 
                         Chowdhury and Musdaque Chowdhury) and two sisters 
                         (Malaika Chowdhury and Kynaat Kareem Chowdhury) Due
                          to her father’s work, they had to travel a lot. </p>
                </div>
            </div>
        </div>
    );
};

export default Other;