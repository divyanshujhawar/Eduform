import React, { Component } from "react";
import { Row, Column } from 'react-foundation';
import AdminNavBar from './AdminNavBar.js';
import UserCard from './UserCard.js';
import Logo from '../.././assets/edLogo.png';


class VerifyUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unverifiedUsers: [{"firstName" : "Bryant", "lastName": "Hunsberger", "email" : "bjhunsbe@iu.edu", "r": "a"},
        {"firstName" : "Bryant", "lastName": "Hunsberger", "email" : "bjhunsbe@iu.edu", "r": "a"},
        {"firstName" : "Bryant", "lastName": "Hunsberger", "email" : "bjhunsbe@iu.edu", "r": "a"},
        {"firstName" : "Bryant", "lastName": "Hunsberger", "email" : "bjhunsbe@iu.edu", "r": "a"},]
        }

        this.getUnverifiedUsers = this.getUnverifiedUsers.bind(this);
    }

    componentDidMount(){
        this.getUnverifiedUsers();
    }


    verify(email, role) {
        console.log(email, role);

        var isVerified = true;
        var userUpdateRequest = {
            role: role,
            isVerified: isVerified
        };

        try {
            const response = fetch('admin/updateUser/' + email, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(userUpdateRequest)
            })
                .then(res => res.text())
                .then(text => {

                    alert(text);
                    this.getUnverifiedUsers();
                    console.log(this.state.unverifiedUsers);

                });

        } catch (error) {
            alert(error);
        }
    }

    getUnverifiedUsers() {

        try {
            const response = fetch('/admin/getUnverifiedUsers', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                    this.setState({
                        unverifiedUsers: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }

    }

    render() {

        let userCards = this.state.unverifiedUsers.map(user => {
            return (
                <div style={{marginBottom: '5px'}} className="flex-row">
                 
                        <UserCard key={personalbar.id} verify={this.verify.bind(this)} user={user} />
                 
                </div>
            )
        })
        return (
            <div className="adminBackground">
                    <div style={{paddingRight: '5%',paddingLeft: '200px'}} className="flex-container">
                        <div style={{marginBottom: '20px',paddingTop: '20px'}} className="row">
                            <div style={{textAlign: 'left' }} className="flex-col-md-8 flex-col-sm-12">
                                <img style={{backgroundColor: '#1089ff',width: '70px', height: '70px', marginTop: '2.5%' }} src={Logo} alt="edLogo" />
                                <h1 className="adminWordHead" style={{fontSize: '2.6rem' }}> Verify Users</h1>
                                <hr style={{backgroundColor: 'black',marginBottom: '20px' }} />
                           
                            </div>
                        </div>

                        {userCards}
                        <div>
                            <AdminNavBar />
                        </div>

                        
              
               
                </div>
            </div>
        );
    }
}

export default VerifyUser;
