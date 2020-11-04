import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/StudentNavigation';
import Wheel from '../student/OptionWheel.js';
import Announcements from '../student/ClassBasedAnnouncements.js';
import queryString from 'query-string';


import CourseProfile from '../.././utils/CourseProfile';

const courseInfo = [];

class GenericCourse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            currentCourseCode: '',

            studentCourse: [],
            
            student_course: [
                {
                    student_id: 2,
                    course_id: 2,
                    course_code: 'CS1112',
                    course_name: 'Machine Learning',
                    course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
                },
                {
                    student_id: 2,
                    course_id: 4,
                    course_code: 'CS1113',
                    course_name: 'Big Data',
                    course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
                },
                {
                    student_id: 2,
                    course_id: 23,
                    course_code: 'CS1009',
                    course_name: 'Computer Engineering',
                    course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
                },
                {
                    student_id: 2,
                    course_id: 11,
                    course_code: 'CS1006',
                    course_name: 'Software Engineering I',
                    course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
                },
                {
                    student_id: 2,
                    course_id: 12,
                    course_code: 'CS2145',
                    course_name: 'Database Concepts',
                    course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
                },
                {
                    student_id: 2,
                    course_id: 6,
                    course_code: 'CS1111',
                    course_name: 'Intro to Computer Science',
                    course_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'
                },

            ],

        }

        this.getCourseCode = this.getCourseCode.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.getCourseData = this.getCourseData.bind(this);
    }

    getCourseCode() {
        let code = this.props.match.params.courseCode;
        if (!code) {
            return this.props.history.push('/student-courses');
        } else {
            this.state.currentCourseCode = code;
        }
    }

    getCourseData(){
        this.setState({
            studentCourse: CourseProfile.getCourseProfile()
        });

        console.log("Actual Data: ",CourseProfile.getCourseProfile());
    }

    componentDidMount(){
        this.getCourseData();
        this.getCourseCode();
        this.fetchData();
    }

    componentWillUnmount(){

    }


    fetchData(){
        let i = 0;
        for (i; i < this.state.studentCourse.length; i++) {
            if (this.state.studentCourse[i].course_code === this.state.currentCourseCode) {
                courseInfo.push(
                    <div style={{ textAlign: 'left' }} className="col-md-10 col-sm-12">
                        <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                        <h1 className="studentWords" style={{ fontSize: '2.4rem' }}> {this.state.studentCourse[i].course_code} - {this.state.studentCourse[i].course_name}</h1>
                        <p> {this.state.studentCourse[i].course_description}</p>
                        <hr style={{ marginBottom: '30px' }} />
                    </div>
                );

                break;
            }

            

        }
    }

    render() {

        console.log('CurrentCode: ',this.state.currentCourseCode);

        console.log('CurrentCourse: ', this.state.studentCourse);

        return (
            <div className="backGroundSAT">
                <div className="container">
                    <div style={{ marginTop: '10px' }} className="row">
                        <div className="col-md-1 col-sm-2"></div>
                        <div className="col-md-11 col-sm-10">
                            {courseInfo}
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }} className="row">
                        <div className="col-md-1 col-sm-2"></div>
                        <div style={{ paddingLeft: '28px' }} className="col-md-6 col-sm-10">
                            <Wheel currentClass={this.state.getVal} />
                        </div>
                        <div className="col-md-3 col-sm-10">
                            <h1 className="studentWords" style={{ fontSize: '2.4rem' }}> Announcements</h1>
                            <hr />
                            <Announcements currentClass={this.state.getVal} />
                        </div>
                        <div className="col-md-2 col-sm-0">

                        </div>
                    </div>
                    <NavBar />
                </div>

            </div>
        );
    }
}

export default withRouter(GenericCourse);
