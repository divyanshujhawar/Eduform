import React, { Component } from 'react';
import { Link, Route , withRouter } from "react-router-dom";
import Personal from '../../assets/cat.jpg';

import UserProfile from '../.././utils/UserProfile';


class AdminNavBar extends Component{

    constructor(props) {
        super(props);
        this.state = {

            userProfile:{}

        };

        this.logUserOut = this.logUserOut.bind(this);
        this.checkUserStatus = this.checkUserStatus.bind(this);
    }


    logUserOut(){

        this.state.userProfile.email = ''

        UserProfile.setEmail(this.state.userProfile);

        return this.props.history.push('/sign-in');

    }

    checkUserStatus(){
        const UserEmail = UserProfile.getEmail();

        if (UserEmail === ""){
            return this.props.history.push('/sign-in');
        }
    }

    render() {

        {/*this.checkUserStatus();*/}

        return (
            <div className="container">


            <div className="row">
            <div className="col-1">
                <div style={{width: '135px',backgroundColor: '#1089ff'}} className="ui visible sidebar inverted vertical menu">
                <h1 className="welcome" style={{paddingTop: '3%', fontSize: '2.1rem', color: 'black'}}> Eduform </h1>
                <hr style={{backgroundColor: '#1089ff', marginBottom: '7%'}} />
                <div style={{backgroundColor: 'white',paddingLeft: '15%', paddingRight: '15%'}}>
                    <img style={{width: '65px', height: '65px', margin: 'auto', marginBottom: '3%', marginTop: '3%'}} className="rounded-circle" src={Personal} />
                </div>

                <Link to='./admin-verify-user'>
                    <a style={{marginTop: '15px',paddingBottom: '10px'}} className="item">
                    <i style={{fontSize: '1.5rem', color:'#febf63'}} className="fas fa-user-check"></i>
                    <h3 style={{marginTop: '2px',marginBottom: '0px',color: 'black'}}> Verify Users </h3>
                    </a>
                </Link>
                <Link to='./admin-new-course'>
                    <a style={{paddingBottom: '10px'}} className="item">
                    <i style={{fontSize: '1.5rem', color:'#febf63'}} className="fa fa-address-card"></i>
                    <h3 style={{marginTop: '2px',color: 'black',marginBottom: '0px'}}> Add Courses </h3>
                    </a>
                </Link>
                <Link to='./admin-user-details'>
                    <a style={{paddingBottom: '10px'}} className="item">
                    <i style={{fontSize: '1.5rem', color:'#febf63'}} className="fas fa-users"></i>
                    <h3 style={{marginTop: '2px',color: 'black',marginBottom: '0px'}}> User Details </h3>
                    </a>
                </Link>
                <Link to='./admin-course-details'>
                    <a style={{paddingBottom: '10px'}} className="item">
                    <i style={{fontSize: '1.5rem', color:'#febf63'}} className="fas fa-folder-open"></i>
                    <h3 style={{marginTop: '2px',color: 'black',marginBottom: '0px'}}> Course Details </h3>
                    </a>
                </Link>
            
                    <a onClick={this.logUserOut} style={{fontSize: '1.5rem', color:'#febf63'}} className="item">
                    <h3 style={{marginTop: '2px',color: 'black'}}> Log Out </h3>
                    </a>
         
                </div>
            </div>
            </div>
        </div>


        );
      }
}

export default withRouter(AdminNavBar);
