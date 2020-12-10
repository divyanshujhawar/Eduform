import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bootstrap2 from '../../.././node_modules/bootstrap/dist/js/bootstrap.min.js'
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Upcoming from '../teacher/Upcoming.js';
import Announce from '../teacher/TeacherAnnounceBlocks.js';
import NavBar from '../teacher/TeacherNavigation';

import CourseProfile from '../.././utils/CourseProfile';
import UserProfile from '../.././utils/UserProfile';


let teacherCourse = [];

class TeacherHome extends React.Component {
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

            //teacherCourse: [{"courseCode":"P456"}],
            teacherCourse: [],
            newAnnouncement: {},


            pastAnnouncements: [],

        
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

        this.getTeacherCourses = this.getTeacherCourses.bind(this);
        this.postTeacherAnnouncement = this.postTeacherAnnouncement.bind(this);
        this.showAnnouncements = this.showAnnouncements.bind(this);

        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
    }

    

    async postTeacherAnnouncement(event){
        event.preventDefault();

        let courseCode = document.getElementById("announceCourseCode").value;
        let announceText = document.getElementById("announceText").value;

        if (courseCode === '' || announceText === ''){
            alert("Complete the form!");
            return 
        }

        this.state.newAnnouncement.courseCode = courseCode;
        this.state.newAnnouncement.announcementText = announceText;

        try{
            const response = await fetch('/teacher/makeAnnouncement/' + 'shubham@iu.edu', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(this.state.newAnnouncement)
            })
            .then(res => res.text())
            .then(text => {

                if (text === "SUCCESS!"){
                    alert("Announcement created succesfully!");

                    document.getElementById("makeAnnouncement").reset();
                    this.setState({newAnnouncement: {}});

                    this.showAnnouncements();

                } else{
                    alert(text);
                }
                
            });

        } catch (error){
            alert(error);
        }
    }

    getTeacherCourses() {
        try {
            const response = fetch('/teacher/getCourses/' + 'shubham@iu.edu'/*UserProfile.getEmail()*/, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    teacherCourse = jsonData.result;
                    this.setState({teacherCourse: jsonData.result});

                    CourseProfile.setCourseProfile(jsonData.result);

                });

        } catch (error) {
            alert(error);
        }
    }

    displayer() {

        if (this.state.displayNav === true) {

            return (<NavBar thetog={this.state.displayNav} colorspass={this.state.pageTheme} />);
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
        this.getTeacherCourses();
        this.showAnnouncements();

    }

    showAnnouncements(){

        let past = [];

        this.setState({pastAnnouncements: []});

        past.push(
            <div class="list-group">
                <Announce/>
            </div>
        );

        this.setState({pastAnnouncements: past});

    }

    render() {

        const teacherClassData = [];

        var i = 0;
        for (i; i < this.state.teacherCourse.length; i++) {

            teacherClassData.push(<option value={this.state.teacherCourse[i].courseCode} />
            );

        }

        return (
            <div className={`${this.state.theBackground}`}>
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: `${this.state.selectheaderback}` }} className="row dashItems">

                        <h1 className={`${this.state.others}`} style={{ color: `${this.state.colorOfHeadWord}`, margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: `${this.state.colorOfHeadWord}`, marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                            {this.state.headerWord}</h1>

                    </div>
                    <div style={{ marginTop: '30px' }} className="row">
                        <div className="col col-md-1 col-sm-2"></div>
                        <div style={{ paddingRight: '20%', textAlign: 'left' }} className="flex-col-md-8 flex-col-sm-12">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />

                            <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.4rem' }}> Assignments Posted</h1>
                            <hr style={{ marginBottom: '30px' }} />
                            <Upcoming styler={this.state.pageTheme}/>
                        </div>

                        <div style={{ marginTop: '24px' }} className="flex-col-md-3 flex-col-sm-12">
                            <div className="btn-group dropleft">
                                <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <b style={{ fontSize: '1.15rem' }}>Make an Announcement</b>
                                </button>
                                <div className="dropdown-menu">
                                    <form style={{ width: '500px', height: '300px' }} class="px-4 py-3" id="makeAnnouncement" onSubmit={this.postTeacherAnnouncement} noValidate>
                                        <div class="form-group">
                                            <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                            <input list="theItems" type="text" class="form-control" id="announceCourseCode" placeholder="" />
                                            <datalist id="theItems">
                                                {teacherClassData}
                                            </datalist>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleDropdownFormPassword1"><b>Announcement</b></label>
                                            <textarea style={{ height: '125px' }} id="announceText" class="form-control" aria-label="With textarea"></textarea>
                                        </div>

                                        <button type="submit" class="btn btn-primary">Send</button>
                                    </form>
                                </div>
                            </div>
                            

                            <div style={{ marginTop: "20px" }}>
                                <h1 className="teachWords" style={{ fontSize: '2.4rem' }}> Announcements</h1>
                                <hr />
                                {this.state.pastAnnouncements}
                            </div>



                        </div>
                    </div>
                    <hr />
                </div>
                {this.displayer()}
            </div>
        );
    }
}

export default TeacherHome;
