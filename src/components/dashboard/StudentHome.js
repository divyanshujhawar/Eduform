import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Upcoming from '../student/UpcomingAssignments.js';
import Announce from '../student/Announcements.js';
import NavBar from '../student/StudentNavigation';


class StudentHome extends React.Component {
  render(){
    return(
          <div className="backGroundSAT">
            <div className="container">
                    <div style={{marginTop:'10px'}} className="row">
                        <div className="col col-md-1 col-sm-2"></div>
                        <div style={{paddingRight: '20%',textAlign: 'left'}} className="col col-md-8 col-sm-10">
                          <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>
                          <h1 className="studentWords" style={{fontSize: '2.4rem'}}> Upcoming Assignments</h1>
                          <hr style={{marginBottom: '30px'}}/>
                              <Upcoming />
                        </div>

                        <div style={{marginTop: '103px'}} className="col col-md-3 col-sm-10">
                          <h1 className="studentWords" style={{fontSize: '2.4rem'}}> Announcements</h1>
                          <hr/>
                        <Announce />
                        </div>
                    </div>
                    <hr/>
               </div>
              <NavBar />
            </div>
          );
  }
}

export default StudentHome;
