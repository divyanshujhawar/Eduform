import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class UpcomingAnnouncementsBlocks extends React.Component {

    constructor(props) {
        super(props);

        var cssType = 'edu';
        if (this.props.styler) {
            cssType = this.props.styler;
        }
        else {
            cssType = 'edu';
        }

        const batVals = ["batbackground", "batwords", "batheader", "Batform", "#fddb3a", "batwords2"];
        const eduVals = ["backgroundGenericCourse", 'teachWords', 'eduheader', "Eduform", '#febf63', "eduheader2"];
        const iuVals = ['iubackground', 'iuwords', 'iuheader', "IUform", "white", "iuwords2"];
        const dinoVals = ['dinobackground', 'dinowords', 'dinoheader', 'Dinoform', "black", "dinowords2"];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;
        var wordDisplay;
        var headerback;
        var headerwordcolor;

        if (cssType === 'dino') {
            whichCssbackground = dinoVals[0];
            whichCsswords = dinoVals[1];
            whichCssothers = dinoVals[2];
            wordDisplay = dinoVals[3];
            headerback = dinoVals[4];
            headerwordcolor = dinoVals[5];
        }
        else if (cssType === 'bat') {
            whichCssbackground = batVals[0];
            whichCsswords = batVals[1];
            whichCssothers = batVals[2];
            wordDisplay = batVals[3];
            headerback = batVals[4];
            headerwordcolor = batVals[5];
        }
        else if (cssType === 'iu') {
            whichCssbackground = iuVals[0];
            whichCsswords = iuVals[1];
            whichCssothers = iuVals[2];
            wordDisplay = iuVals[3];
            headerback = iuVals[4];
            headerwordcolor = iuVals[5];
        }
        else {
            whichCssbackground = eduVals[0];
            whichCsswords = eduVals[1];
            whichCssothers = eduVals[2];
            wordDisplay = eduVals[3];
            headerback = eduVals[4];
            headerwordcolor = eduVals[5];
        }


        this.state = {

            lastWeekAnnouncements: [{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"},
            {"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"}
            ,{"announcementDate" : "11/29/2020", "courseCode": "P465", "announcementText" : "Hello how are you?"}],

            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers,
            headerWord: wordDisplay,
            selectheaderback: headerback,
            colorOfHeadWord: headerwordcolor
        }
    }

    componentDidMount(){
        this.getLastWeekAnnouncements();
    }

    getLastWeekAnnouncements(){
        try {
            const response = fetch('/student/getLastWeekAnnouncements/' + 'student@iu.edu', {
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

        var month = new Date().getMonth(); // 0-11
        var day = new Date().getDate(); // 1-31
        var year = new Date().getFullYear();
        var final = (month + 1) + '/' + day + '/' + year;
        var stringFinal = final.toString();
        var time = Date.parse(stringFinal);

        var milliTime = (1000 * 24 * 60 * 60);

        const announceItems = [];

        let i = 0;
        for (i; i < this.state.lastWeekAnnouncements.length; i++) {
            var passedDay = Date.parse(this.state.lastWeekAnnouncements[i].announcementDate);
            if ((Math.abs(time - passedDay) / milliTime) <= 14) {  // This checks to make sure time is within 2 week span for announcements
                announceItems.push(
                    <div style={{marginBottom: '2px' }} class="item">
                        <div class="content">
                            <a style={{ marginBottom: '7px' }} className="header"> <b className={`${this.state.theWords}`} style={{ fontSize: '1.1rem' }}> {this.state.lastWeekAnnouncements[i].courseCode} </b> </a>
                            <div style={{ color: 'white' }} className="description">{this.state.lastWeekAnnouncements[i].announcementText}</div>
                            <p className={`${this.state.theWords}`}> <b> {this.state.lastWeekAnnouncements[i].announcementDate} </b> </p>
                        </div>
                        <hr style={{borderTop: 'none',height: '.2px',backgroundColor: 'black'}} />
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

export default UpcomingAnnouncementsBlocks;
