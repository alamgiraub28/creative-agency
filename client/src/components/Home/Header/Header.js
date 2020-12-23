import React from 'react';
import logo from '../../../images/logos/logo.png';
import './Header.css';

const Header = () => {
 
    return (
        <div className="header" style={{"backgroundColor": "#FBD062"}}>
        <div className="container">
        <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"><img src={logo} style={{height:60}} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item px-1">
        <a class="nav-link active text-dark" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="#">Our Team</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-dark" href="#">Contact Us</a>
    </li>
    <button className="btn btn-dark ml-2 px-4">Login</button>
    </ul>
    
  </div>
</nav>
        </div>
        </div>
        
        
    );
};

export default Header;