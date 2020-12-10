import React, { Component } from "react";
import {
    Card, CardBody, CardTitle, Button
  } from 'reactstrap';

class UserCard extends Component{

    constructor(props){
        super(props);

    }


    render(){
        let {email, firstName, lastName, r} = this.props.user;

        let role = '';

        if(r==='a'){
            role = 'admin';
        } else if(role === 't'){
            role = 'teacher';
        } else{
            role = 'student';
        }

        return (
            <div style={{paddingTop: '8%'}}>
                <div style={{backgroundColor: '#1089ff'}} class="ui card">
                <div class="content">
                    <Card width="100%">
                        <CardBody style={{backgroundColor: '#1089ff'}}>
                            <CardTitle style={{color: 'white'}}>{email}</CardTitle>
                            <CardTitle style={{color: 'white'}}>{firstName} {lastName}</CardTitle>
                            <div style ={{alignSelf: 'center', backgroundColor: '#1089ff'}}>
                                <select name="role" id="role" name="role" style={{fontSize: '.9rem', height: '30px', paddingTop: '2%'}}>
                                    <option>admin</option>
                                    <option>teacher</option>
                                    <option>student</option>
                                    <option selected="selected">{role}</option>
                                </select>
                            </div>
                            <Button style={{backgroundColor: '#febf63', color: 'black', marginTop: '10px'}} onClick={() => this.props.verify(email,document.getElementById("role").value)}>Verify User</Button>
                        </CardBody>
                    </Card>
                </div>
                </div>


            </div>
        )
    }
}


export default UserCard;
