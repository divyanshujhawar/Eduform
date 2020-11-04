import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import Personal from '../../assets/cat.jpg';

import UserProfile from '../.././utils/UserProfile';


const userProfile = {};


class StudentNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            userProfile:{}
            
        };

        this.LogUserOut = this.LogUserOut.bind(this);
        this.CheckUserStatus = this.CheckUserStatus.bind(this);
    }

    LogUserOut() {

        this.state.userProfile.email = '';

        UserProfile.setEmail(this.state.userProfile);

        console.log(UserProfile.getEmail());

        return this.props.history.push('/sign-in');

    }


    CheckUserStatus() {

        const UserEmail = UserProfile.getEmail();

        if (UserEmail === "") {
            return this.props.history.push('/sign-in');
        }
    }



    render() {

        this.CheckUserStatus();

        return (
            <div style={{ marginTop: '6%' }} class="row">
                <div className="col-1">
                    <div style={{ width: '131px', backgroundColor: '#1089ff' }} className="ui visible sidebar inverted vertical menu">
                        <h1 className="welcome" style={{ paddingTop: '3%', fontSize: '2.1rem', color: 'black' }}> Eduform </h1>
                        <hr style={{ backgroundColor: '#febf63', marginBottom: '7%' }} />
                        <div style={{ backgroundColor: 'white', paddingLeft: '15%', paddingRight: '15%' }}>
                            <img style={{ width: '65px', height: '65px', margin: 'auto', marginBottom: '3%', marginTop: '3%' }} className="rounded-circle" src={Personal} />
                        </div>

                        <Link to='/student-home'>
                            <a style={{ marginTop: '10px', paddingBottom: '10px' }} className="item">
                                <i style={{ fontSize: '1.5rem', color: '#febf63' }} className="fas fa-home"></i>
                                <h3 style={{ marginTop: '2px', marginBottom: '0px', color: 'black' }}> Home </h3>
                            </a>
                        </Link>
                        <Link to='/student-courses'>
                            <a style={{ paddingBottom: '10px' }} className="item">
                                <i style={{ fontSize: '1.5rem', color: '#febf63' }} className="fas fa-book"></i>
                                <h3 style={{ marginTop: '2px', marginBottom: '0px', color: 'black' }}> Courses </h3>
                            </a>
                        </Link>
                        <Link to='/student-chat'>
                            <a style={{ paddingBottom: '10px' }} className="item">
                                <i style={{ fontSize: '1.5rem', color: '#febf63' }} className="far fa-comment"></i>
                                <h3 style={{ marginTop: '2px', color: 'black', marginBottom: '0px' }}> Chat </h3>
                            </a>
                        </Link>
                        <Link to='/student-calendar'>
                            <a style={{ paddingBottom: '10px' }} className="item">
                                <i style={{ marginBottom: '0', fontSize: '1.5rem', color: '#febf63' }} className="far fa-calendar-alt"></i>
                                <h3 style={{ marginTop: '2px', color: 'black', marginBottom: '0px' }}> Calendar </h3>
                            </a>
                        </Link>
                        <Link to='/student-settings'>
                            <a style={{ paddingBottom: '10px' }} style={{ fontSize: '1.5rem', color: '#febf63' }} className="item">
                                <i class="fas fa-cogs"></i>
                                <h3 style={{ marginTop: '2px', color: 'black', marginBottom: '0px' }}> Settings </h3>
                            </a>
                        </Link>
                        <div onClick={this.LogUserOut}>
                            <a style={{ position: 'absolute', bottom: '0' }} className="item">
                                <h3 style={{ marginTop: '2px', color: 'black' }}> Log Out </h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(StudentNavigation);
