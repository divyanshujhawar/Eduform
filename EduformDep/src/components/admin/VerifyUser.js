import React, { Component } from "react";
import { Row, Column } from 'react-foundation';
import AdminNavBar from './AdminNavBar.js';
import UserCard from './UserCard.js';


class VerifyUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unverifiedUsers: []
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
                <div className="userCardColumn">
                    <Column sm="4">
                        <UserCard key={personalbar.id} verify={this.verify.bind(this)} user={user} />
                    </Column>
                </div>
            )
        })
        return (
            <div className="backGroundSAT">
                <div >
                    <AdminNavBar />
                </div>

                <div className="userCardComponent" style={{marginTop: '3%'}}>
                    <Row>
                        {userCards}
                    </Row>

                </div>
            </div>
        );
    }
};

export default VerifyUser;
