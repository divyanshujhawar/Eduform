import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import UserProfile from '../../utils/UserProfile';

class NotificationBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            theCourse: this.props.whichCourse,

            courseAnnouncements: [],
            userPassedInput : this.props.UsersSearch,

            announcements: [],

 
        }

        this.getCourseAnnouncements = this.getCourseAnnouncements.bind(this);

 
    }

    componentDidMount(){
        this.getCourseAnnouncements();
    }

    getCourseAnnouncements(){
        try {
            const response = fetch('/teacher/getLastWeekCourseAnnouncements/' + this.state.theCourse+'?email='+ UserProfile.getEmail(), {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                    this.setState({
                        announcements: jsonData.result
                    });

                    console.log(this.state.announcements);

                });

        } catch (error) {
            alert(error);
        }
    }

    

    render() {

        let query = this.props.UsersSearch;

        const theNotes = [];
        var i = 0;
        for (i; i < this.state.announcements.length; i++) {
            //if (this.state.theCourse === this.state.announcements[i].course_code) {

                var tempDate = this.state.announcements[i].announcementDate;

                tempDate = tempDate.substring(0,10);

                var year = tempDate.substring(0,4);
                var month = tempDate.substring(5,7);
                var day = tempDate.substring(8,10);

                var queryDate = `${month}/${day}/${year}`;

                if(query === ""){
                    theNotes.push(
                        <a style={{ marginBottom: '5px', backgroundColor: '#febf63' }} href="#" class="list-group-item list-group-item-action list-group-item-primary">
                            <a style={{ color: '#1089ff' }} class="header">{this.state.announcements[i].courseCode}</a>
                            <div style={{ color: 'black' }} class="description">{this.state.announcements[i].announcementText}</div>
                            <p style={{ color: '#1089ff' }}> <b> {queryDate} </b> </p>
                        </a>
                    );
                }
                else{
                    if((this.state.announcements[i].announcementText.substr(0,query.length).toLowerCase()) === (query.toLowerCase()) ||
                    (this.state.announcements[i].announcementDate.substr(0,query.length)) === (query))
                    {
                        theNotes.push(
                            <a style={{ marginBottom: '5px', backgroundColor: '#febf63' }} href="#" class="list-group-item list-group-item-action list-group-item-primary">
                                <a style={{ color: '#1089ff' }} class="header">{this.state.announcements[i].courseCode}</a>
                                <div style={{ color: 'black' }} class="description">{this.state.announcements[i].announcementText}</div>
                                <p style={{ color: '#1089ff' }}> <b> {queryDate} </b> </p>
                            </a>
                        );
                    }
                }
            //}
        }

        return (

            <div class="list-group">
                {theNotes}
            </div>

        );
    }
}

export default NotificationBlocks;
