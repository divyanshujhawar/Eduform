

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Notifications from '../teacherCourses/NotificationBlocks.js';
import Bar from '../teacher/TeacherNavigation.js';

import UserProfile from '../.././utils/UserProfile';

class GradeAssignments extends React.Component {

    constructor(props) {
        super(props);
        //const { currentClassNotes } = this.props.location.notestate;
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
            //myCourse: currentClassNotes,

            assignments: [],

            submittedAssignments: [],


            myCourse: this.props.match.params.courseCode,
            displayNav: presetForNav,
            itemPad: defVal,
            usersSearchedItems: "",
            userTyped: false
        }
        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.displayNotes = this.displayNotes.bind(this);
        //this.theNotes = this.theNotes.bind(this);


        this.getAssignmentinfo = this.getAssignmentinfo.bind(this);
        this.gradeAssignment = this.gradeAssignment.bind(this);
        this.downloadAssignment = this.downloadAssignment.bind(this);

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
    displayNotes = () => {

        if (document.getElementById("inputBar").value === "") {
            this.setState({ usersSearchedItems: "", userTyped: false });

        }
        else {
            this.setState({ usersSearchedItems: document.getElementById("inputBar").value, userTyped: true });
        }

    }

    /*
    theNotes = () => {

        if(this.state.userTyped === false)
        {
            return (
                <div>
                    <Notifications UsersSearch={""} whichCourse={this.state.myCourse} />
                </div>);
        }
        else{
            
            return(
                <Notifications UsersSearch={this.state.usersSearchedItems} whichCourse={this.state.myCourse} />
            );
        }
          
    }
    */

    downloadAssignment(){

        var studentFileName = document.getElementById("");

        try {
            const response = fetch('/teacher/download/studentSubmittedAssignment' + `?assignmentName=${studentFileName}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                });

        } catch (error) {
            alert(error);
        }
    }

    gradeAssignment(event) {

        event.preventDefault();

        var assignment = document.getElementById("assignmentFileName").value;
        var points = parseInt(document.getElementById("assignmentTotalPoints").value);

        
        if(!points){
            alert("Please fill in the marks!");
            return;
        }

        try {
            const response = fetch('/teacher/gradeAssignment' + `?assignment=${assignment}&points=${points}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
            .then(res => res.text())
            .then(text => {

                if (text === "SUCCESS!") {
                    this.setState({
                        newAssignment: {}
                    });
                    alert("Assignment created succesfully!");

                    document.getElementById("gradeAssignment").reset();

                    this.getAssignmentinfo();

                } else {
                    alert(text);
                }

            });

        } catch (error) {
            alert(error);
        }
    }


    getAssignmentinfo() {

        try {
            const response = fetch('/teacher/getCourseAssignments/' + this.props.match.params.courseCode + '?email=' + UserProfile.getEmail(), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        assignments: jsonData.result
                    });

                    console.log(this.state.assignments);

                });

        } catch (error) {
            alert(error);
        }

    }

    componentDidMount() {
        this.getAssignmentinfo();
    }

    render() {

        let allContent = [];

        let headers = [];
        let headerInfo = [];
        var i;
        for (i = 0; i < this.state.assignments.length; i++) {
            var assignmentName = this.state.assignments[i].filename;

            if (!(headers.includes(assignmentName))) {
                headers.push(assignmentName);
                headerInfo.push([]);
            }
        }

        var j;
        for (j = 0; j < headers.length; j++) {
            for (i = 0; i < this.state.assignments.length; i++) {

                if (this.state.assignments[i].filename === headers[j]) {

                    for (k = 0; k < this.state.assignments[i].assignmentSubmissions.length; k++) {

                        if (this.state.assignments[i].assignmentSubmissions[k].points !== 0) {
                            let studentFileName = this.state.assignments[i].assignmentSubmissions[k].filename;
                            
                            headerInfo[j].push(
                                <div class="item">
                                    <div class="right floated content">
                                        <div style={{ color: 'white' }} value={studentFileName}  id="fileName" class="ui button bg-danger" onclick={this.downloadAssignment}>View Submission</div>

                                        <div style={{ paddingBottom: '4px' }} className="btn-group dropleft">
                                            <div style={{ color: 'white' }} type="button" className="ui button bg-danger dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                Grade Submission
                                            </div>
                                            <div className="dropdown-menu">
                                                <form style={{ width: '650px', height: '400px' }} class="px-4 py-3" id="gradeAssignment" onSubmit={this.gradeAssignment} noValidate>
                                                    <div class="form-group">
                                                        <label for="exampleDropdownFormEmail1"><b>User Email </b></label>
                                                        <input value={this.state.assignments[i].assignmentSubmissions[k].studentEmail} class="form-control" id="assignmentUserEmail" type="text" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                                        <input value={this.state.assignments[i].courseCode} class="form-control" id="assignmentCourseCode" type="text" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleDropdownFormEmail1"><b>Assignment </b></label>
                                                        <input value={this.state.assignments[i].assignmentSubmissions[k].filename} class="form-control" id="assignmentFileName" type="text" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleDropdownFormEmail1"><b>Max Points </b></label>
                                                        <input value={this.state.assignments[i].maxPoints} class="form-control" id="assignmentMaxPoints" type="text" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleDropdownFormEmail1"><b>Total Points </b></label>
                                                        <input class="form-control" id="assignmentTotalPoints" type="text" required />
                                                    </div>

                                                    <button type="submit" class="btn btn-primary">Send</button>

                                                </form>
                                            </div>
                                        </div>


                                    </div>
                                    <img class="ui avatar image" src={Personal} />
                                    <div style={{ color: '#febf63', fontSize: '1.2rem' }} class="content">
                                        Student {this.state.assignments[i].user_id}
                                    </div>
                                </div>
                            );
                        }
                        else {
                            headerInfo[j].push(
                                <div class="item">
                                    <div class="right floated content">
                                        <div style={{ color: 'white' }} class="ui button bg-success">
                                            {this.state.assignments[i].assignmentSubmissions[k].points} / {this.state.assignments[i].maxPoints} - Graded</div>
                                    </div>
                                    <img class="ui avatar image" src={Personal} />
                                    <div style={{ color: '#febf63', fontSize: '1.2rem' }} class="content">
                                        Student {this.state.assignments[i].user_id}
                                    </div>
                                </div>
                            );
                        }
                    }
                }
            }
        }

        var k;
        for (k = 0; k < headerInfo.length; k++) {
            allContent.push(

                <div class="ui middle aligned divided list">
                    <h2 style={{ fontSize: '2.2rem', color: 'white' }}>{headers[k]}</h2>
                    <br />
                    {headerInfo[k]}
                </div>

            );
        }

        return (
            <div className="backGroundTeachC">
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: '#febf63' }} className="row dashItems">

                        <h1 className="welcome" style={{ margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: 'black', marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                      Eduform</h1>

                    </div>
                    <div style={{ marginTop: '10px' }} className="row">

                        <div style={{ textAlign: 'left' }} className="col-md-10 col-sm-12">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                            <div style={{ marginTop: '20px' }} className='row'>
                                <div className="col-md-8 col-sm-12">
                                    <h1 className="studentWords" style={{ fontSize: '2.8rem' }}> <Link to={{
                                        pathname: '/teacher-course/' + this.props.match.params.courseCode, state: {
                                            currentClass: this.state.myCourse
                                        }
                                    }} > <i style={{ color: "#febf63", marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>Grade Assignments</h1>

                                </div>
                                <div style={{ paddingRight: '60px' }} className='col-md-4 col-sm-12'>
                                    <div style={{ width: '100%' }} class="ui vertical menu">
                                        <div class="item">
                                            <div class="ui transparent icon input">
                                                <input type="text" id="inputBar" placeholder="Search Assignments" onChange={this.displayNotes} />
                                                <i class="search icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ marginBottom: '30px' }} />

                            {allContent}



                        </div>
                    </div>
                    {this.displayer()}

                </div>
            </div>
        );
    }
}

export default GradeAssignments;
