import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import AdminNavBar from '../admin/AdminNavBar.js';


import UserProfile from '../.././utils/UserProfile';


class AdminHome extends Component{



  render(){

    {console.log(UserProfile.getEmail())}


    return(
      
        <div className="adminBackground">
          <div className="flex-container">
          <AdminNavBar/>
            <div>
              <p> Welcome to the dashboard</p>
              <br></br>
              <p>{UserProfile.getName()}
              </p>
            </div>
        </div>
      </div>
    );
  }

}

export default AdminHome;
