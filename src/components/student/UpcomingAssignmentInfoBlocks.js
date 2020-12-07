import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

import UserProfile from '../.././utils/UserProfile';

class UpcomingAssignmentInfoBlocks extends React.Component {

    constructor(props) {
        super(props);

        var cssType = 'edu';
        if (this.props.passStyler) {
            cssType = this.props.passStyler;
        }
        else {
            cssType = 'edu';
        }

        const batVals = ['batbackground', 'batwords', 'batwords2'];
        const eduVals = ['backgroundGenericCourse', 'teachWords', 'teachWords2'];
        const iuVals = ['iubackground', 'iuwords', 'iuwords'];
        const dinoVals = ['dinobackground', 'dinowords2', 'dinowords2'];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;

        if (cssType === 'dino') {
            whichCssbackground = dinoVals[0];
            whichCsswords = dinoVals[1];
            whichCssothers = dinoVals[2];
        }
        else if (cssType === 'bat') {
            whichCssbackground = batVals[0];
            whichCsswords = batVals[1];
            whichCssothers = batVals[2];
        }
        else if (cssType === 'iu') {
            whichCssbackground = iuVals[0];
            whichCsswords = iuVals[1];
            whichCssothers = iuVals[2];
        }
        else {
            whichCssbackground = eduVals[0];
            whichCsswords = eduVals[1];
            whichCssothers = eduVals[2];
        }

        this.state = {
            // Query here specifically by due_date, if due_date matches the selectedDate below. Doing a makeshift query in render()
            // below with an if statement.
            //IF we don't do this, also okay, just put all assignment JSON info here.
            // IF you do, then remove the if statement form inside the render() portion.
            selectedDate: this.props.datePass,

            assignments: [],

            
            pageTheme: cssType,
            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers
        }

        this.getNextWeekAssignments = this.getNextWeekAssignments.bind(this);

    }

    componentDidMount() {
        this.getNextWeekAssignments();
    }

    getNextWeekAssignments() {
        try {
            const response = fetch('/student/getNextWeekAssignments/' + 'student@iu.edu', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        assignments: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    render() {

        console.log("Assignments: ",this.state.assignments);


        const upcoming = [];
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {

            var tempDate = this.state.assignments[i].dueDate

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;

            if (queryDate === this.state.selectedDate ) // and where teacher email is included
            {
                upcoming.push(
                    <div style={{borderTop: 'none',borderBottom: 'solid', borderColor: 'black', borderWidth: '1px'}} className="item">
                        <h3 className={`${this.state.others}`}> {this.state.assignments[i].filename} </h3>
                        <div className="content">
                            <div className={`${this.state.theWords}`}>
                                {this.state.assignments[i].courseCode} </div>
                            <p className={`${this.state.others}`} style={{ fontSize: '.9rem' }}> Due: {queryDate} </p>
                            <p className={`${this.state.others}`} style={{ fontSize: '.9rem' }}> {this.state.assignments[i].maxPoints} pts </p>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div className="ui celled list">
                {upcoming}
            </div>
        );
    }
}

export default UpcomingAssignmentInfoBlocks;
