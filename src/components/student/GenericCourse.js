import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Announce from '../student/Announcements.js';

const GenericCourse = () => {
  return(
    <div className="backGroundSAT">
      <div className="container">
        <div style={{marginTop:'10px'}} className="row">
            <div className="col-md-1 col-sm-2"></div>
            <div style={{textAlign: 'left'}} className="col-md-11 col-sm-8">
              <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>
              <h1 className="studentWords" style={{fontSize: '2.4rem'}}> P465 - Software Engineering</h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet tellus id felis vestibulum porttitor non nec nulla. Maecenas rutrum vel metus a ullamcorper. Fusce cursus, purus vel mattis ultrices, ex risus accumsan diam, ut congue mauris leo molestie lectus. Pellentesque mauris augue, sagittis nec pharetra vulputate, rhoncus vel leo. Pellentesque augue metus, sodales euismod dapibus in, tempus ac turpis. Nam mi dolor, tempor non feugiat at, porta vitae erat. Curabitur odio diam, fringilla non porttitor non, condimentum placerat erat. Aliquam scelerisque feugiat lacinia. </p>
              <hr style={{marginBottom: '30px'}}/>

            </div>
        </div>
        </div>
        <div className="row">
        <div style={{paddingTop: '15px'}}className="col-md-8 col-sm-12">
        <div style={{marginBottom: '45px'}} className="row">
          <div style={{textAlign: 'right', paddingRight: '30px'}} className="col-6">
          <Link to='./student-home'>
            <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '5.5rem', color:'#1089ff'}} class="fas fa-percent"></i>
              <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Grades </h3>
            </a>
          </Link>
          </div>
          <div style={{textAlign: 'left',paddingLeft: '30px'}} className="col-6">
          <Link to='./student-home'>
            <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '5.5rem', color:'#1089ff'}} className="fas fa-home"></i>
              <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Home </h3>
            </a>
          </Link>
          </div>
        </div>
        <div style={{marginBottom: '10px'}} className="row">
          <div style={{textAlign: 'right'}} className="col-5">
          <Link to='./student-home'>
            <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '5.5rem', color:'#1089ff'}} class="fas fa-exclamation-circle"></i>
              <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Notifications </h3>
            </a>
          </Link>
          </div>
          <div style={{fontSize: '7.5rem',textAlign: 'center'}} className="col-2">
            <i style={{color:'#febf63'}} class="fas fa-circle"></i>
          </div>
          <div style={{textAlign: 'left'}} className="col-5">
          <Link to='./student-home'>
            <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '5.5rem', color:'#1089ff'}} class="fas fa-copy"></i>
              <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Assignments </h3>
            </a>
          </Link>
          </div>
        </div>
        <div style={{marginTop:'35px'}}className="row">
          <div style={{textAlign: 'center'}} className="col-12">
          <Link to='./student-home'>
            <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '5.5rem', color:'#1089ff'}} className="far fa-comment"></i>
              <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Chat </h3>
            </a>
          </Link>
          </div>
          </div>
          </div>
          <div style={{paddingRight: '5%'}}className="col-md-4 col-sm-12">
            <h1 className="studentWords" style={{fontSize: '2.4rem'}}> Announcements</h1>
            <hr/>
          <Announce />
          </div>
          </div>
        <hr/>
          <div style={{marginTop: '6%'}} class="row">
            <div className="col-1">
              <div style={{width: '131px',backgroundColor: '#1089ff'}} className="ui visible sidebar inverted vertical menu">
                <h1 className="welcome" style={{paddingTop: '3%', fontSize: '2.1rem', color: 'black'}}> Eduform </h1>
                <hr style={{backgroundColor: '#1089ff', marginBottom: '7%'}} />
                <div style={{backgroundColor: 'white',paddingLeft: '15%', paddingRight: '15%'}}>
                  <img style={{width: '65px', height: '65px', margin: 'auto', marginBottom: '3%', marginTop: '3%'}} className="rounded-circle" src={Personal} />
                </div>

                <Link to='./student-home'>
                  <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
                    <i style={{fontSize: '1.5rem', color:'#febf63'}} className="fas fa-home"></i>
                    <h3 style={{marginTop: '2px', marginBottom: '0px', color: 'black'}}> Home </h3>
                  </a>
                </Link>
                <Link to='./student-courses'>
                  <a style={{paddingBottom: '10px'}} className="item">
                  <i style={{fontSize: '1.5rem', color:'#febf63'}} className="fas fa-book"></i>
                  <h3 style={{marginTop: '2px',marginBottom: '0px',color: 'black'}}> Courses </h3>
                  </a>
                </Link>
                <Link to='./student-chat'>
                  <a style={{paddingBottom: '10px'}} className="item">
                    <i style={{fontSize: '1.5rem', color:'#febf63'}} className="far fa-comment"></i>
                   <h3 style={{marginTop: '2px',color: 'black',marginBottom: '0px'}}> Chat </h3>
                  </a>
                </Link>
                <Link to='./student-calendar'>
                  <a style={{paddingBottom: '10px'}} className="item">
                    <i style={{marginBottom: '0',fontSize: '1.5rem', color:'#febf63'}} className="far fa-calendar-alt"></i>
                    <h3 style={{marginTop: '2px',color: 'black', marginBottom: '0px'}}> Calendar </h3>
                  </a>
                </Link>
                <Link to='./student-settings'>
                  <a style={{paddingBottom: '10px'}} style={{fontSize: '1.5rem', color:'#febf63'}} className="item">
                    <i class="fas fa-cogs"></i>
                     <h3 style={{marginTop: '2px',color: 'black', marginBottom: '0px'}}> Settings </h3>
                  </a>
                </Link>
                <Link to='./sign-in'>
                  <a style={{position: 'absolute', bottom: '0'}} className="item">
                  <h3 style={{marginTop: '2px',color: 'black'}}> Log Out </h3>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>


  );
};

export default GenericCourse;
