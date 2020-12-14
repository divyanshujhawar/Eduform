import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

import CourseProfile from '../.././utils/CourseProfile';
import UserProfile from '../.././utils/UserProfile';

class GradeBlocks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            course: this.props.whichCourse,
            userPassedInput: this.props.userQueriedItem,

            assignments: []
        }

        this.fetchStudentGrades = this.fetchStudentGrades.bind(this);

    }

    fetchStudentGrades() {

        try {
            const response = fetch('/student/getCourseAssignments/' + this.state.course + '?email=' + UserProfile.getEmail(), {
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

    componentDidMount() {
        this.fetchStudentGrades();
    }


    render() {

        console.log(this.state.assignments);

        let query = this.props.userQueriedItem;

        const theAssignments = [];
        var percentagePt = 0;
        var percentageMax = 0;
        var totalPts = '-';
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {

            if (this.state.assignments[i].assignmentSubmissions.length > 0) {

                console.log(this.state.assignments[i].filename);
                console.log(percentagePt, percentageMax);


                for (var k = 0; k < this.state.assignments[i].assignmentSubmissions.length; k++) {

                    if (this.state.assignments[i].assignmentSubmissions[k].studentEmail === UserProfile.getEmail()) {

                        if (query === "") {

                            if (this.state.assignments[i].assignmentSubmissions[k].points === 0) {

                                totalPts = '-';
                            }
                            else {

                                totalPts = Number(this.state.assignments[i].assignmentSubmissions[k].points);
                                percentagePt += Number(this.state.assignments[i].assignmentSubmissions[k].points);
                                percentageMax += Number(this.state.assignments[i].maxPoints);

                            }
                            theAssignments.push(
                                <tr>
                                    <td style={{ backgroundColor: '#dddddd', color: '#1089ff', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</td>
                                    <td style={{ textAlign: 'center', fontSize: '1.1rem' }} class="two wide column"> {totalPts} / {this.state.assignments[i].maxPoints}</td>
                                </tr>
                            );
                        }

                        else {

                            if ((this.state.assignments[i].filename.substr(0, query.length).toLowerCase()) === (query.toLowerCase())) {
                                if (this.state.assignments[i].assignmentSubmissions[k].points === 0) {
                                    totalPts = '-';
                                }
                                else {
                                    totalPts = Number(this.state.assignments[i].points);
                                    percentagePt += Number(this.state.assignments[i].points);
                                    percentageMax += Number(this.state.assignments[i].maxPoints);
                                }


                                theAssignments.push(
                                    <tr>
                                        <td style={{ backgroundColor: '#dddddd', color: '#1089ff', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</td>
                                        <td style={{ textAlign: 'center', fontSize: '1.1rem' }} class="two wide column"> {totalPts} / {this.state.assignments[i].maxPoints}</td>
                                    </tr>
                                );

                            }

                        }
                    }
                }
            }
            else {
                if ((this.state.assignments[i].filename.substr(0, query.length).toLowerCase()) === (query.toLowerCase())) {

                    totalPts = '-';
                    //percentagePt += Number(this.state.assignments[i].points);
                    percentageMax += Number(this.state.assignments[i].maxPoints);

                    theAssignments.push(
                        <tr>
                            <td style={{ backgroundColor: '#dddddd', color: '#1089ff', fontSize: '1.2rem' }}>{this.state.assignments[i].filename}</td>
                            <td style={{ textAlign: 'center', fontSize: '1.1rem' }} class="two wide column"> {totalPts} / {this.state.assignments[i].maxPoints}</td>
                        </tr>
                    );

                }
            }

        }

        console.log("Pt: ", percentagePt);
        console.log("Max: ", percentageMax);


        var percentage = ((percentagePt / percentageMax) * 100).toFixed(2);
        var letterGrade = '';
        if (percentage < 60) {
            letterGrade = 'F';
        }
        else if (percentage > 60 && percentage < 64) {
            letterGrade = 'D-';
        }
        else if (percentage > 64 && percentage < 67) {
            letterGrade = 'D';
        }
        else if (percentage > 67 && percentage < 70) {
            letterGrade = 'D+';
        }
        else if (percentage > 70 && percentage < 74) {
            letterGrade = 'C-';
        }
        else if (percentage > 74 && percentage < 77) {
            letterGrade = 'C';
        }
        else if (percentage > 77 && percentage < 80) {
            letterGrade = 'C+';
        }
        else if (percentage > 80 && percentage < 84) {
            letterGrade = 'B-';
        }
        else if (percentage > 84 && percentage < 87) {
            letterGrade = 'B';
        }
        else if (percentage > 87 && percentage < 90) {
            letterGrade = 'B+';
        }
        else if (percentage > 90 && percentage < 94) {
            letterGrade = 'A-';
        }
        else if (percentage > 94 && percentage < 97) {
            letterGrade = 'A';
        }
        else if (percentage > 97) {
            letterGrade = 'A+';
        }

        return (

            <table style={{ width: '90%' }} class="ui definition table">
                <tr>
                    <td style={{ backgroundColor: '#febf63', color: 'black' }}></td>
                    <td style={{ backgroundColor: '#febf63', color: 'black' }}></td>
                </tr>
                <tbody>
                    {theAssignments}
                    <tr>
                        <td style={{ backgroundColor: '#dddddd', color: 'black', fontSize: '1.5rem' }}>Total ({letterGrade})</td>
                        <td style={{ textAlign: 'center', fontSize: '1.3rem' }} class="two wide column"><b>{percentage}% </b></td>
                    </tr>
                </tbody>
            </table>


        );
    }
}

export default GradeBlocks;
