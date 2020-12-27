import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class FilteredAssignments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            class: this.props.theClass,

            courseAssignments: [],

            assignments: [
                {
                    assign_id: 1009,
                    course_id: 23,
                    user_id: 2,
                    course_code: 'CS1009',
                    teacher_email: 'd',
                    filename: 'Lab 7',
                    max_points: '120',
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Computer Engineering',
                },
                {
                    assign_id: 1007,
                    course_id: 2,
                    user_id: 2,
                    course_code: 'CS1112',
                    teacher_email: 'd',
                    filename: 'Assignment 3',
                    max_points: '75',
                    creation_date: 's',
                    due_date: '11/06/2020',
                    assignment_path: 'Machine Learning',
                },
                {
                    assign_id: 1006,
                    course_id: 11,
                    user_id: 2,
                    course_code: 'CS1006',
                    teacher_email: 'd',
                    filename: 'Assignment 5',
                    max_points: '25',
                    creation_date: 's',
                    due_date: '11/13/2020',
                    assignment_path: 'Software Engineering I',
                },
                {
                    assign_id: 1005,
                    course_id: 11,
                    user_id: 2,
                    course_code: 'CS1006',
                    teacher_email: 'd',
                    filename: 'Milestone 3',
                    max_points: '150',
                    creation_date: 's',
                    due_date: '11/12/2020',
                    assignment_path: 'Software Engineering I',
                },
                {
                    assign_id: 1004,
                    course_id: 4,
                    user_id: 2,
                    course_code: 'CS1113',
                    teacher_email: 'd',
                    filename: 'Midterm',
                    max_points: '100',
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Big Data',
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
                    assignment_path: 'Database Concepts',
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
                    due_date: '11/26/2020',
                    assignment_path: 'Intro to Computer Science',
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
                    due_date: '11/29/2020',
                    assignment_path: 'Intro to Computer Science',
                }
            ]
        }

        this.getStudentCourseAssignments = this.getStudentCourseAssignments.bind(this);

    }

    componentDidMount() {
        this.getStudentCourseAssignments();
    }

    getStudentCourseAssignments() {
        try {
            const response = fetch('/student/getAllAssignments/' + 'student@iu.edu'/*UserProfile.getEmail()*/, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        courseAssignments: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }


    render() {
        var month = new Date().getMonth(); // 0-11
        var day = new Date().getDate(); // 1-31
        var year = new Date().getFullYear();
        var final = (month + 1) + '/' + day + '/' + year;
        var stringFinal = final.toString();
        var time = Date.parse(stringFinal);

        var milliTime = (1000 * 24 * 60 * 60);

        const announceItems = [];

        let i = 0;
        for (i; i < this.state.assignments.length; i++) {
            var passedDay = Date.parse(this.state.assignments[i].due_date);
            if (((Math.abs(time - passedDay) / milliTime) <= 14) && (this.state.class === this.state.assignments[i].course_code)) {  // This checks to make sure time is within 2 week span for announcements
                announceItems.push(
                    <div style={{ marginBottom: '2px' }} class="item">
                        <div class="content">
                            <a style={{ marginBottom: '7px' }} class="header"> <b style={{ fontSize: '1.1rem', color: '#febf63' }}>{this.state.assignments[i].filename} </b></a>
                            <div style={{ color: 'white' }} class="description">{this.state.assignments[i].course_code}</div>
                            <p style={{ color: '#febf63' }}> {this.state.assignments[i].due_date}  </p>
                        </div>
                        <hr />
                    </div>
                );
            }
        }

        return (
            <div class="ui relaxed list">
                {announceItems}
            </div>
        );
    }
}

export default FilteredAssignments;
