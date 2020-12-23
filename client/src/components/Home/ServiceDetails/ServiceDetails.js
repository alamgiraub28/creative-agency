import React from 'react';

const ServiceDetails = ({service}) => {

    return (
       
        <div className ="col-md-4 text-center mt-5">
            <img style={{width:'50px'}} src={service.img} alt=""/>
            <h2 className="mt-3 mb-3">{service.name}</h2>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetails;