import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import AdminNavBar from './AdminNavBar.js';

import { Row, Column, Container } from 'react-foundation';
import CourseCard from './CourseCard.js';


class CourseDetails extends Component {
  
    constructor(props){
        super(props);
        this.state ={
        courses: [
            {
                cno: 0,
                courseName: 'Software Engineering',
                instructor: 'Teacher1'
            },
            {
                cno: 1,
                courseName: 'Machine Learning',
                instructor: 'Teacher2'
            },
            {
                cno: 2,
                courseName: 'Big Data',
                instructor: 'Teacher2'
            },
            {
                cno: 3,
                courseName: 'Database Management System',
                instructor: 'Teacher3'
            }
          ]
        }
    }

    render() {
        let courseCards = this.state.courses.map(courses => {
        return(
            <div className="courseCardColumn">
            <Column sm="4">
            <CourseCard key={personalbar.id} courses={courses}/>
            </Column>
            </div>
        )
        })
        return(
        <div className="backGroundSAT">
            <div >
            <AdminNavBar/>
            </div>
    
            <div className="courseCardComponent">
                <Row>
                    {courseCards}
                </Row>
    
            </div>
        </div>
        );
    }
    
};

export default CourseDetails;