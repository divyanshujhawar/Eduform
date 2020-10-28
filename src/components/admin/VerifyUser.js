import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import { Row, Column, Container } from 'react-foundation';
import AdminNavBar from './AdminNavBar.js';
import UserCard from './UserCard.js';


class VerifyUser extends Component {

  constructor(props){
    super(props);
    this.state ={
      user: [
        {
          id: 1,
          firstName: 'Divyanshu',
          lastName: 'J',
          email: 'divyanshu@iu.edu'
        },
        {
          id: 2,
          firstName: 'Bryant',
          lastName: 'H',
          email: 'bryant@iu.edu'
        },
        {
          id: 3,
          firstName: 'Shubham',
          lastName: 'G',
          email: 'shubham@iu.edu'
        }
      ]
    }
  }
  
  verify(id){
    this.setState({user: this.state.user.filter(user => user.id !== id)});
  }

  render() {
    let userCards = this.state.user.map(user => {
      return(
        <div className="userCardColumn">
        <Column sm="4">
          <UserCard key={personalbar.id} verify={this.verify.bind(this)} user={user}/>
        </Column>
        </div>
      )
    })
    return(
      <div className="backGroundSAT">
        <div >
          <AdminNavBar/>
        </div>

        <div className="userCardComponent">
            <Row>
              {userCards}
            </Row>

        </div>
      </div>
    );
  }
};

export default VerifyUser;