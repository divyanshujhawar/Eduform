import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class AssignmentBlocks extends React.Component {

    constructor(props) {
        super(props);

        const getSearch = this.props.whatUserSearched;

        this.state = {
            course: this.props.whichCourse,
            toggler: this.props.theTog,
            userQueriedItem: this.props.whatUserSearched,

            assignments: [],

            /*
            assignments: [
                {
                    assign_id: 1009,
                    course_id: 23,
                    user_id: 2,
                    course_code: 'CS1111',
                    teacher_email: 'd',
                    filename: 'Lab 7',
                    max_points: '120',
                    creation_date: 's',
                    due_date: '12/05/2020',
                    assignment_path: 'Computer Engineering'
                },
                {
                    assign_id: 1007,
                    course_id: 56,
                    user_id: 2,
                    course_code: 'CS1111',
                    teacher_email: 'd',
                    filename: 'Assignment 3',
                    max_points: '75',
                    creation_date: 's',
                    due_date: '12/06/2020',
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
                    creation_date: 's',
                    due_date: '12/13/2020',
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
                    creation_date: 's',
                    due_date: '12/12/2020',
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
                    creation_date: 's',
                    due_date: '12/05/2020',
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
                    creation_date: 's',
                    due_date: '12/03/2020',
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
                    creation_date: 's',
                    due_date: '12/03/2020',
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
                    creation_date: '2020-11-01',
                    due_date: '11/10/2020',
                    assignment_path: 'Intro to Computer Science'
                }
            ]
            */
        }

        this.getAllCourseAssignments = this.getAllCourseAssignments.bind(this);

    }

    componentDidMount() {
        this.getAllCourseAssignments();

    }


    getAllCourseAssignments() {

        try {
            const response = fetch('/teacher/getCourseAssignments/' + this.state.course + '?email=' + 'student@iu.edu', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        assignments: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    render() {

        let query = this.props.whatUserSearched;

        const theAssignments = [];
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {
            //if (this.state.course === this.state.assignments[i].courseCode) {

            var id = this.state.assignments[i].filename.split('.')[0]

            var tempDate = this.state.assignments[i].dueDate;

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;


            if (query === "") {
                theAssignments.push(
                    <div style={{ marginBottom: '5px' }} className="row">
                        <div style={{ color: '#1089ff', textAlign: 'center', paddingTop: '18px', backgroundColor: '#febf63' }} className="col-md-2"><b style={{ fontSize: '1.2rem' }}> {this.state.assignments[i].courseCode}</b></div>
                        <div style={{ borderStyle: 'solid', borderWidth: '.5px', width: '810px' }}> <Link to={{
                            pathname: '/course/'+ this.state.course + '/assignments/' + id, passCourseState: {
                                assignID: id, courseName: this.state.assignments[i].filename, date: this.state.assignments[i].dueDate, mp: this.state.assignments[i].maxPoints
                            }, toggleState: this.state.toggler
                        }}> <button class="ui light basic button"><b style={{ color: '#febf63', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</b>
                                <p style={{ color: '#febf63' }}> Due: {queryDate} - {this.state.assignments[i].maxPoints} pts</p></button> </Link></div>
                    </div>

                );
            }
            else {
                if ((this.state.assignments[i].filename.substr(0, query.length).toLowerCase()) === (query.toLowerCase()) ||
                    (queryDate.substr(0, query.length)) === (query) ||
                    (this.state.assignments[i].maxPoints.toString().substr(0, query.length)) === (query)) {
                    theAssignments.push(

                        <div style={{ marginBottom: '5px' }} className="row">
                            <p></p>
                            <div style={{ color: '#1089ff', textAlign: 'center', paddingTop: '18px', backgroundColor: '#febf63' }} className="col-md-2"><b style={{ fontSize: '1.2rem' }}> {this.state.assignments[i].courseCode}</b></div>
                            <div style={{ borderStyle: 'solid', borderWidth: '.5px', width: '810px' }}> <Link to={{
                                pathname: '/course/'+ this.state.course + '/assignments/' + id, passCourseState: {
                                    assignID: id, courseName: this.state.assignments[i].filename, date: this.state.assignments[i].dueDate, mp: this.state.assignments[i].maxPoints
                                }, toggleState: this.state.toggler
                            }}> <button class="ui light basic button"><b style={{ color: '#febf63', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</b>
                                    <p style={{ color: '#febf63' }}> Due Date: {queryDate} - {this.state.assignments[i].maxPoints} pts</p></button> </Link></div>
                        </div>);

                }
            }
            //}
        }

        return (

            <div className="container">
                {theAssignments}

            </div>

        );
    }
}

export default AssignmentBlocks;
