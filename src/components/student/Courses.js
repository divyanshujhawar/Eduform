import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import GenericCourse from '../student/Courses.js';

const Courses = () => {
  return(
  <div className="container">
    <div className="row">
      <div className="col-4">
          <Link to="./student-generic-course">
            <a style={{backgroundColor: '#1089ff'}} class="ui card">
              <div class="content">
                <div style={{color: '#febf63'}} class="header">P-465/565</div>
                <div class="meta">
                  <span style={{color: 'white'}} class="category">Software Engineering I</span>
                </div>
                <div class="description">
                  <p style={{color: '#febf63'}}>Fall 2020</p>
                </div>
              </div>
            </a>
            </Link>
          </div>
          <div className="col-4">
              <Link to="./student-generic-course">
                <a style={{backgroundColor: '#1089ff'}} class="ui card">
                  <div class="content">
                    <div style={{color: '#febf63'}} class="header">C-335</div>
                    <div class="meta">
                      <span style={{color: 'white'}} class="category">Computer Systems Engineering</span>
                    </div>
                    <div class="description">
                      <p style={{color: '#febf63'}}>Fall 2020</p>
                    </div>
                  </div>
                </a>
                </Link>
              </div>
              <div className="col-4">
                  <Link to="./student-generic-course">
                    <a style={{backgroundColor: '#1089ff'}} class="ui card">
                      <div class="content">
                        <div style={{color: '#febf63'}} class="header">B-461</div>
                        <div class="meta">
                          <span style={{color: 'white'}} class="category">Databases</span>
                        </div>
                        <div class="description">
                          <p style={{color: '#febf63'}}>Fall 2020</p>
                        </div>
                      </div>
                    </a>
                    </Link>
                  </div>
      </div>
      <div style={{marginTop: '20px'}} className="row">
        <div className="col-4">
            <Link to="./student-generic-course">
              <a style={{backgroundColor: '#1089ff'}} class="ui card">
                <div class="content">
                  <div style={{color: '#febf63'}} class="header">C-322</div>
                  <div class="meta">
                    <span style={{color: 'white'}} class="category">Object-Oriented Design</span>
                  </div>
                  <div class="description">
                    <p style={{color: '#febf63'}}>Fall 2020</p>
                  </div>
                </div>
              </a>
              </Link>
            </div>
            <div className="col-4">
                <Link to="./student-generic-course">
                  <a style={{backgroundColor: '#1089ff'}} class="ui card">
                    <div class="content">
                      <div style={{color: '#febf63'}} class="header">C-343</div>
                      <div class="meta">
                        <span style={{color: 'white'}} class="category">Computer StructuresI</span>
                      </div>
                      <div class="description">
                        <p style={{color: '#febf63'}}>Summer 2020</p>
                      </div>
                    </div>
                  </a>
                  </Link>
                </div>
                <div className="col-4">
                    <Link to="./student-generic-course">
                      <a style={{backgroundColor: '#1089ff'}} class="ui card">
                        <div class="content">
                          <div style={{color: '#febf63'}} class="header">C-212</div>
                          <div class="meta">
                            <span style={{color: 'white'}} class="category">Intro to Software Systems</span>
                          </div>
                          <div class="description">
                            <p style={{color: '#febf63'}}>Spring 2020</p>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
        </div>
   </div>
  );
};

export default Courses;
