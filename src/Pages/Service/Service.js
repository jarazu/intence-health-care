import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


// export const ServiceContext = createContext();
const Service = ({service}) => {
    const { name, price, description, img, id } = service;
   
    return (
        <div className="service pb-3">
            <img src={img} alt="" className="img-fluid"/>
            <h6 className="fw-bold mt-3">{name}</h6>
            <h5>Price: ${price}</h5>
            <p className="px-3">{description}</p>
            
            <Link
            to={{
                pathname: `/details/${id}`,
                state: {
                detail: service,
                },
            }}
        ><button className="btn btn-info text-white fw-bold">Read More</button></Link>
        </div>
    );
};

export default Service;