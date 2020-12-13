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

        <div class="ui four item menu">
     
      
          <Link className="item" style={{border: 'solid', borderColor: '#febf63',backgroundColor: 'white'}} to={{
                    pathname: '/teacher-course/' + this.state.currentCourse + '/assignments', assignstate: {
                        theCourse: this.state.currentCourse
                    }, toggleState: this.state.toggler
                }}> 
              <p className="studentWords" style={{color: 'black',fontSize: '1.2rem'}}><b>View Assignments </b></p>
             
          </Link>
       
          <Link style={{border: 'solid', borderColor: '#febf63',backgroundColor: 'white'}} className="item" to={{
                    pathname: '/teacher-course/' + this.state.currentCourse + '/grades', gradestate: {
                        currentClassGrade: this.state.currentCourse
                    }, toggleState: this.state.toggler
                }}>
              <p className="studentWords"style={{color: 'black',fontSize: '1.2rem'}}><b>View Student Grades</b></p>
             
          </Link>
          <Link style={{border: 'solid', borderColor: '#febf63',backgroundColor: 'white'}} className="item" to={{
                    pathname: '/teacher-course/' + this.state.currentCourse + '/chat', gradestate: {
                        currentClassGrade: this.state.currentCourse
                    }, toggleState: this.state.toggler
                }}>
             <p className="studentWords" style={{color: 'black',fontSize: '1.2rem'}}><b>View Chat</b></p>

          </Link>

          <Link style={{border: 'solid', borderColor: '#febf63',backgroundColor: 'white'}} className="item" to={{
                    pathname: '/teacher-course/' + this.state.currentCourse + '/announcements', notestate: {
                        currentClassNotes: this.state.currentCourse
                    }, toggleState: this.state.toggler
                }}>
     
              <p className="studentWords" style={{color: 'black',fontSize: '1.2rem'}}><b>View Notifications</b></p>
              
          </Link>

      </div>


      );
    }
}

export default OptionWheel;
