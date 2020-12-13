import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Home from '../dashboard/TeacherHome.js';

import UserProfile from '../.././utils/UserProfile';

class TeacherAnnounceBlocks extends React.Component {

    constructor(props) {
        super(props);

        var cssType = 'edu';
        if(this.props.styler){
          cssType = this.props.styler;
        }
        else{
          cssType = 'edu';
        }

        const batVals = ['white', 'batwords2', "Sedgwick Ave Display"];
        const eduVals = ['#febf63', 'teachWords', "'Noto Serif TC', serif"];
        const iuVals = ['white', 'iuwords2', 'Crimson Text'];
        const dinoVals = ['black', 'dinowords', "'Underdog', cursive"];
        const darkVals = ["#bc6ff1", "darkother", "'Jim Nightshade'"];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;

        if(cssType === 'dino')
        {
          whichCssbackground = dinoVals[0];
          whichCsswords = dinoVals[1];
          whichCssothers = dinoVals[2];
        }
        else if(cssType === 'bat')
        {
          whichCssbackground = batVals[0];
          whichCsswords = batVals[1];
          whichCssothers = batVals[2];
        }
        else if(cssType === 'iu'){
          whichCssbackground = iuVals[0];
          whichCsswords = iuVals[1];
          whichCssothers = iuVals[2];
        }
        else if(cssType === 'night'){
          whichCssbackground = darkVals[0];
          whichCsswords = darkVals[1];
          whichCssothers = darkVals[2];
        }
        else{
          whichCssbackground = eduVals[0];
          whichCsswords = eduVals[1];
          whichCssothers = eduVals[2];
        }

        this.state = {
            //theCourses: this.props.theCourses,

            //lastWeekAnnouncements: [{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"},
            //{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"}
            //,{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"}],

            lastWeekAnnouncements: [],
            pageTheme : cssType,
            theBackground : whichCssbackground,
            theWords : whichCsswords,
            others : whichCssothers

        }

        this.getLastWeekAnnouncements = this.getLastWeekAnnouncements.bind(this);
    }


    componentDidMount(){
        this.getLastWeekAnnouncements();
    }

    getLastWeekAnnouncements(){
        try {
            const response = fetch('/teacher/getLastWeekAnnouncements/' + UserProfile.getEmail(), {
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
