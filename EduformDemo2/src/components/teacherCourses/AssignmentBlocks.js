import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import UserProfile from '../../utils/UserProfile';

class AssignmentBlocks extends React.Component {

    constructor(props) {
        super(props);

        const getSearch = this.props.whatUserSearched;

        this.state = {

            course: this.props.whichCourse,
            toggler: this.props.theTog,
            userQueriedItem: this.props.whatUserSearched,

            assignments: [],

        }

        this.getAllCourseAssignments = this.getAllCourseAssignments.bind(this);

    }

    componentDidMount() {
        this.getAllCourseAssignments();

    }


    getAllCourseAssignments() {

        try {
            const response = fetch('/teacher/getCourseAssignments/' + this.state.course + '?email=' + UserProfile.getEmail(), {
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

        let query = this.props.whatUserSearched;

        const theAssignments = [];
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {

            var id = this.state.assignments[i].filename.split('.')[0]

            var tempDate = this.state.assignments[i].dueDate;

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;

            if (query === "") {

                theAssignments.push(
                    <div style={{ marginBottom: '5px' }} className="row">
                        <div style={{ color: '#1089ff', textAlign: 'center', paddingTop: '18px', backgroundColor: '#febf63' }} className="col-md-2"><b style={{ fontSize: '1.2rem' }}> {this.state.assignments[i].courseCode}</b></div>
                        <div style={{ borderStyle: 'solid', borderWidth: '.5px', width: '810px' }}>  <button class="ui light basic button"><b style={{ color: '#febf63', fontSize: '1.2rem' }}>{this.state.assignments[i].filename.split('.')[0]}</b>
                                <p style={{ color: '#febf63' }}> Due: {queryDate} - {this.state.assignments[i].maxPoints} pts</p></button> </div>
                    </div>

                );
            }
            else {
                if ((this.state.assignments[i].filename.substr(0, query.length).toLowerCase()) === (query.toLowerCase()) ||
                    (queryDate.substr(0, query.length)) === (query) ||
                    (this.state.assignments[i].maxPoints.toString().substr(0, query.length)) === (query)) {
                    theAssignments.push(

                        <div style={{ marginBottom: '5px' }} className="row">
                            <p></p>
                            <div style={{ color: '#1089ff', textAlign: 'center', paddingTop: '18px', backgroundColor: '#febf63' }} className="col-md-2"><b style={{ fontSize: '1.2rem' }}> {this.state.assignments[i].courseCode}</b></div>
                            <div style={{ borderStyle: 'solid', borderWidth: '.5px', width: '810px' }}> <Link to={{
                                pathname: '/teacher-course/'+ this.state.course + '/assignments/' + id, passCourseState: {
                                    assignID: id, courseName: this.state.assignments[i].filename, date: this.state.assignments[i].dueDate, mp: this.state.assignments[i].maxPoints
                                }, toggleState: this.state.toggler
                            }}> <button class="ui light basic button"><b style={{ color: '#febf63', fontSize: '1.2rem' }}>{this.state.assignments[i].filename.split('.')[0]}</b>
                                    <p style={{ color: '#febf63' }}> Due Date: {queryDate} - {this.state.assignments[i].maxPoints} pts</p></button> </Link></div>
                        </div>);

                }
            }
            
        }

        return (

            <div className="container">
                {theAssignments}

            </div>

        );
    }
}

export default AssignmentBlocks;
