import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/StudentNavigation';
import Wheel from '../student/OptionWheel.js';

class GenericCourse extends React.Component{

  constructor(props){
    super(props);

    const {currentClass} = this.props.location.state;
    this.state = {

        getVal : currentClass,
        student_course: [
          {
            student_id: 2,
            course_id: 2,
            course_code: 'CS1112',
            course_name: 'Machine Learning',
            course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
          },
          {
            student_id: 2,
            course_id: 4,
            course_code: 'CS1113',
            course_name: 'Big Data',
            course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
          },
          {
            student_id: 2,
            course_id: 23,
            course_code: 'CS1009',
            course_name: 'Computer Engineering',
            course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
          },
          {
            student_id: 2,
            course_id: 11,
            course_code: 'CS1006',
            course_name: 'Software Engineering I',
            course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
          },
          {
            student_id: 2,
            course_id: 12,
            course_code: 'CS2145',
            course_name: 'Database Concepts',
            course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
          },
          {
            student_id: 2,
            course_id: 6,
            course_code: 'CS1111',
            course_name: 'Intro to Computer Science',
            course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
          },

        ],

    }
  }

  render(){

    const courseInfo = [];

    let i = 0;
    for(i; i < this.state.student_course.length; i++)
    {
        if(this.state.student_course[i].course_id === this.state.getVal){
          courseInfo.push(
            <div style={{textAlign: 'left'}} className="col-md-10 col-sm-12">
              <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>
              <h1 className="studentWords" style={{fontSize: '2.4rem'}}> {this.state.student_course[i].course_code} - {this.state.student_course[i].course_name}</h1>
              <p> {this.state.student_course[i].course_description}</p>
              <hr style={{marginBottom: '30px'}}/>
            </div>
          );
        }

   }


    return(
      <div className="backGroundSAT">
           <div className="container">
             <div style={{marginTop:'10px'}} className="row">
                 <div className="col-md-0 col-sm-2"></div>
                 <div className="col-md-12 col-sm-10">
                      {courseInfo}
                 </div>
             </div>
             <div style={{marginTop:'10px'}} className="row">
                 <div className="col-md-0 col-sm-2"></div>
                 <div style={{align: 'left'}} className="col-md-8 col-sm-10">
            
                 </div>
                 <div className="col-md-4 col-sm-10">

                 </div>
             </div>
             <NavBar />
          </div>

        </div>
    );
  }
}

export default GenericCourse;
