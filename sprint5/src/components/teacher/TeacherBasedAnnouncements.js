import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class TeacherBasedAnnouncements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            theClass: this.props.currentClass,
            
            announcements: [],
        }

        this.getLastWeekCourseAnnouncements = this.getLastWeekCourseAnnouncements.bind(this);
    }

    componentDidMount(){
        this.getLastWeekCourseAnnouncements();
    }

    getLastWeekCourseAnnouncements(){
        try {
            const response = fetch('/teacher/getLastWeekCourseAnnouncements/' + this.state.theClass, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                    this.setState({
                        announcements: jsonData.result
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
        for (i; i < this.state.announcements.length; i++) {
            var passedDay = Date.parse(this.state.announcements[i].announcementDate);

            var tempDate = this.state.announcements[i].announcementDate;

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;

            if (((Math.abs(time - passedDay) / milliTime) <= 14)) {  // This checks to make sure time is within 2 week span for announcements
                announceItems.push(
                    <div style={{ marginBottom: '5px' }} class="item">
                        <div class="content">
                            <div style={{ color: 'white' }} class="description">{this.state.announcements[i].announcementText}</div>
                            <p style={{ color: 'white' }}> <b> {queryDate} </b> </p>
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

export default TeacherBasedAnnouncements;
