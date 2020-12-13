import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import UserProfile from '../.././utils/UserProfile';
import CourseProfile from '../.././utils/CourseProfile';

class TeacherAssignBlocks extends React.Component {

    constructor(props) {
        super(props);

        var cssType = 'edu';
        if (this.props.passStyler) {
            cssType = this.props.passStyler;
        }
        else {
            cssType = 'edu';
        }

        const batVals = ['batbackground', 'batwords', 'batwords2'];
        const eduVals = ['backgroundGenericCourse', 'teachWords', 'teachWords2'];
        const iuVals = ['iubackground', 'iuwords', 'iuwords'];
        const dinoVals = ['dinobackground', 'dinowords2', 'dinowords2'];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;

        if (cssType === 'dino') {
            whichCssbackground = dinoVals[0];
            whichCsswords = dinoVals[1];
            whichCssothers = dinoVals[2];
        }
        else if (cssType === 'bat') {
            whichCssbackground = batVals[0];
            whichCsswords = batVals[1];
            whichCssothers = batVals[2];
        }
        else if (cssType === 'iu') {
            whichCssbackground = iuVals[0];
            whichCsswords = iuVals[1];
            whichCssothers = iuVals[2];
        }
        else {
            whichCssbackground = eduVals[0];
            whichCsswords = eduVals[1];
            whichCssothers = eduVals[2];
        }

        this.state = {
            // Query here specifically by due_date, if due_date matches the selectedDate below. Doing a makeshift query in render()
            // below with an if statement.
            //IF we don't do this, also okay, just put all assignment JSON info here.
            // IF you do, then remove the if statement form inside the render() portion.
            selectedDate: this.props.datePass,
            pageTheme: cssType,
            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers,

            assignments: [],

            /*
            assignments: [
                {
                    assign_id: 1009,
                    course_id: 23,
                    user_id: 2,
                    course_code: 'CS1009',
                    teacher_email: 'f',
                    filename: 'Lab 7',
                    max_points: '120',
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Computer Engineering'
                },
                {
                    assign_id: 1007,
                    course_id: 56,
                    user_id: 2,
                    course_code: 'CS1009',
                    teacher_email: 'f',
                    filename: 'Assignment 3',
                    max_points: '75',
                    creation_date: 's',
                    due_date: '11/06/2020',
                    assignment_path: 'Object Oriented Programming'
                },
                {
                    assign_id: 1006,
                    course_id: 11,
                    user_id: 2,
                    course_code: 'CS1113',
                    teacher_email: 'f',
                    filename: 'Assignment 5',
                    max_points: '25',
                    creation_date: 's',
                    due_date: '11/13/2020',
                    assignment_path: 'Software Engineering I'
                },
                {
                    assign_id: 1005,
                    course_id: 11,
                    user_id: 2,
                    course_code: 'CS1112',
                    teacher_email: 'f',
                    filename: 'Milestone 3',
                    max_points: '150',
                    creation_date: 's',
                    due_date: '11/12/2020',
                    assignment_path: 'Software Engineering I'
                },
                {
                    assign_id: 1004,
                    course_id: 4,
                    user_id: 2,
                    course_code: 'CS2432',
                    teacher_email: 'd',
                    filename: 'Midterm',
                    max_points: '100',
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Big Data'
                },
                {
                    assign_id: 1003,
                    course_id: 12,
                    user_id: 2,
                    course_code: 'CS2145',
                    teacher_email: 'd',
                    filename: 'Assignment 6',
                    max_points: '200',
                    creation_date: 's',
                    due_date: '11/03/2020',
                    assignment_path: 'Database Concepts'
                },
                {
                    assign_id: 1002,
                    course_id: 6,
                    user_id: 2,
                    course_code: 'CS1111',
                    teacher_email: 'f',
                    filename: 'Lab 6',
                    max_points: '100',
                    creation_date: 's',
                    due_date: '12/10/2020',
                    assignment_path: 'Intro to Computer Science'
                },
                {
                    assign_id: 1001,
                    course_id: 6,
                    user_id: 2,
                    course_code: 'CS1111',
                    teacher_email: 'f',
                    filename: 'Assignment 5',
                    max_points: '150',
                    creation_date: '2020-11-01',
                    due_date: '12/06/2020',
                    assignment_path: 'Intro to Computer Science'
                }
            ]
            */
        }

        this.getUpcomingAssignments = this.getUpcomingAssignments.bind(this);
    }

    componentDidMount() {
        this.getUpcomingAssignments();

    }


    getUpcomingAssignments() {
        try {
            const response = fetch('/teacher/getNextWeekAssignments/' + UserProfile.getEmail(), {
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

        const upcoming = [];
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {

            var tempDate = this.state.assignments[i].dueDate

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;

            if (queryDate === this.state.selectedDate) //&& this.state.assignments[i].teacherEmail === 'f') // and where teacher email is included
            {
                upcoming.push(
                    <div style={{marginLeft: '5px',borderTop: 'none', borderBottom: 'solid', borderColor: 'black', borderWidth: '1px' }} class="item">
                        <h3 className={`${this.state.others}`}> {this.state.assignments[i].filename.split('.')[0]} </h3>
                        <div class="content">
                            <div className={`${this.state.theWords}`}>
                                {this.state.assignments[i].courseCode} </div>
                            <p className={`${this.state.others}`} style={{ fontSize: '.9rem' }}> Due: {queryDate} </p>
                            <p className={`${this.state.others}`} style={{ fontSize: '.9rem' }}> {this.state.assignments[i].maxPoints} pts </p>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div class="ui celled list">
                {upcoming}
            </div>
        );
    }
}

export default TeacherAssignBlocks;
