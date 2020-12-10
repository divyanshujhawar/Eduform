import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Course from './GenericCourse.js';


class TeacherCourseBlocks extends React.Component{

  constructor(props){
    super(props);

    this.state = {

        teacher_course: [
          {
            teacher_id: 2,
            course_id: 2,
            course_code: 'CS1112',
            course_name: 'Machine Learning'
          },
          {
            teacher_id: 2,
            course_id: 4,
            course_code: 'CS1113',
            course_name: 'Big Data'
          },
          {
            teacher_id: 2,
            course_id: 23,
            course_code: 'CS1009',
            course_name: 'Computer Engineering'
          },
        ]
    }
  }
      render(){
        const courseItems = [];

        let i = 0;
        for(i; i < this.state.teacher_course.length; i++)
        {
            courseItems.push(
              <div style={{paddingLeft: '40px',marginBottom: "20px"}} className="col-md-4 col-sm-10">
              <Link to={{pathname:'/course212902',state : {
                currentClass : this.state.teacher_course[i].course_id
              }}}>
                <a style={{backgroundColor: '#febf63'}} class="ui card">
                  <div class="content">
                    <div style={{color: '#1089ff'}} class="header">{this.state.teacher_course[i].course_name}</div>
                    <div class="meta">
                      <span style={{color: 'black'}} class="category">{this.state.teacher_course[i].course_code}</span>
                    </div>
                    <div class="description">
                      <p style={{color: '#1089ff'}}>Fall 2020</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            );
        }


      return(
        <div className="container">
          <div className="row">
            {courseItems}
          </div>
         </div>
      );
    }
  }

  export default TeacherCourseBlocks;
