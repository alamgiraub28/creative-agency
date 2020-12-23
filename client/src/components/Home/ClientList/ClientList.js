import React from 'react';
import client1 from '../../../images/logos/airbnb.png';
import client2 from '../../../images/logos/google.png';
import client3 from '../../../images/logos/netflix.png';
import client4 from '../../../images/logos/slack.png';
import client5 from '../../../images/logos/uber.png';

const ClientList = () => {
    return (
        <div className="container">
        <div className="client d-flex text-center justify-content-center align-items-center m-auto pt-5">
        <div className="col-md-2">
        <img src={client1} className="w-75" alt=""/>
        </div>
        <div className="col-md-2">
        <img src={client2} className="w-75" alt=""/>
        </div>
        <div className="col-md-2">
        <img src={client3} className="w-50" alt=""/>
        </div>
        <div className="col-md-2">
        <img src={client4} className="w-75" alt=""/>
        </div>
        <div className="col-md-2">
        <img src={client5} className="w-50" alt=""/>
        </div>
    </div>
        </div>
    );
};

export default ClientList;