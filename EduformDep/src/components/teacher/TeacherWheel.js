import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import AssignmentGen from '../courses/GenericAssignments.js';

class OptionWheel extends React.Component {

    constructor(props){
      super(props);

      var courseOne = this.props.currentClass;

      this.state = {
        currentCourse : courseOne
      }
    }

    render(){
      return(

        <div style={{width: '300px'}} class="ui vertical menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search Course Material"/>
              <i class="search icon"></i>
            </div>
          </div>
          <Link to={{pathname:'/courseAssignments093028',assignstate : {
            theCourse : this.state.currentCourse
          }}}> <a style={{borderBottom: 'solid',borderColor: '#1089ff',backgroundColor: '#febf63', width: '300px', height: '50px'}} class="item">
              <p className="studentWords" style={{color: 'black',fontSize: '1.2rem'}}><b>View Assignments </b></p>
              </a>
          </Link>
          <Link to={{pathname:'/coursegrades827398',gradestate : {
            currentClassGrade : this.state.currentCourse
          }}}> <a style={{borderBottom: 'solid',borderColor: '#1089ff',backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
              <p className="studentWords"style={{color: 'black',fontSize: '1.2rem'}}><b>View Student Grades</b></p>
              </a>
          </Link>
          <Link to='/course102012930'><a style={{borderBottom: 'solid',borderColor: '#1089ff',backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
             <p className="studentWords" style={{color: 'black',fontSize: '1.2rem'}}><b>Chat</b></p>
             </a>
          </Link>

          <Link to={{pathname:'/coursenotifications930293',notestate : {
           currentClassNotes : this.state.currentCourse
           }}}>
            <a style={{backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
              <p className="studentWords" style={{color: 'black',fontSize: '1.2rem'}}><b>View Notifications</b></p>
                </a>
          </Link>

      </div>


      );
    }
}

export default OptionWheel;
