import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Course from './GenericCourse.js';

import UserProfile from '../.././utils/UserProfile';
import CourseProfile from '../.././utils/CourseProfile';

class CourseBlocks extends React.Component {

    constructor(props) {
        super(props);

        var cssType = 'edu';
        if (this.props.styler) {
            cssType = this.props.styler;
        }
        else {
            cssType = 'edu';
        }

        const batVals = ["Sedgwick Ave Display", "batwords", "batheader", "Batform", "#fddb3a", "black", "#4c4c4c"];
        const eduVals = ["'Noto Serif TC', serif", 'teachWords', 'eduheader3', "Eduform", '#febf63', "black", "#1089ff"];
        const iuVals = ['Crimson Text', 'iuwords', 'iuheader', "IUform", "white", "#a20a0a", "#a20a0a"];
        const dinoVals = ["'Underdog', cursive", 'dinowords', 'dinoheader', 'Dinoform', "white", "#8db596", "#cbbcb1"];

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

        this.state = {

            studentCourses: [{"courseName" : "SE", "courseCode" : "P456"},{"courseName" : "SE", "courseCode" : "P456"}
        ,{"courseName" : "SE", "courseCode" : "P456"},{"courseName" : "SE", "courseCode" : "P456"}],

            //studentCourses: [],

            pageTheme: cssType,

            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers,
            headerWord: wordDisplay,
            selectheaderback: headerback,
            colorOfHeadWord: headerwordcolor,
            alternate: altcolor
        }

        this.getStudentCourses = this.getStudentCourses.bind(this);
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

                    this.setState({
                        studentCourses: jsonData.result
                    });

                    CourseProfile.setCourseProfile(jsonData.result);

                    console.log(jsonData.result);

                });

        } catch (error) {
            alert(error);
        }
    }

  
    render() {

        
        const courseItems = [];

        let i = 0;
        for (i; i < this.state.studentCourses.length; i++) {
            courseItems.push(
                <div style={{ paddingLeft: '40px', marginBottom: "20px" }} className="col-md-4 col-sm-12">
                    <Link to={{
                        pathname: '/course/' + this.state.studentCourses[i].courseCode
                    }}>
                        <a style={{ fontFamily: `${this.state.theBackground}`, backgroundColor: `${this.state.selectheaderback}` }} class="ui card">
                            <div class="content">
                                <div style={{ fontFamily: `${this.state.theBackground}`, color: `${this.state.alternate}` }} class="header">{this.state.studentCourses[i].courseName}</div>
                                <div class="meta">
                                    <span style={{ fontFamily: `${this.state.theBackground}`, color: 'black' }} class="category">{this.state.studentCourses[i].courseCode}</span>
                                </div>
                                <div class="description">
                                    <p style={{ fontFamily: `${this.state.theBackground}`, color: `${this.state.alternate}` }}>Fall 2020</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            );
        }


        return (
            <div className="container">
                <div className="row">
                    {courseItems}
                </div>
            </div>
        );
    }
}

export default CourseBlocks;
