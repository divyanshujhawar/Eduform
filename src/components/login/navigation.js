import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Background from '../../assets/wall4.jpg';
import Logo from '../../assets/edLogo.png';

const navigation = () => {
    return(
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <img style={{width: '40px', height: '40px'}} src={Logo} alt="edLogo"/>
          <Link className="navbar-brand" to={"/sign-in"}>EduForm</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} style={{fontSize: '1.5rem',color:'#febf63'}}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"} style={{fontSize: '1.5rem',color:'#febf63'}}>Sign up</Link>
              </li>
            </ul>
          </div>
      </nav>
    );
};

export default navigation;
