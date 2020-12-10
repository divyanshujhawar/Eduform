import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class NotificationBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            theCourse: this.props.whichCourse,

            courseAnnouncements: [],

            announcements: [
                {
                    ano_id: 56,
                    ano_text: 'Assignment 5 has been graded.',
                    ano_date: '11/01/2020',
                    course_code: 'CS1111',
                    course_idl: 6,
                },
                {
                    ano_id: 57,
                    ano_text: 'Office Hours have been changed this week to: 5-7pm on Thursday.',
                    ano_date: '10/30/2020',
                    course_code: 'CS1113',
                    course_idl: 4,
                },
                {
                    ano_id: 58,
                    ano_text: 'Lab 7 will be released this evening.',
                    ano_date: '10/25/2020',
                    course_code: 'CS1009',
                    course_idl: 23,
                },
                {
                    ano_id: 59,
                    ano_text: 'Assignment 3 has been graded.',
                    ano_date: '10/27/2020',
                    course_code: 'CS1006',
                    course_idl: 11,
                },
                {
                    ano_id: 60,
                    ano_text: 'Project has been released.',
                    ano_date: '10/28/2020',
                    course_code: 'CS1006',
                    course_idl: 11,
                },
                {
                    ano_id: 61,
                    ano_text: 'Exam 1 grades have been graded.',
                    ano_date: '10/31/2020',
                    course_code: 'CS1111',
                    course_idl: 6,
                },
                {
                    ano_id: 62,
                    ano_text: 'Practice Exam for the Midterm has been opened.',
                    ano_date: '10/18/2020',
                    course_code: 'CS2145',
                    course_idl: 12,
                },
                {
                    ano_id: 63,
                    ano_text: 'Practice Exam for the Midterm has been closed.',
                    ano_date: '10/20/2020',
                    course_code: 'CS1112',
                    course_idl: 2,
                },
            ]
        }

        this.getCourseNotifications = this.getCourseNotifications.bind(this);
    }

    componentDidMount() {
        this.getCourseNotifications();
    }

    getCourseNotifications() {
        try {
            const response = fetch('/student/getCourseAnnouncements/' + this.state.theCourse, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        courseAnnouncements: jsonData.result
                    });

                    console.log(this.state.courseAnnouncements);

                });

        } catch (error) {
            alert(error);
        }
    }

    render() {

        const theNotes = [];
        var i = 0;
        for (i; i < this.state.courseAnnouncements.length; i++) {
            if (this.state.theCourse === this.state.courseAnnouncements[i].courseCode) {
                theNotes.push(
                    <a style={{ marginBottom: '5px', backgroundColor: '#febf63' }} href="#" class="list-group-item list-group-item-action list-group-item-primary">
                        <a style={{ color: '#1089ff' }} class="header">{this.state.courseAnnouncements[i].courseCode}</a>
                        <div style={{ color: 'black' }} class="description">{this.state.courseAnnouncements[i].announcementText}</div>
                        <p style={{ color: '#1089ff' }}> <b> {this.state.courseAnnouncements[i].announcementDate} </b> </p>
                    </a>
                );
            }
        }

        return (

            <div class="list-group">
                {theNotes}
            </div>

        );
    }
}

export default NotificationBlocks;
