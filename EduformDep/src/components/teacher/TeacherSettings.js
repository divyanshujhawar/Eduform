import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bootstrap2 from '../../.././node_modules/bootstrap/dist/js/bootstrap.min.js'
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Upcoming from '../student/UpcomingAssignments.js';
import Announce from '../student/Announcements.js';
import NavBar from '../teacher/TeacherNavigation';

class TeacherSettings extends React.Component{


  render(){
    return(
      <p>hi</p>
    );
  }
}

export default TeacherSettings;
