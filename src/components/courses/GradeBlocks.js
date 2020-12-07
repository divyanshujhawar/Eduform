import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class GradeBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            course: this.props.whichCourse,
            userPassedInput: this.props.userQueriedItem,

            courseAssignments: [ {
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
                }],

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
                }
            ]
        }

        this.getCourseAssignments = this.getCourseAssignments.bind(this);

    }

    componentDidMount() {
        this.getCourseAssignments();
    }

    getCourseAssignments() {
        try {
            const response = fetch('/student/getCourseAssignments/' + this.state.course, {
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

        let query = this.props.userQueriedItem;

        const theAssignments = [];
        var percentagePt = 0;
        var percentageMax = 0;
        var totalPts = '-';
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {
            if (this.state.course === this.state.assignments[i].course_code) {
                if (query === "") {
                    if (this.state.assignments[i].total_points === null) {
                        totalPts = '-';
                    }
                    else {
                        totalPts = Number(this.state.assignments[i].total_points);
                        percentagePt += Number(this.state.assignments[i].total_points);
                        percentageMax += Number(this.state.assignments[i].max_points);
                    }
                    theAssignments.push(
                        <tr>
                            <td style={{ backgroundColor: '#dddddd', color: '#1089ff', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</td>
                            <td style={{ textAlign: 'center', fontSize: '1.1rem' }} class="two wide column"> {totalPts} / {this.state.assignments[i].max_points}</td>
                        </tr>
                    );
                }

                else {

                    if ((this.state.assignments[i].filename.substr(0, query.length).toLowerCase()) === (query.toLowerCase())) {
                        if (this.state.assignments[i].total_points === null) {
                            totalPts = '-';
                        }
                        else {
                            totalPts = Number(this.state.assignments[i].total_points);
                            percentagePt += Number(this.state.assignments[i].total_points);
                            percentageMax += Number(this.state.assignments[i].max_points);
                        }
                        theAssignments.push(
                            <tr>
                                <td style={{ backgroundColor: '#dddddd', color: '#1089ff', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</td>
                                <td style={{ textAlign: 'center', fontSize: '1.1rem' }} class="two wide column"> {totalPts} / {this.state.assignments[i].max_points}</td>
                            </tr>
                        );

                    }

                }
            }
        }

        var percentage = ((percentagePt / percentageMax) * 100).toFixed(2);

        return (

            <table style={{ width: '90%' }} class="ui definition table">
                <tr>
                    <td style={{ backgroundColor: '#febf63', color: 'black' }}></td>
                    <td style={{ backgroundColor: '#febf63', color: 'black' }}></td>
                </tr>
                <tbody>
                    {theAssignments}
                    <tr>
                        <td style={{ backgroundColor: '#dddddd', color: 'black', fontSize: '1.5rem' }}>Total</td>
                        <td style={{ textAlign: 'center', fontSize: '1.3rem' }} class="two wide column"><b>{percentage}% </b></td>
                    </tr>
                </tbody>
            </table>


        );
    }
}

export default GradeBlocks;
