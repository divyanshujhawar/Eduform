import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import VerifyUser from "./VerifyUser";

class UserCard extends Component{

    constructor(props){
        super(props);

    }


    render(){
        let {id, firstName, lastName, email} = this.props.user;
        let {verify} = this.props;
        return (
            <div className="user-card">
                <Card width="100%"> 
                    <CardBody>
                        <CardTitle>{id}</CardTitle>
                        <CardTitle>{firstName}</CardTitle>
                        <CardTitle>{lastName}</CardTitle>
                        <CardTitle>{email}</CardTitle>
                        <Button color="danger" onClick={() => this.props.verify(id)}>Add User</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default UserCard;