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
import UserProfile from '../.././utils/UserProfile';
import Mini from '../teacher/TeacherAssignBlocks.js';
import S3 from 'react-aws-s3';


const writeJsonFile = require('write-json-file');


function loadAssignmentJSONFile(jsonLoadObject) {

    writeJsonFile('../../data/assignmentInfo.json', jsonLoadObject);


}




class GenericCourse extends React.Component {

    constructor(props) {
        super(props);

        var separator = null;

        var cssType = 'edu';
        if (this.props.location.colors2) {
            cssType = this.props.location.colors2;
        }
        else {
            cssType = 'edu';
        }
        var presetForNav = false;
        var defVal = 70;
        if (this.props.location.toggleState) {
            presetForNav = this.props.location.toggleState;
            if (presetForNav === true) {
                defVal = 175;
                separator = <div className="col-md-1 col-sm-0"></div>;
            }
            else {
                defVal = 70;
                separator = <div className="col-md-1 col-sm-0"></div>;
            }
        }
        else {
            presetForNav = true;
            defVal = 175;
            separator = <div className="col-md-1 col-sm-0"></div>;
        }

        const batVals = ["batbackground", "batwords", "batheader", "Batform", "#fddb3a", "black"];
        const eduVals = ["backgroundGenericCourse", 'teachWords', 'eduheader', "Eduform", '#febf63', "black"];
        const iuVals = ['iubackground', 'iuwords', 'iuheader', "IUform", "white", "#a20a0a"];
        const dinoVals = ['dinobackground', 'dinowords', 'dinoheader', 'Dinoform', "black", "#8db596"];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;
        var wordDisplay;
        var headerback;
        var headerwordcolor;

        if (cssType === 'dino') {
            whichCssbackground = dinoVals[0];
            whichCsswords = dinoVals[1];
            whichCssothers = dinoVals[2];
            wordDisplay = dinoVals[3];
            headerback = dinoVals[4];
            headerwordcolor = dinoVals[5];
        }
        else if (cssType === 'bat') {
            whichCssbackground = batVals[0];
            whichCsswords = batVals[1];
            whichCssothers = batVals[2];
            wordDisplay = batVals[3];
            headerback = batVals[4];
            headerwordcolor = batVals[5];
        }
        else if (cssType === 'iu') {
            whichCssbackground = iuVals[0];
            whichCsswords = iuVals[1];
            whichCssothers = iuVals[2];
            wordDisplay = iuVals[3];
            headerback = iuVals[4];
            headerwordcolor = iuVals[5];
        }
        else {
            whichCssbackground = eduVals[0];
            whichCsswords = eduVals[1];
            whichCssothers = eduVals[2];
            wordDisplay = eduVals[3];
            headerback = eduVals[4];
            headerwordcolor = eduVals[5];
        }
        var status;
        if(this.props.location.chatStat)
        {
            status = true;
        }
        else{
            status = false;
        }

        this.state = {
            currentCourseCode: this.props.match.params.courseCode,

            //teacherCourse: [{'courseName' : "Software Engineering", "courseCode": "P456", "course_description" : 
            //"I am a first generation Millionaire"}],

            teacherCourse: CourseProfile.getCourseProfile(),

            newAnnouncement: {},
            newAssignment: {},

            pastAnnouncements: [],
            upcomingAssignments: [],

            file: '',

            displayNav: presetForNav,
            itemPad: defVal,

            pageTheme: cssType,


            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCsswords,
            pageSplit: separator,

            headerWord: wordDisplay,
            selectheaderback: headerback,
            colorOfHeadWord: headerwordcolor,
            teachMenuClick: 0,
            chatPresence : status
        }

        this.postTeacherCourseAnnouncement = this.postTeacherCourseAnnouncement.bind(this)
        this.postTeacherCourseAssignment = this.postTeacherCourseAssignment.bind(this);
        this.showAnnouncements = this.showAnnouncements.bind(this);
        this.showAssignments = this.showAssignments.bind(this);

        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.teachingMenu = this.teachingMenu.bind(this);
        this.showTeachMenu = this.showTeachMenu.bind(this);
    }

    displayer() {

        if (this.state.displayNav === true) {

            return (<NavBar thetog={this.state.displayNav} />);
        }
        else {
            return <p></p>;
        }
    }

    bar() {
        this.setState({ displayNav: !this.state.displayNav });
        if (this.state.itemPad === 30) {
            this.setState({ itemPad: 175, pageSplit: <div className="col-md-1 col-sm-0"></div> });
        }
        else {
            this.setState({ itemPad: 30, pageSplit: <div className="col-md-1 col-sm-0"></div> });
        }

    }

    setFile(e) {
        e.preventDefault();

        console.log("File recoredd");
        this.setState({ file: e.target.files[0] });

        console.log("The file we read: ", this.state.file);
    }

    async postTeacherCourseAssignment(event) {
        event.preventDefault();

        let courseCode = document.getElementById("assignmentCourseCode").value;
        let assignmentName = document.getElementById("assignmentName").value;
        let assignmentMaxPoints = parseInt(document.getElementById("assignmentMaxPoints").value);
        let assignmentDueDate = document.getElementById("assignmentDueDate").value;
        let assignmentFile = document.getElementById("assignmentFile").value;


        
        if (!courseCode || !assignmentName || !assignmentMaxPoints || !assignmentDueDate || !assignmentFile) {
            alert("Complete the form!");
            return
        }


        let uploadRequest = `{"courseCode": "${courseCode}","userEmail": "${UserProfile.getEmail()}","filename": "${assignmentName}", \
        "maxPoints": ${assignmentMaxPoints},"dueDate": "${assignmentDueDate}"}`;



        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('uploadRequest', uploadRequest);



        try {
            const response = await fetch('/teacher/uploadAssignment', {
                method: 'POST',
           
                body: formData
            })
                .then(res => res.text())
                .then(text => {

                    if (text === "SUCCESS!") {
                        this.setState({
                            newAssignment: {}
                        });
                        alert("Assignment created succesfully!");

                        document.getElementById("makeAssignment").reset();

                        this.showAssignments();

                    } else {
                        alert(text);
                    }

                });

        } catch (error) {
            alert(error);
        }

    }

    async postTeacherCourseAnnouncement(event) {
        event.preventDefault();

        let courseCode = document.getElementById("announceCourseCode").value;
        let announceText = document.getElementById("announceText").value;

        if (courseCode === '' || announceText === '') {
            alert("Complete the form!");
            return
        }

        this.state.newAnnouncement.courseCode = courseCode;
        this.state.newAnnouncement.announcementText = announceText;

        try {
            const response = await fetch('/teacher/makeAnnouncement/' + UserProfile.getEmail(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(this.state.newAnnouncement)
            })
                .then(res => res.text())
                .then(text => {

                    if (text === "SUCCESS!") {
                        this.setState({
                            newAnnouncement: {}
                        });
                        alert("Announcement created succesfully!");

                        document.getElementById("makeAnnouncement").reset();

                        this.showAnnouncements();


                    } else {
                        alert(text);
                    }

                });

        } catch (error) {
            alert(error);
        }
    }

    teachingMenu() {
        if (this.state.teachMenuClick === 0) {
            this.setState({ teachMenuClick: 1 });
        }
        else {
            this.setState({ teachMenuClick: 0 });
        }
    }


    showTeachMenu() {
        if (this.state.teachMenuClick === 1) {
            return (
                <div style={{ width: '100px', backgroundColor: "#febf63" }} className="ui visible right thin sidebar vertical menu">
                    <Link className="item" style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} to={{
                        pathname: '/teacher-course/' + this.state.currentCourseCode + '/assignments', assignstate: {
                            theCourse: this.state.currentCourseCode
                        }, toggleState: this.state.toggler
                    }}>
                        <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Assignments </b></p>

                    </Link>

                    <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                        pathname: '/teacher-course/' + this.state.currentCourseCode + '/grades', gradestate: {
                            currentClassGrade: this.state.currentCourseCode
                        }, toggleState: this.state.toggler
                    }}>
                        <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Student Grades</b></p>

                    </Link>
                    <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                        pathname: '/teacher-course/' + this.state.currentCourse + '/chat',
                        ccourse: this.state.currentCourseCode
                        , toggleState: this.state.toggler
                    }}>
                        <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Chat</b></p>

                    </Link>

                    <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                        pathname: '/teacher-course/' + this.state.currentCourseCode + '/announcements', notestate: {
                            currentClassNotes: this.state.currentCourseCode
                        }, toggleState: this.state.toggler
                    }}>

                        <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Announcements</b></p>

                    </Link>
                    <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                        pathname: '/teacher-course/' + this.state.currentCourseCode + '/grading', notestate: {
                            //currentClassNotes: this.state.currentCourseCode
                        }, toggleState: this.state.toggler
                    }}>

                        <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>Grade Assignments</b></p>

                    </Link>
                    <Link onClick={this.teachingMenu}>Hide Bar</Link>
                </div>);
        }
        else {
            return <p></p>;
        }
    }

    
    componentDidMount(){

        this.showAnnouncements();
        this.showAssignments();
    }

    showAssignments(){
        let upcoming = [];

        this.setState({upcomingAssignments: []});

        upcoming.push(
            <div style={{ paddingLeft: '28px', textAlign: 'left' }} className="flex-col-md-8 flex-col-sm-12">

                <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.6rem' }}> Assignments</h1>
                <hr style={{ marginBottom: '30px' }} />
                <Assignments theClass={this.props.match.params.courseCode} />

            </div>
        )

        this.setState({upcomingAssignments: upcoming});
    }

    showAnnouncements(){

        let past = [];

        this.setState({pastAnnouncements: []});

        past.push(
            <div class="list-group">
                <Announcements currentClass={this.props.match.params.courseCode} />
            </div>
        );

        this.setState({pastAnnouncements: past});

        
    }


    render() {

        let code = this.props.match.params.courseCode;

        if (!code) {
            return this.props.history.push('/teacher-courses');
        } else {
            //this.state.currentCourseCode = code;
        }

        const courseInfo = [];

        //changed teacherCourse to this.state.teacherCourse - for dummy data

        let i = 0;
        if(!(this.state.teacherCourse === undefined)){
        for (i; i < this.state.teacherCourse.length; i++) {
            if (this.state.teacherCourse[i].courseCode === code) {
                courseInfo.push(
                    <div style={{ textAlign: 'left' }} className="col-md-11 col-sm-12">
                        <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                        <h1 className="teachWords" style={{ fontSize: '2.8rem' }}> {this.state.teacherCourse[i].courseCode} - {this.state.teacherCourse[i].courseName}</h1>
                        <p style={{ color: 'white' }}> {this.state.teacherCourse[i].courseDetails}</p>
                        <div className="btn-group dropright">
                            <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b style={{ fontSize: '1.15rem' }}>Make an Announcement</b>
                            </button>
                            <div style={{backgroundColor: '#febf63'}}  className="dropdown-menu">
                                <form style={{ width: '500px', height: '300px' }} class="px-4 py-3" id="makeAnnouncement" onSubmit={this.postTeacherCourseAnnouncement} noValidate>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                        <input class="form-control" id="announceCourseCode" value={code} type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormPassword1"><b>Announcement</b></label>
                                        <textarea style={{ height: '125px' }} class="form-control" id="announceText" aria-label="With textarea"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                        <div style={{ marginLeft: '30px' }} className="btn-group dropdown">
                            <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b style={{ fontSize: '1.15rem' }}>Create an Assignment</b>
                            </button>
                            <div style={{marginTop: '90px',marginRight: '250px',backgroundColor: '#febf63'}}  className="dropdown-menu">
                                <form style={{ width: '650px', height: '450px' }} class="px-4 py-3" id="makeAssignment" onSubmit={this.postTeacherCourseAssignment} noValidate>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                        <input class="form-control" id="assignmentCourseCode" value={code} type="text" required />
                                        <option value={this.state.teacherCourse[i].courseCode} />
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
                                        <input type="file" class="form-control" id="assignmentFile" placeholder="" onChange={e => this.setFile(e)} />
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div>
                        <div style={{marginLeft: '30px' }} className="btn-group dropdown">
                            <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b style={{ fontSize: '1.15rem' }}>Menu</b>
                            </button>
                            <div style={{marginLeft: '4px',marginTop: '320px',width: '245px'}} className="dropdown-menu">
                                <div class="ui secondary vertical menu">
                                
                             
                                        <div style={{marginLeft: '20px'}} class="ui vertical menu">
                                        <div class="item">
                                            <Link className="item" style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} to={{
                                                pathname: '/teacher-course/' + code + '/assignments', assignstate: {
                                                    theCourse: code
                                                }, toggleState: this.state.toggler
                                            }}>
                                                <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Assignments </b></p>

                                            </Link>
                                            </div>
                                            <div class="item">
                                            <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                                                pathname: '/teacher-course/' + this.state.currentCourseCode + '/chat',
                                                ccourse: this.state.currentCourseCode, chatStat : this.state.chatPresence
                                                , toggleState: this.state.toggler
                                            }}>
                                                <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Chat</b></p>

                                            </Link>
                                            </div>
                                            <div class="item">
                                            <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                                                pathname: '/teacher-course/' + code + '/announcements', notestate: {
                                                    //currentClassNotes: code
                                                }, toggleState: this.state.toggler
                                            }}>

                                                <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>View Announcements</b></p>

                                            </Link>
                                            </div>
                                            <div class="item">
                                            <Link style={{ border: 'solid', borderColor: '#febf63', backgroundColor: 'white' }} className="item" to={{
                                                pathname: '/teacher-course/' + code + '/grading', notestate: {
                                                    currentClassNotes: code
                                                }, toggleState: this.state.toggler
                                            }}>

                                                <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>Grade Assignments</b></p>

                                            </Link>
                                            </div>
                                        </div>
                                    

                                </div>
                            </div>
                        </div>

                        <hr style={{ marginBottom: '30px' }} />
                    </div>
                );
            }

        }
    }


        return (
            <div className={`${this.state.theBackground}`}>
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: '#febf63' }} className="row dashItems">

                        <h1 className="welcome" style={{ margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: 'black', marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                        Eduform</h1>

                    </div>
                    <div style={{ marginTop: '10px' }} className="row">

                        <div className="col-md-11 col-sm-10">
                            {courseInfo}
                        </div>

                    </div>


                    <div style={{ marginTop: '30px' }} className="row">
                        {this.state.upcomingAssignments}
                        {this.state.pageSplit}
                        <div style={{ paddingLeft: '120px', textAlign: 'left' }} className="flex-col-md-3 flex-col-sm-12">
                            <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.6rem' }}> Announcements</h1>
                            <hr style={{ marginBottom: '30px' }} />
                            {this.state.pastAnnouncements}
                            
                        </div>
                    </div>


                    {this.displayer()}
                    {this.showTeachMenu()}
                </div>

            </div>
        );
    }
}

export default withRouter(GenericCourse);