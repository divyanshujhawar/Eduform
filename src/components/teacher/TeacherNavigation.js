import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';

const TeacherNavigation = () => {
  return(
    <div style={{marginTop: '6%'}} class="row">
      <div className="col-1">
        <div style={{width: '131px',backgroundColor: '#febf63'}} className="ui visible sidebar inverted vertical menu">
          <h1 className="welcome" style={{paddingTop: '3%', fontSize: '2.1rem', color: 'black'}}> Eduform </h1>
          <hr style={{backgroundColor: '#febf63', marginBottom: '7%'}} />
          <div style={{backgroundColor: 'white',paddingLeft: '15%', paddingRight: '15%'}}>
            <img style={{width: '65px', height: '65px', margin: 'auto', marginBottom: '3%', marginTop: '3%'}} className="rounded-circle" src={Personal} />
          </div>

          <Link to='/teacher-home'>
            <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '1.5rem', color:'#1089ff'}} className="fas fa-home"></i>
              <h3 style={{marginTop: '2px', marginBottom: '0px', color: 'black'}}> Home </h3>
            </a>
          </Link>
          <Link to='/teacher-courses'>
            <a style={{paddingBottom: '10px'}} className="item">
            <i style={{fontSize: '1.5rem', color:'#1089ff'}} className="fas fa-book"></i>
            <h3 style={{marginTop: '2px',marginBottom: '0px',color: 'black'}}> Courses </h3>
            </a>
          </Link>
          <Link to='/teacher-chat'>
            <a style={{paddingBottom: '10px'}} className="item">
              <i style={{fontSize: '1.5rem', color:'#1089ff'}} className="far fa-comment"></i>
             <h3 style={{marginTop: '2px',color: 'black',marginBottom: '0px'}}> Chat </h3>
            </a>
          </Link>
          <Link to='/teacher-calendar'>
            <a style={{paddingBottom: '10px'}} className="item">
              <i style={{marginBottom: '0',fontSize: '1.5rem', color:'#1089ff'}} className="far fa-calendar-alt"></i>
              <h3 style={{marginTop: '2px',color: 'black', marginBottom: '0px'}}> Calendar </h3>
            </a>
          </Link>
          <Link to='/teacher-settings'>
            <a style={{paddingBottom: '10px'}} style={{fontSize: '1.5rem', color:'#1089ff'}} className="item">
              <i class="fas fa-cogs"></i>
               <h3 style={{marginTop: '2px',color: 'black', marginBottom: '0px'}}> Settings </h3>
            </a>
          </Link>
          <Link to='/sign-in'>
            <a style={{position: 'absolute', bottom: '0'}} className="item">
            <h3 style={{marginTop: '2px',color: 'black'}}> Log Out </h3>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherNavigation;
