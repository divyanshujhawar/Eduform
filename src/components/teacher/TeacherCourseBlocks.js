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


class TeacherCourseBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {
        const courseItems = [];

        let teacherCourses = CourseProfile.getCourseProfile();

        let i = 0;
        for (i; i < teacherCourses.length; i++) {
            courseItems.push(
                <div style={{ paddingLeft: '40px', marginBottom: "20px" }} className="col-md-4 col-sm-10">
                    <Link to={{
                        pathname: '/teacher-course/' + teacherCourses[i].courseCode, state: {
                            currentClass: teacherCourses[i].courseCode
                        }
                    }}>
                        <a style={{ backgroundColor: '#febf63' }} class="ui card">
                            <div class="content">
                                <div style={{ color: '#1089ff' }} class="header">{teacherCourses[i].courseName}</div>
                                <div class="meta">
                                    <span style={{ color: 'black' }} class="category">{teacherCourses[i].courseCode}</span>
                                </div>
                                <div class="description">
                                    <p style={{ color: '#1089ff' }}>Fall 2020</p>
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

export default withRouter(TeacherCourseBlocks);
