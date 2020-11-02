import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Course from './GenericCourse.js';


class CourseBlocks extends React.Component{

  constructor(props){
    super(props);

    this.state = {

        student_course: [
          {
            student_id: 2,
            course_id: 2,
            course_code: 'CS1112',
            course_name: 'Machine Learning'
          },
          {
            student_id: 2,
            course_id: 4,
            course_code: 'CS1113',
            course_name: 'Big Data'
          },
          {
            student_id: 2,
            course_id: 23,
            course_code: 'CS1009',
            course_name: 'Computer Engineering'
          },
          {
            student_id: 2,
            course_id: 11,
            course_code: 'CS1006',
            course_name: 'Software Engineering I'
          },
          {
            student_id: 2,
            course_id: 12,
            course_code: 'CS2145',
            course_name: 'Database Concepts'
          },
          {
            student_id: 2,
            course_id: 6,
            course_code: 'CS1111',
            course_name: 'Intro to Computer Science'
          },

        ]
    }
  }
      render(){
        const courseItems = [];

        let i = 0;
        for(i; i < this.state.student_course.length; i++)
        {
            courseItems.push(
              <div style={{paddingLeft: '40px',marginBottom: "20px"}} className="col-md-4 col-sm-10">
              <Link to={{pathname:'/course102012930',state : {
                currentClass : this.state.student_course[i].course_id
              }}}>
                <a style={{backgroundColor: '#1089ff'}} class="ui card">
                  <div class="content">
                    <div style={{color: '#febf63'}} class="header">{this.state.student_course[i].course_name}</div>
                    <div class="meta">
                      <span style={{color: 'white'}} class="category">{this.state.student_course[i].course_code}</span>
                    </div>
                    <div class="description">
                      <p style={{color: '#febf63'}}>Fall 2020</p>
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

  export default CourseBlocks;
