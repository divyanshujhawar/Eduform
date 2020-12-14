import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import CourseProfile from '../.././utils/CourseProfile';
import UserProfile from '../.././utils/UserProfile';


class FilteredAssignments extends React.Component {

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

            class: this.props.theClass,
            
            assignments: [],
            selectedDate: this.props.datePass,
            pageTheme: cssType,
            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers,

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
                    creation_date: 's',
                    due_date: '11/05/2020',
                    assignment_path: 'Computer Engineering',
                },
                {
                    assign_id: 1007,
                    course_id: 2,
                    user_id: 2,
                    course_code: 'P456',
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
                    course_code: 'P456',
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
                    course_code: 'P456',
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
                    course_code: 'P456',
                    teacher_email: 'd',
                    filename: 'Midterm',
                    max_points: '100',
                    creation_date: 's',
                    due_date: '12/05/2020',
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
                    due_date: '12/03/2020',
                    assignment_path: 'Intro to Computer Science',
                },
                {
                    assign_id: 1001,
                    course_id: 6,
                    user_id: 2,
                    course_code: 'CS1111',
                    teacher_email: 'divyanshu@iu.edu',
                    filename: 'Assignment 5',
                    max_points: '150',
                    creation_date: '2020-11-01',
                    due_date: '11/10/2020',
                    assignment_path: 'Intro to Computer Science',
                }
            ]
            */
        }

        this.getUpcomingCourseAssignments = this.getUpcomingCourseAssignments.bind(this);
    }

    componentDidMount() {
        this.getUpcomingCourseAssignments();

    }


    getUpcomingCourseAssignments() {
        try {
            const response = fetch('/teacher/getNextWeekCourseAssignments/' + this.state.class + '?email=' + UserProfile.getEmail(), {
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


    render() {
        var month = new Date().getMonth(); // 0-11
        var day = new Date().getDate(); // 1-31
        var year = new Date().getFullYear();
        var final = (month + 1) + '/' + day + '/' + year;
        var stringFinal = final.toString();
        var time = Date.parse(stringFinal);

        var milliTime = (1000 * 24 * 60 * 60);

        const assignmentItems = [];

        let i = 0;
        for (i; i < this.state.assignments.length; i++) {
            var passedDay = Date.parse(this.state.assignments[i].dueDate);

            
            var tempDate = this.state.assignments[i].dueDate;

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;
            

            if (((Math.abs(time - passedDay) / milliTime) <= 14)) {  // This checks to make sure time is within 2 week span for announcements
                assignmentItems.push(

                    <div style={{borderTop: 'none', borderBottom: 'solid', borderColor: 'black', borderWidth: '1px' }} class="item">
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
            <div class="ui relaxed list">
                {assignmentItems}
            </div>
        );
    }
}

export default FilteredAssignments;
