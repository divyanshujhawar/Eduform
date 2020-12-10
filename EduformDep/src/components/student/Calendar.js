import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import MatchDays from '../student/MatchCalendarDays';

class Calendar extends React.Component {


    constructor(props) {
        super(props);
        var day = new Date().getDate();
        var dayOfWeek = new Date().getDay();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        const daysOfWeek1Keys = [{ day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }];
        const daysOfWeek2Keys = [{ day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }];
        const daysOfWeek3Keys = [{ day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }];
        const daysOfWeek4Keys = [{ day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }];
        const daysOfWeek5Keys = [{ day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }, { day: '' }];

        var cssType = 'edu';
        if (this.props.styler) {
            cssType = this.props.styler;
        }
        else {
            cssType = 'edu';
        }

        const batVals = ["Sedgwick Ave Display", "batwords", "batheader", "Batform", "#fddb3a", "black", "#4c4c4c"];
        const eduVals = ["'Noto Serif TC', serif", 'teachWords', 'eduheader3', "Eduform", '#febf63', "black", "#1089ff"];
        const iuVals = ['Crimson Text', 'iuwords', 'iuheader', "IUform", "black", "#a20a0a", "#a20a0a"];
        const dinoVals = ["'Underdog', cursive", 'dinowords', 'dinoheader', 'Dinoform', "black", "#8db596", "#cbbcb1"];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;
        var wordDisplay;
        var headerback;
        var headerwordcolor;
        var altcolor;

        if (cssType === 'dino') {
            whichCssbackground = dinoVals[0];
            whichCsswords = dinoVals[1];
            whichCssothers = dinoVals[2];
            wordDisplay = dinoVals[3];
            headerback = dinoVals[4];
            headerwordcolor = dinoVals[5];
            altcolor = dinoVals[6];
        }
        else if (cssType === 'bat') {
            whichCssbackground = batVals[0];
            whichCsswords = batVals[1];
            whichCssothers = batVals[2];
            wordDisplay = batVals[3];
            headerback = batVals[4];
            headerwordcolor = batVals[5];
            altcolor = batVals[6];
        }
        else if (cssType === 'iu') {
            whichCssbackground = iuVals[0];
            whichCsswords = iuVals[1];
            whichCssothers = iuVals[2];
            wordDisplay = iuVals[3];
            headerback = iuVals[4];
            headerwordcolor = iuVals[5];
            altcolor = iuVals[6];
        }
        else {
            whichCssbackground = eduVals[0];
            whichCsswords = eduVals[1];
            whichCssothers = eduVals[2];
            wordDisplay = eduVals[3];
            headerback = eduVals[4];
            headerwordcolor = eduVals[5];
            altcolor = eduVals[6];
        }

        var i = day;
        var dayOfWeekTracker = dayOfWeek;
        while (i > 1) {
            if (dayOfWeekTracker === 6) {
                dayOfWeekTracker = 0;
            }
            else {
                dayOfWeekTracker += 1;
            }

            i -= 1;
        }
        var numDays = 0;
        if (month === 2 || month === 4 || month === 6 || month === 9 || month === 11) {
            numDays = 30;
        }
        else {
            numDays = 31;
        }

        if (month < 10) {
            month = '0' + month;
        }
        const week1 = [];
        const week2 = [];
        const week3 = [];
        const week4 = [];
        const week5 = [];

        var iter = 0;
        var p = dayOfWeekTracker;
        while (p < dayOfWeekTracker) {
            daysOfWeek1Keys[iter].day = 'noday';
            p += 1;
            iter += 1;
        }
        var week = 1;
        var dateToPass = '';

        var j = 1;
        for (j; j <= numDays; j++) {
            if (iter === 7) {
                iter = 0;
                week += 1;
            }
            if (j < 10) {
                dateToPass = month + '/' + '0' + j + '/' + year;
            }
            else {
                dateToPass = month + '/' + j + '/' + year;
            }



            if (week === 1) {
                daysOfWeek1Keys[iter].day = dateToPass;
            }
            else if (week === 2) {
                daysOfWeek2Keys[iter].day = dateToPass;
            }
            else if (week === 3) {
                daysOfWeek3Keys[iter].day = dateToPass;
            }
            else if (week === 4) {
                daysOfWeek4Keys[iter].day = dateToPass;
            }
            else {
                daysOfWeek5Keys[iter].day = dateToPass;
            }
            iter += 1;

        }
        var num = iter;
        while (num < 7) {
            daysOfWeek5Keys[iter].day = 'noday';
            num += 1;
        }

        const theMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];


        this.state = {
            weekly1: daysOfWeek1Keys,
            weekly2: daysOfWeek2Keys,
            weekly3: daysOfWeek3Keys,
            weekly4: daysOfWeek4Keys,
            weekly5: daysOfWeek5Keys,
            theStartOfMonth: dayOfWeekTracker,
            myMonth: theMonths[month - 1],
            sideBarState: '',

            pageTheme: cssType,

            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers,
            headerWord: wordDisplay,
            selectheaderback: headerback,
            colorOfHeadWord: headerwordcolor,
            alternate: altcolor
        }
    }

    render() {
        const theWeek1 = [];
        const theWeek2 = [];
        const theWeek3 = [];
        const theWeek4 = [];
        const theWeek5 = [];

        var j = 0;
        var iters = 0;
        var date = '';
        for (j; j < this.state.weekly1.length; j++) {
            if (this.state.weekly1[j].day === 'noday') {
                date = '';
            }
            else {
                date = this.state.weekly1[j].day.substring(0, 5);
            }
            if (iters === 2 || iters === 4 || iters === 6) {
                theWeek1.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly1[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} />  </div>
                );
                theWeek1.push(<div class="w-20"></div>);

            }
            else {
                theWeek1.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly1[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
            }
            iters += 1;
        }

        j = 0;
        iters = 0;
        date = '';
        for (j; j < this.state.weekly2.length; j++) {
            if (this.state.weekly2[j].day === 'noday') {
                date = '';
            }
            else {
                date = this.state.weekly2[j].day.substring(0, 5);;
            }
            if (iters === 2 || iters === 4 || iters === 6) {
                theWeek2.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly2[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
                theWeek2.push(<div class="w-20"></div>);
            }
            else {
                theWeek2.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly2[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
            }
            iters += 1;
        }

        j = 0;
        iters = 0;
        date = '';
        for (j; j < this.state.weekly3.length; j++) {
            if (this.state.weekly3[j].day === 'noday') {
                date = '';
            }
            else {
                date = this.state.weekly3[j].day.substring(0, 5);;
            }
            if (iters === 2 || iters === 4 || iters === 6) {
                theWeek3.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly3[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
                theWeek3.push(<div class="w-20"></div>);
            }
            else {
                theWeek3.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly3[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
            }
            iters += 1;
        }

        j = 0;
        iters = 0;
        date = '';
        for (j; j < this.state.weekly4.length; j++) {
            if (this.state.weekly4[j].day === 'noday') {
                date = '';
            }
            else {
                date = this.state.weekly4[j].day.substring(0, 5);;
            }
            if (iters === 2 || iters === 4 || iters === 6) {
                theWeek4.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly4[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
                theWeek4.push(<div class="w-20"></div>);
            }
            else {
                theWeek4.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly4[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
            }
            iters += 1;
        }

        j = 0;
        iters = 0;
        date = '';
        for (j; j < this.state.weekly5.length; j++) {
            if (this.state.weekly5[j].day === 'noday') {
                date = '';
            }
            else {
                date = this.state.weekly5[j].day.substring(0, 5);
            }
            if (iters === 2 || iters === 4 || iters === 6) {
                theWeek5.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly5[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
                theWeek5.push(<div class="w-20"></div>);
            }
            else {
                theWeek5.push(
                    <div style={{ borderLeft: 'solid', borderBottom: 'solid', borderColor: `${this.state.selectheaderback}`, height: '150px', backgroundColor: 'white' }} class="col"><b>{date}</b> <br />
                        <MatchDays datePass2={this.state.weekly5[j].day} color1={this.state.selectheaderback} color2={this.state.alternate} /> </div>
                );
            }
            iters += 1;
        }

        return (

            <div>

                <h1 className={`${this.state.theWords}`} style={{ textAlign: 'center', fontSize: '2.4rem' }}>{this.state.myMonth}</h1>
                <div class="row">
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Sunday</h2></div>
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Monday</h2></div>

                    <div class="w-20"></div>
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Tuesday</h2></div>
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Wednesday</h2></div>

                    <div class="w-20"></div>
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Thursday</h2></div>
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Friday</h2></div>

                    <div class="w-20"></div>
                    <div style={{ backgroundColor: `${this.state.selectheaderback}` }} class="col"><h2 style={{ color: `${this.state.alternate}`, fontFamily: `${this.state.theBackground}` }}>Saturday</h2></div>
                </div>


                <div class="row">
                    {theWeek1}
                </div>
                <div class="row">
                    {theWeek2}
                </div>
                <div class="row">
                    {theWeek3}
                </div>
                <div class="row">
                    {theWeek4}
                </div>
                <div class="row">
                    {theWeek5}
                </div>

            </div>


        );
    }
}

export default Calendar;
