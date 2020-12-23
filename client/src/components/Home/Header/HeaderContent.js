import React from 'react';
import HeaderImg from '../../../images/logos/Frame.png';
import './Header.css';



const HeaderContent = () => {
    return (
        <div className="pt-5 pb-5" style={{"backgroundColor": "#FBD062"}}>
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    <h1 style={{"fontWeight":"800"}}>Let’s Grow Your
                    Brand To The
                    Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-dark px-5 align-items-center justify-content-center">Hire us</button>
                </div>
                <div className="col-md-8">
                <img src={HeaderImg} className="w-100" alt=""/></div>
                </div>
        </div>
        </div>
        
    );
};

export default HeaderContent;