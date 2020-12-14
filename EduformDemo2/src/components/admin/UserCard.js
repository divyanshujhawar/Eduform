import React, { Component } from "react";
import {
    Card, CardBody, CardTitle, Button
  } from 'reactstrap';
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';

class UserCard extends Component{

    constructor(props){
        super(props);

    }


    render(){
        let {email, firstName, lastName, role} = this.props.user;

        let UserRole = '';

        if(role==='a'){
            UserRole = 'admin';
        } else if(role === 't'){
            UserRole = 'teacher';
        } else{
            UserRole = 'student';
        }

        return (
                <div style={{height: '60px',width: '1000px',backgroundColor: '#1089ff'}} className="ui card">
                     <div className="content">
                         <div className="row">
                            <div style={{color: 'white',paddingTop: '0px',textAlign:'center'}} className="adminWordHead col-4"><p style={{lineHeight: '2px'}}>
                                {lastName}, {firstName} ({UserRole}) </p> <br style={{marginTop: '0',height: '0'}}/><p style={{lineHeight: '1px',paddingTop: '0',marginTop:'0'}}> <b>{email}</b></p></div>
                            <div className="adminWordHead col-4" style ={{alignSelf: 'center', backgroundColor: '#1089ff'}}>
                                <select name="role" id="role" name="role" style={{width: '100px',fontSize: '1rem', height: '35px', paddingTop: '1%'}}>
                                    <option>admin</option>
                                    <option>teacher</option>
                                    <option>student</option>
                                    <option selected="selected">{UserRole}</option>
                                </select>
                            </div>
                            <div className="col-3">
                        
                                <Button className="adminWordHead btn-success" style={{fontSize: '1rem',color: 'black'}} onClick={() => this.props.verify(email,document.getElementById("role").value)}><b>Verify User </b></Button>
  
                            </div>
                            <div className="col-1">
                        
                                <Button className="btn-danger" style={{fontSize: '1rem',color: 'black'}} onClick={() => this.props.deleteUser(email)}><i style={{fontSize: '1.5rem'}} class="fas fa-times-circle"></i></Button>
  
                            </div>
                        </div>
          
                     </div>
        


            </div>
        );
    }
}


export default UserCard;
