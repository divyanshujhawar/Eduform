import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class ClassBasedAnnouncements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            theClass: this.props.currentClass,

            classAnnouncements: [],

            announcements: [
                {
                    ano_id: 56,
                    ano_text: 'Assignment 5 has been graded.',
                    ano_date: '11/15/2020',
                    course_code: 'CS1111',
                    course_idl: 6,
                },
                {
                    ano_id: 57,
                    ano_text: 'Office Hours have been changed this week to: 5-7pm on Thursday.',
                    ano_date: '11/30/2020',
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
                    ano_date: '11/27/2020',
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
                    ano_date: '11/31/2020',
                    course_code: 'CS1111',
                    course_idl: 6,
                },
                {
                    ano_id: 62,
                    ano_text: 'Practice Exam for the Midterm has been opened.',
                    ano_date: '11/20/2020',
                    course_code: 'CS2145',
                    course_idl: 12,
                },
                {
                    ano_id: 63,
                    ano_text: 'Practice Exam for the Midterm has been closed.',
                    ano_date: '11/20/2020',
                    course_code: 'CS1112',
                    course_idl: 2,
                },
            ]
        }

        this.getClassAnnouncements = this.getClassAnnouncements.bind(this);
    }

    getClassAnnouncements(){

        try {
            const response = fetch('/student/getLastWeekCourseAnnouncements/' + this.state.theClass, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        classAnnouncements: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    componentDidMount(){
        this.getClassAnnouncements();
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
        for (i; i < this.state.classAnnouncements.length; i++) {
            var passedDay = Date.parse(this.state.classAnnouncements[i].announcementDate);
            if (((Math.abs(time - passedDay) / milliTime) <= 14) && (this.state.theClass === this.state.classAnnouncements[i].courseCode)) {  // This checks to make sure time is within 2 week span for announcements
                announceItems.push(
                    <div style={{ marginBottom: '2px' }} class="item">
                        <div class="content">
                            <a style={{ marginBottom: '7px' }} class="header"><b style={{ fontSize: '1.1rem', color: '#febf63' }}>{this.state.classAnnouncements[i].courseCode} </b></a>
                            <div style={{ color: 'white' }} class="description">{this.state.classAnnouncements[i].announcementText}</div>
                            <p style={{ color: '#febf63' }}> {this.state.classAnnouncements[i].announcementDate}  </p>
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

export default ClassBasedAnnouncements;
