import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Services.css";


const Services = ({children}) => {
    const navigate = useNavigate();
    const handleCheakout= ()=>{
      navigate("/cheakout");
    }
    const [service , setService] = useState([]);
    useEffect(()=>{
        fetch('actor.json')
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
      <h1 className="text-6xl py-12 text-center">I provide services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5  ">
        {service.map((item) => (
          
          <div className="item-div ">
          
            <img className="item-img" src={item.img} alt="" />
            <div className="py-5 pb-5 ">
              <h1 className="text-3xl">{item.name}</h1>
              <h2 className='text-center py-2 text-xl'>{item.filmName}</h2>
              <p className="py-2 text-xl">" {item.description} "</p>
            </div>
            <div className=''>
                <button className='service-btn' onClick={handleCheakout}>Cheak Out</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Services;