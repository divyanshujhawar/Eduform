import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Home from '../dashboard/TeacherHome.js';

class TeacherAnnounceBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //theCourses: this.props.theCourses,

            //lastWeekAnnouncements: [{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"},
            //{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"}
            //,{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"}],

            lastWeekAnnouncements: []

        }

        this.getLastWeekAnnouncements = this.getLastWeekAnnouncements.bind(this);
    }


    componentDidMount(){
        this.getLastWeekAnnouncements();
    }

    getLastWeekAnnouncements(){
        try {
            const response = fetch('/teacher/getLastWeekAnnouncements/' + 'shubham@iu.edu', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                    this.setState({
                        lastWeekAnnouncements: jsonData.result
                    });


                });

        } catch (error) {
            alert(error);
        }
    }



    render() {

        const theNotes = [];
        var i = 0;

        for (i; i < this.state.lastWeekAnnouncements.length; i++) {

            var tempDate = this.state.lastWeekAnnouncements[i].announcementDate;

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;
            
            theNotes.push(
                <a style={{ marginBottom: '5px', backgroundColor: '#1089ff' }} href="#" class="item">
                    <a style={{ color: '#febf63' }} class="header">{this.state.lastWeekAnnouncements[i].courseCode}</a>
                    <div style={{ color: 'white' }} class="description">{this.state.lastWeekAnnouncements[i].announcementText}</div>
                    <p style={{ color: '#febf63' }}><b> {queryDate} </b> </p>
                    <hr />
                </a>
            );

            
        }


        return (

            <div>
                {theNotes}
            </div>

        );
    }
}
export default TeacherAnnounceBlocks;
