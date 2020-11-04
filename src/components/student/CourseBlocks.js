import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Course from './GenericCourse.js';

import UserProfile from '../.././utils/UserProfile';
import CourseProfile from '../.././utils/CourseProfile';


class CourseBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            studentCourses: [],

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

        this.getStudentCourses = this.getStudentCourses.bind(this);
    }

    componentDidMount(){
        this.getStudentCourses();
    }

    getStudentCourses(){
        try {
            const response = fetch('/student/getCourses/' + UserProfile.getEmail(), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        studentCourses: jsonData.result
                    });

                    CourseProfile.setCourseProfile(jsonData.result);

                    console.log("Email: ",UserProfile.getEmail());
                    console.log('JSON data: ', jsonData);
                    console.log("1: ", this.state.studentCourses);
                    console.log("2: ", CourseProfile.getCourseProfile());

                });

        } catch (error) {
            alert(error);
        }
    }



    render() {
        const courseItems = [];

        let i = 0;
        for (i; i < this.state.student_course.length; i++) {
            courseItems.push(
                <div style={{ paddingLeft: '40px', marginBottom: "20px" }} className="col-md-4 col-sm-10">
                    <Link to={{
                        pathname: '/course/' + this.state.student_course[i].course_code
                    }}>
                        <a style={{ backgroundColor: '#1089ff' }} class="ui card">
                            <div class="content">
                                <div style={{ color: '#febf63' }} class="header">{this.state.student_course[i].course_name}</div>
                                <div class="meta">
                                    <span style={{ color: 'white' }} class="category">{this.state.student_course[i].course_code}</span>
                                </div>
                                <div class="description">
                                    <p style={{ color: '#febf63' }}>Fall 2020</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            );
        }


        return (
            <div className="container">
                <div className="row">
                    {courseItems}
                </div>
            </div>
        );
    }
}

export default CourseBlocks;
