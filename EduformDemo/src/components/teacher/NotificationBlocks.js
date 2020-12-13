import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class NotificationBlocks extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      theCourse : this.props.whichCourse,
     announcements = []
    }
  }

  render(){

    const theNotes = [];
     var i = 0;
     for(i; i < this.state.announcements.length; i++){
       if(this.state.theCourse===this.state.announcements[i].course_idl){
         theNotes.push(
             <a style={{marginBottom: '5px',backgroundColor: '#1089ff'}} href="#" class="list-group-item list-group-item-action list-group-item-primary">
                 <a style={{color: '#febf63'}} class="header">{this.state.announcements[i].course_code}</a>
                 <div style={{color: 'white'}} class="description">{this.state.announcements[i].ano_text}</div>
                 <p style={{color: '#febf63'}}> <b> {this.state.announcements[i].ano_date} </b> </p>
             </a>
          );
        }
     }

    return(

        <div class="list-group">
          {theNotes}
        </div>

    );
  }
}

export default NotificationBlocks;
