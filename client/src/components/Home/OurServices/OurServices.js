import React from 'react';
import './OurServices.css';
import webDesign from '../../../images/icons/webDesign.png';
import graphicDesign from '../../../images/icons/graphicDesign.png';
import webDevelopment from '../../../images/icons/webDevelopment.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const servicesData = [
  {
    name : 'Web & Mobile Design',
    img: webDesign,
    description: 'We Craft stunning and amazing web UI, using a well drafted UX to fit your product.'
  },
  {
    name : 'Graphic Design',
    img: graphicDesign,
    description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
  },
  {
    name : 'Web Development',
    img: webDevelopment,
    description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
  }
]    
  
const OurServices = () => {

    return (
      <section className="services container mt-5">
        <div className="text-center">
          <h1>Provide awesome <span className="text-success">Services</span></h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-75 row">
          {
            servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
          }
          </div>
        </div>
      </section>
    );
};

export default OurServices;