import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Wheel from '../student/OptionWheel.js';
import Announcements from '../student/ClassBasedAnnouncements.js';
import Assignments from '../student/FilteredAssignments.js';
import Bar from './StudentNavigation.js';


import CourseProfile from '../.././utils/CourseProfile';

const courseInfo = [];

class GenericCourse extends React.Component {

    constructor(props) {
        super(props);

        var presetForNav = false;
        var defVal = 30;

        if (this.props.toggleState) {
            presetForNav = this.props.toggleState;
            if (presetForNav === true) {
                defVal = 175;

            }
            else {
                defVal = 30;

            }
        }
        else {
            presetForNav = true;
            defVal = 175;

        }
        this.state = {

            currentCourseCode: '',

            studentCourse: [],

            displayNav: presetForNav,
            itemPad: defVal,


        }
        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);

    }


    displayer() {

        if (this.state.displayNav === true) {

            return (<Bar thetog={this.state.displayNav} />);
        }
        else {
            return <p></p>;
        }
    }

    bar() {
        this.setState({ displayNav: !this.state.displayNav });
        if (this.state.itemPad === 30) {
            this.setState({ itemPad: 175 });
        }
        else {
            this.setState({ itemPad: 30 });
        }

    }


    render() {

       let code = this.props.match.params.courseCode;

       if (!code) {
           return this.props.history.push('/student-courses');
       } else {
           this.state.currentCourseCode = code;
       }


       this.state.studentCourse = CourseProfile.getCourseProfile();



        const courseInfo = [];

        let i = 0;
        for (i; i < this.state.studentCourse.length; i++) {
            if (this.state.studentCourse[i].courseCode === this.state.currentCourseCode) {
                courseInfo.push(
                    <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-12">
                        <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                        <h1 className="teachWords" style={{ fontSize: '2.4rem' }}>
                            <Link to={{
                                pathname: '/student-courses', state: {
                                    currentClass: this.state.myCourse
                                }
                            }} > <i style={{ color: '#febf63', marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>
                            {this.state.studentCourse[i].courseCode} - {this.state.studentCourse[i].courseName}</h1>
                        <p style={{ color: 'white' }}> {this.state.studentCourse[i].course_description}</p>
                        <hr style={{ marginBottom: '30px' }} />
                    </div>
                );
            }

        }


        return (
            <div className="backgroundGenericCourse">
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: '#febf63' }} className="row dashItems">

                        <h1 className="welcome" style={{ margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: 'black', marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                        Eduform</h1>

                    </div>
                    <div style={{ marginTop: '30px' }} className="row">

                        <div className="col-md-12 col-sm-12">
                            {courseInfo}
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }} className="row">

                        <div style={{ marginBottom: '30px', paddingLeft: '28px' }} className="col-md-5 col-sm-12">
                            <Wheel currentClass={code} theTog={this.state.displayNav} />
                        </div>

                        <div className="col-md-3 col-sm-0"></div>
                        <div style={{ textAlign: 'left' }} className="col-md-4 col-sm-12">
                            <h1 className="studentWords" style={{ fontSize: '2.3rem' }}> Announcements</h1>
                            <hr />
                            <Announcements currentClass={code} />
                            <h1 className="studentWords" style={{ fontSize: '2.3rem' }}> Assignments</h1>
                            <hr />
                            <Assignments theClass={code} />
                        </div>

                    </div>
                    {this.displayer()}
                </div>

            </div>
        );
    }
}

export default withRouter(GenericCourse);
