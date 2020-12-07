

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

            /*
            assignments: [
                {
                    assign_id: 1009,
                    course_id: 23,
                    user_id: 2,
                    course_code: 'CS1009',
                    teacher_email: 'd',
                    filename: 'Lab 7',
                    max_points: '120',
                    total_points: '115',
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Computer Engineering'
                },
                {
                    assign_id: 1007,
                    course_id: 56,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Assignment 3',
                    max_points: '75',
                    total_points: '73.5',
                    creation_date: 's',
                    due_date: '11/06/2020',
                    assignment_path: 'Object Oriented Programming'
                },
                {
                    assign_id: 1006,
                    course_id: 11,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Assignment 5',
                    max_points: '25',
                    total_points: '22',
                    creation_date: 's',
                    due_date: '11/13/2020',
                    assignment_path: 'Software Engineering I'
                },
                {
                    assign_id: 1005,
                    course_id: 11,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Milestone 3',
                    max_points: '150',
                    total_points: '135',
                    creation_date: 's',
                    due_date: '11/12/2020',
                    assignment_path: 'Software Engineering I'
                },
                {
                    assign_id: 1004,
                    course_id: 4,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Midterm',
                    max_points: '100',
                    total_points: '65',
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Big Data'
                },
                {
                    assign_id: 1003,
                    course_id: 12,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Assignment 6',
                    max_points: '200',
                    total_points: null,
                    creation_date: 's',
                    due_date: '11/03/2020',
                    assignment_path: 'Database Concepts'
                },
                {
                    assign_id: 1003,
                    course_id: 12,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Assignment 6',
                    max_points: '200',
                    total_points: null,
                    creation_date: 's',
                    due_date: '11/03/2020',
                    assignment_path: 'Database Concepts'
                },
                {
                    assign_id: 1003,
                    course_id: 12,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Assignment 6',
                    max_points: '200',
                    total_points: null,
                    creation_date: 's',
                    due_date: '11/03/2020',
                    assignment_path: 'Database Concepts'
                },
                {
                    assign_id: 1002,
                    course_id: 6,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'divyanshu@iu.edu',
                    filename: 'Lab 6',
                    max_points: '100',
                    total_points: '75',
                    creation_date: 's',
                    due_date: '11/03/2020',
                    assignment_path: 'Intro to Computer Science'
                },
                {
                    assign_id: 1001,
                    course_id: 6,
                    user_id: 2,
                    course_code: 'P456',
                    teacher_email: 'divyanshu@iu.edu',
                    filename: 'Assignment 5',
                    max_points: '150',
                    total_points: null,
                    creation_date: '2020-11-01',
                    due_date: '11/10/2020',
                    assignment_path: 'Intro to Computer Science'
                },
                {
                    assign_id: 1001,
                    course_id: 6,
                    user_id: 3,
                    course_code: 'P456',
                    teacher_email: 'divyanshu@iu.edu',
                    filename: 'Assignment 5',
                    max_points: '150',
                    total_points: '150',
                    creation_date: '2020-11-01',
                    due_date: '11/10/2020',
                    assignment_path: 'Intro to Computer Science'
                },
                {
                    assign_id: 1001,
                    course_id: 6,
                    user_id: 4,
                    course_code: 'P456',
                    teacher_email: 'divyanshu@iu.edu',
                    filename: 'Assignment 5',
                    max_points: '150',
                    total_points: null,
                    creation_date: '2020-11-01',
                    due_date: '11/10/2020',
                    assignment_path: 'Intro to Computer Science'
                }
            ],
            */
            
            
            myCourse: this.props.match.params.courseCode,
            displayNav: presetForNav,
            itemPad: defVal,
            usersSearchedItems : "",
            userTyped : false  
        }
        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.displayNotes = this.displayNotes.bind(this);
        //this.theNotes = this.theNotes.bind(this);

        this.getCourseAssignments = this.getCourseAssignments.bind(this);
        this.getAllSubmittedAssignments = this.getAllSubmittedAssignments.bind(this);

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
    displayNotes = () =>{



        if(document.getElementById("inputBar").value === ""){
            this.setState({usersSearchedItems : "",userTyped : false});
     
        }
        else{
            this.setState({usersSearchedItems : document.getElementById("inputBar").value,userTyped : true});
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

    componentDidMount() {
        this.getCourseAssignments();

    }

    downloadSubmittedAssignment(){

    }


    getCourseAssignments() {
        try {
            const response = fetch('/teacher/getNextWeekCourseAssignments/' + this.state.myCourse + '?email=' + 'shubham@iu.edu', {
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

    getAllSubmittedAssignments(assignmentName){
        try {
            const response = fetch('/teacher/getAllSubmittedAssignments/' + '?assignmentName=' + assignmentName + '&courseCode=' + this.state.myCourse, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        submittedAssignments: jsonData.result
                    });

                    console.log(this.state.submittedAssignments);

                });

        } catch (error) {
            alert(error);
        }
    }


    render() {

        let allContent = [];

        let headers = [];
        let headerInfo = [];
        var i;
        for(i = 0; i < this.state.assignments.length; i++)
        {
            var assignmentName = this.state.assignments[i].filename;

            if(!(headers.includes(assignmentName))){
                headers.push(assignmentName);
                headerInfo.push([]);
            }
        }

        var j;
        for(j = 0; j < headers.length; j++)
        {
            for(i = 0; i < this.state.assignments.length; i++)
            {
                if(this.state.assignments[i].filename === headers[j])
                {
                    if(this.state.assignments[i].totalPoints === null)
                    {
                        headerInfo[j].push(
                            <div class="item">
                                <div class="right floated content">
                                <div style={{color: 'white'}} class="ui button bg-danger" onclick="showMsg('Hello')">View Submission</div>



                                <div style={{paddingBottom: '4px'}} className="btn-group dropleft">
                            <div style={{color: 'white'}} type="button" className="ui button bg-danger dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Grade Submission
                            </div>
                            <div className="dropdown-menu">
                                <form style={{ width: '650px', height: '400px' }} class="px-4 py-3" id="makeAssignment" onSubmit={this.postTeacherCourseAssignment} noValidate>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>User ID </b></label>
                                        <input value={this.state.assignments[i].user_id} class="form-control" id="assignmentCourseCode" type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                        <input value={this.state.assignments[i].courseCode} class="form-control" id="assignmentCourseCode" type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Assignment </b></label>
                                        <input value={this.state.assignments[i].filename} class="form-control" id="assignmentCourseCode" type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Max Points </b></label>
                                        <input value={this.state.assignments[i].maxPoints} class="form-control" id="assignmentCourseCode" type="text" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Total Points </b></label>
                                        <input class="form-control" id="assignmentCourseCode" type="text" required />
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>

                                    </form>
                                    </div>
                                    </div>


                                </div>
                                <img class="ui avatar image" src={Personal}/>
                                <div style={{color: '#febf63' ,fontSize: '1.2rem'}}  class="content">
                                Student {this.state.assignments[i].user_id}
                                </div>
                            </div>
                        );
                    }
                    else{
                        headerInfo[j].push(
                            <div class="item">
                                <div class="right floated content">
                                <div style={{color: 'white'}} class="ui button bg-success">
                                {this.state.assignments[i].totalPoints} / {this.state.assignments[i].maxPoints} - Graded</div>
                                </div>
                                <img class="ui avatar image" src={Personal}/>
                                <div style={{color: '#febf63' ,fontSize: '1.2rem'}} class="content">
                                Student {this.state.assignments[i].user_id}
                                </div>
                            </div>
                        );
                    }
                }
            }
        }

        var k;
        for(k = 0; k < headerInfo.length; k++)
        {
            allContent.push(
              
                    <div class="ui middle aligned divided list">
                        <h2 style={{fontSize: '2.2rem', color: 'white'}}>{headers[k]}</h2>
                        <br/>
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
                            <div style={{marginTop: '20px'}}className='row'>
                            <div className="col-md-8 col-sm-12">
                            <h1 className="studentWords" style={{ fontSize: '2.8rem' }}> <Link to={{
                                pathname: '/teacher-course/' + this.props.match.params.courseCode, state: {
                                    currentClass: this.state.myCourse
                                }
                            }} > <i style={{ color: "#febf63", marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>Grade Assignments</h1>

                                </div>
                                <div style={{paddingRight: '60px'}} className='col-md-4 col-sm-12'>
                            <div style={{ width: '100%' }} class="ui vertical menu">
                                    <div class="item">
                                        <div class="ui transparent icon input">
                                            <input type="text" id="inputBar" placeholder="Search Assignments" onChange={this.displayNotes}/>
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
