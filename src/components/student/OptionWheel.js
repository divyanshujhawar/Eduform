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
          <Link to={{pathname:'/course102012930',bstate : {
            currentClass1 : this.state.currentCourse
          }}}> <a style={{backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
            <p className="studentWords" style={{color: '#1089ff',fontSize: '1.4rem'}}><b>Home</b></p>
              </a>
          </Link>
          <Link to={{pathname:'/coursegrades827398',astate : {
            currentClass2 : this.state.currentCourse
          }}}> <a style={{backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
              <p className="studentWords"style={{color: '#1089ff',fontSize: '1.4rem'}}><b>Grades</b></p>
              </a>
          </Link>
          <Link to={{pathname:'/courseAssignments093028',assignstate : {
            theCourse : this.state.currentCourse
          }}}> <a style={{backgroundColor: '#febf63', width: '300px', height: '50px'}} class="item">
              <p className="studentWords" style={{color: '#1089ff',fontSize: '1.4rem'}}><b>Assignments </b></p>
              </a>
          </Link>
          <Link to={{pathname:'/coursechat28738',cstate : {
            currentClass3 : this.state.currentCourse
          }}}> <a style={{backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
             <p className="studentWords" style={{color: '#1089ff',fontSize: '1.4rem'}}><b>Chat</b></p>
             </a>
          </Link>

          <Link to={{pathname:'/coursesettings930293',dstate : {
           currentClass4 : this.state.currentCourse
           }}}>
            <a style={{backgroundColor: '#febf63',width: '300px', height: '50px'}} class="item">
              <p className="studentWords" style={{color: '#1089ff',fontSize: '1.4rem'}}><b>Settings</b></p>
                </a>
          </Link>

      </div>


      );
    }
}

export default OptionWheel;
