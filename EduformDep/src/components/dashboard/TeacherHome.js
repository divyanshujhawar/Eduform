import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bootstrap2 from '../../.././node_modules/bootstrap/dist/js/bootstrap.min.js'
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Upcoming from '../teacher/Upcoming.js';
import Announce from '../teacher/TeacherAnnounceBlocks.js';
import NavBar from '../teacher/TeacherNavigation';

import CourseProfile from '../.././utils/CourseProfile';


let teacherCourse = [];

class TeacherHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            teacherCourse: [],
            newAnnouncement: {}
        }

        this.getTeacherCourses = this.getTeacherCourses.bind(this);
        this.postTeacherAnnouncement = this.postTeacherAnnouncement.bind(this);
    }

    

    async postTeacherAnnouncement(event){
        event.preventDefault();

        let courseCode = document.getElementById("announceCourseCode").value;
        let announceText = document.getElementById("announceText").value;

        if (courseCode === '' || announceText === ''){
            alert("Complete the form!");
            return 
        }

        this.state.newAnnouncement.courseCode = courseCode;
        this.state.newAnnouncement.announcementText = announceText;

        console.log(this.state.newAnnouncement);

        try{
            const response = await fetch('/teacher/makeAnnouncement/' + 'shubham@iu.edu', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(this.state.newAnnouncement)
            })
            .then(res => res.json())
            .then(jsonData => {

                console.log("Results: ", jsonData);

                if (jsonData.status === "SUCCESS!"){
                    alert("Announcement created succesfully!");

                    document.getElementById("makeAnnouncement").reset();
                    this.setState({newAnnouncement: {}})
                } else{
                    alert(jsonData.status);
                }
                
                
            });

        } catch (error){
            alert(error);
        }
    }

    getTeacherCourses() {
        try {
            const response = fetch('/teacher/getCourses/' + 'shubham@iu.edu'/*UserProfile.getEmail()*/, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    teacherCourse = jsonData.result;
                    this.setState({teacherCourse: jsonData.result});

                    CourseProfile.setCourseProfile(jsonData.result);

                });

        } catch (error) {
            alert(error);
        }
    }

    componentDidMount(){
        this.getTeacherCourses();

    }

    render() {



        const teacherClassData = [];
        const pastAnnouncements = [];


        var i = 0;
        for (i; i < this.state.teacherCourse.length; i++) {
            pastAnnouncements.push(
                <div class="list-group">
                    <Announce theCourses={this.state.teacherCourse[i].courseCode} />
                </div>
            );
            teacherClassData.push(<option value={this.state.teacherCourse[i].courseCode} />
            );

        }

        return (
            <div className="backGroundTeach">
                <div style={{ padding: '0 50px 0 50px' }} className="container">

                    <div style={{ marginTop: '10px' }} className="row">
                        <div className="col col-md-1 col-sm-2"></div>
                        <div style={{ paddingRight: '20%', textAlign: 'left' }} className="col col-md-8 col-sm-10">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />

                            <h1 className="teachWords" style={{ fontSize: '2.4rem' }}> Assignments Posted</h1>
                            <hr style={{ marginBottom: '30px' }} />
                            <Upcoming />
                        </div>

                        <div style={{ marginTop: '24px' }} className="col col-md-3 col-sm-10">
                            <div className="btn-group dropleft">
                                <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <b style={{ fontSize: '1.15rem' }}>Make an Announcement</b>
                                </button>
                                <div className="dropdown-menu">
                                    <form style={{ width: '500px', height: '300px' }} class="px-4 py-3" id="makeAnnouncement" onSubmit={this.postTeacherAnnouncement} noValidate>
                                        <div class="form-group">
                                            <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                            <input list="theItems" type="text" class="form-control" id="announceCourseCode" placeholder="" />
                                            <datalist id="theItems">
                                                {teacherClassData}
                                            </datalist>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleDropdownFormPassword1"><b>Announcement</b></label>
                                            <textarea style={{ height: '125px' }} id="announceText" class="form-control" aria-label="With textarea"></textarea>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Send</button>
                                    </form>
                                </div>
                            </div>
                            <h1 className="teachWords" style={{ fontSize: '2.4rem' }}> Announcements</h1>
                            <hr />
                            {pastAnnouncements}
                        </div>
                    </div>
                    <hr />
                </div>
                <NavBar />
            </div>
        );
    }
}

export default TeacherHome;
