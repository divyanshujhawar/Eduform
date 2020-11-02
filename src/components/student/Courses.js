import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import CoursesBlocks from '../student/CourseBlocks.js';
import NavBar from '../student/StudentNavigation';

class Courses extends React.Component {

  render(){
    return(
      <div className="backGroundSAT">
           <div className="container">
             <div style={{marginTop:'10px'}} className="row">
                 <div className="col-md-1 col-sm-2"></div>
                 <div style={{textAlign: 'left'}} className="col-md-11 col-sm-8">
                   <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>
                   <h1 className="studentWords" style={{fontSize: '2.4rem'}}> Courses</h1>
                   <hr style={{marginBottom: '30px'}}/>
                   <CoursesBlocks />
                 </div>
             </div>
             <hr/>
              <NavBar />
           </div>
        </div>
    );
  }
}

export default Courses;
