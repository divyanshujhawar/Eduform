import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route , withRouter } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Upcoming from '../student/UpcomingAssignments.js';
import Announce from '../student/Announcements.js';
import NavBar from '../student/NewNavbar';
import Bar from '../student/StudentNavigation.js';

import UserProfile from '../.././utils/UserProfile';
import CourseProfile from '../.././utils/CourseProfile';


class StudentHome extends Component {
    constructor(props) {
        super(props);

        var separator = null;

        var cssType = 'edu';
        if (this.props.location.colors2) {
            cssType = this.props.location.colors2;
        }
        else {
            cssType = 'edu';
        }
        var presetForNav = false;
        var defVal = 70;
        if (this.props.location.toggleState) {
            presetForNav = this.props.location.toggleState;
            if (presetForNav === true) {
                defVal = 175;
                separator = null;
            }
            else {
                defVal = 70;
                separator = <div className="col-md-1 col-sm-0"></div>;
            }
        }
        else {
            presetForNav = true;
            defVal = 175;
            separator = null;
        }

        const batVals = ["batbackground", "batwords", "batheader", "Batform", "#fddb3a", "black"];
        const eduVals = ["backgroundGenericCourse", 'teachWords', 'eduheader', "Eduform", '#febf63', "black"];
        const iuVals = ['iubackground', 'iuwords', 'iuheader', "IUform", "white", "#a20a0a"];
        const dinoVals = ['dinobackground', 'dinowords', 'dinoheader', 'Dinoform', "black", "#8db596"];

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
            pageTheme: cssType,
            displayNav: presetForNav,
            itemPad: defVal,
            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCsswords,
            pageSplit: separator,

            headerWord: wordDisplay,
            selectheaderback: headerback,
            colorOfHeadWord: headerwordcolor
        }

        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.getStudentCourses = this.getStudentCourses.bind(this);


    }
    displayer() {

        if (this.state.displayNav === true) {

            return (<Bar thetog={this.state.displayNav} colorspass={this.state.pageTheme} />);
        }
        else {
            return <p></p>;
        }
    }

    bar() {
        this.setState({ displayNav: !this.state.displayNav });
        if (this.state.itemPad === 70) {
            this.setState({ itemPad: 175, pageSplit: null });
        }
        else {
            this.setState({ itemPad: 70, pageSplit: <div className="col-md-1 col-sm-0"></div> });
        }
    }

    componentDidMount(){
        this.getStudentCourses();
    }

    getStudentCourses(){
        try {
            const response = fetch('/student/getCourses/' + 'student@iu.edu'/*UserProfile.getEmail()*/, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    CourseProfile.setCourseProfile(jsonData.result);

                    console.log(jsonData.result);

                });

        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <div className={`${this.state.theBackground}`}>
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: `${this.state.selectheaderback}` }} className="row dashItems">

                        <h1 className={`${this.state.others}`} style={{ color: `${this.state.colorOfHeadWord}`, margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: `${this.state.colorOfHeadWord}`, marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                            {this.state.headerWord}</h1>

                    </div>
                    <div style={{ marginTop: '30px' }} className="row">

                        <div style={{ paddingRight: '20%', textAlign: 'left' }} className="flex-col-md-8 flex-col-sm-12">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                            <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.6rem' }}> Upcoming Assignments</h1>
                            <hr style={{marginBottom: '30px' }} />
                            <Upcoming styler={this.state.pageTheme} />
                        </div>
                        {this.state.pageSplit}
                        <div style={{ marginTop: '100px', textAlign: 'left' }} className="flex-col-md-3 flex-col-sm-12">
                            <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.6rem' }}> Announcements</h1>
                            <hr style={{marginBottom: '30px' }} />
                            <Announce getstyle={this.state.pageTheme} />
                        </div>
                    </div>
                    <hr />
                    {this.displayer()}
                </div>

            </div>
        );
    }
}

export default withRouter (StudentHome);
