import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from './TeacherNavigation';
import TeacherWheel from '../teacher/TeacherWheel.js';
import Announcements from '../teacher/TeacherBasedAnnouncements.js';
import Assignments from './FilteredAssignments.js';

import CourseProfile from '../.././utils/CourseProfile';

const writeJsonFile = require('write-json-file');


function loadAssignmentJSONFile(jsonLoadObject){
    
    writeJsonFile('../../data/assignmentInfo.json', jsonLoadObject);

        
}




class GenericCourse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newAnnouncement: {},
            newAssignment: {}
        }

        this.postTeacherCourseAnnouncement = this.postTeacherCourseAnnouncement.bind(this)
        this.postTeacherCourseAssignment = this.postTeacherCourseAssignment.bind(this);
        this.saveAssignmentInfoJSON = this.saveAssignmentInfoJSON.bind(this);
    }

    saveAssignmentInfoJSON = (saveData) => {

    
        window.localStorage.setItem(
            'assignmentJson',
            saveData
        )

    }

    async postTeacherCourseAssignment(event){
        event.preventDefault();
        
        let courseCode = document.getElementById("announceCourseCode").value;
        let assignmentName = document.getElementById("assignmentName").value;
        let assignmentMaxPoints = document.getElementById("assignmentMaxPoints").value;
        let assignmentDueDate = document.getElementById("assignmentDueDate").value;
        let assignmentFile = document.getElementById("assignmentFile").value;

        /*
        if (!courseCode|| !assignmentName || !assignmentMaxPoints || !assignmentDueDate || !assignmentFile){
            alert("Complete the form!");
            return 
        }
        */

        this.state.newAssignment.courseCode = courseCode;
        this.state.newAssignment.assignmentName = assignmentName;
        this.state.newAssignment.assignmentMaxPoints = assignmentMaxPoints;
        this.state.newAssignment.assignmentDueDate = assignmentDueDate;
        this.state.newAssignment.userEmail = 'shubham@iu.edu';

        this.saveAssignmentInfoJSON(this.state.newAssignment);

        //const jsonFile = "../../data/assignmentInfo.json";
        //writeJsonFile(jsonFile,this.state.newAssignment).catch(err => console.log(err));


        const formData = new FormData();

        formData.append('file', assignmentFile);
        formData.append('uploadFile', this.state.newAssignment);

        try{
            const response = await fetch('/teacher/uploadAssignment', {
                method: 'POST',
                'content-type': 'multipart/form-data',
                body: formData
            })
            .then(res => res.text())
            .then(text => {

                if (text === "SUCCESS!"){
                    this.setState({
                        newAssignment: {}
                    });
                    alert("Assignment created succesfully!");

                    document.getElementById("makeAssignment").reset();
                    

                } else{
                    alert(text);
                }
                
            });

        } catch (error){
            alert(error);
        }
        
    }

    async postTeacherCourseAnnouncement(event){
        event.preventDefault();

        let courseCode = document.getElementById("announceCourseCode").value;
        let announceText = document.getElementById("announceText").value;

        if (courseCode === '' || announceText === ''){
            alert("Complete the form!");
            return 
        }

        this.state.newAnnouncement.courseCode = courseCode;
        this.state.newAnnouncement.announcementText = announceText;

        try{
            const response = await fetch('/teacher/makeAnnouncement/' + 'shubham@iu.edu', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(this.state.newAnnouncement)
            })
            .then(res => res.text())
            .then(text => {

                if (text === "SUCCESS!"){
                    this.setState({
                        newAnnouncement: {}
                    });
                    alert("Announcement created succesfully!");

                    document.getElementById("makeAnnouncement").reset();
                    

                } else{
                    alert(text);
                }
                
            });

        } catch (error){
            alert(error);
        }
    }


    render() {

        let code = this.props.match.params.courseCode;

        if (!code) {
            return this.props.history.push('/teacher-courses');
        } else {
            //this.state.currentCourseCode = code;
        }


        let teacherCourse = CourseProfile.getCourseProfile();

        const courseInfo = [];

        let i = 0;
        for (i; i < teacherCourse.length; i++) {
            if (teacherCourse[i].courseCode === code) {
                courseInfo.push(
                    <div style={{ textAlign: 'left' }} className="col-md-10 col-sm-12">
                        <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                        <h1 className="teachWords" style={{ fontSize: '2.4rem' }}> {teacherCourse[i].courseCode} - {teacherCourse[i].courseName}</h1>
                        <p style={{ color: 'white' }}> {teacherCourse[i].courseDescription}</p>
                        <div className="btn-group dropright">
                            <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b style={{ fontSize: '1.15rem' }}>Make an Announcement</b>
                            </button>
                            <div className="dropdown-menu">
                                <form style={{ width: '500px', height: '300px' }} class="px-4 py-3" id="makeAnnouncement" onSubmit={this.postTeacherCourseAnnouncement} noValidate>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                        <input class="form-control" id="announceCourseCode" value={code} type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormPassword1"><b>Announcement</b></label>
                                        <textarea style={{ height: '125px' }} class="form-control" id="announceText"aria-label="With textarea"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                        <div style={{ marginLeft: '30px' }} className="btn-group dropright">
                            <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b style={{ fontSize: '1.15rem' }}>Create an Assignment</b>
                            </button>
                            <div className="dropdown-menu">
                                <form style={{ width: '650px', height: '450px' }} class="px-4 py-3" id="makeAssignment" onSubmit={this.postTeacherCourseAssignment} noValidate>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                        <input class="form-control" id="assignmentCourseCode" value={code} type="text" required />
                                        <option value={teacherCourse[i].courseCode} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Assignment Name </b></label>
                                        <input type="text" class="form-control" id="assignmentName" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Max Points </b></label>
                                        <input type="text" class="form-control" id="assignmentMaxPoints" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Due Date </b></label>
                                        <input type="text" class="form-control" id="assignmentDueDate" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormPassword1"><b>File</b></label>
                                        <input type="file" class="form-control" id="assignmentFile" placeholder="" />
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                        <hr style={{ marginBottom: '30px' }} />
                    </div>
                );
            }

        }


        return (
            <div className="backGroundTeach">
                <div style={{ padding: '0 10px 0px 125px' }} className="container">
                    <div style={{ marginTop: '10px' }} className="row">
                        <div className="col-md-1 col-sm-2"></div>
                        <div className="col-md-11 col-sm-10">
                            {courseInfo}
                        </div>

                    </div>
                    <div style={{ marginTop: '10px' }} className="row">
                        <div className="col-md-1 col-sm-2"></div>
                        <div style={{ marginBottom: '30px', paddingLeft: '28px' }} className="col-md-6 col-sm-10">

                            <TeacherWheel currentClass={code} />
                        </div>
                        <div className="col-md-3 col-sm-10">
                            <h1 className="teachWords" style={{ fontSize: '1.8rem' }}> Announcements</h1>
                            <hr />
                            <Announcements currentClass={code} />
                            <h1 className="teachWords" style={{ fontSize: '1.8rem' }}> Assignments</h1>
                            <hr />
                            <Assignments theClass={code} />
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
