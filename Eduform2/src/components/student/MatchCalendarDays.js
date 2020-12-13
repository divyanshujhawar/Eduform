import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import UserProfile from '../../utils/UserProfile';

class MatchCalendarDays extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            selectedDate: this.props.datePass2,
            primary: this.props.color1,
            secondary: this.props.color2,
            
            assignments: [],
        }

        this.getAllAssignmentsInMonth = this.getAllAssignmentsInMonth.bind(this);
    }

    componentDidMount() {
        this.getAllAssignmentsInMonth();

    }


    getAllAssignmentsInMonth() {

        var date = new Date();

        var month = (date.getMonth()+1).toString();
        var year = date.getFullYear().toString();

        try {
            const response = fetch('/student/getAllAssignmentsInMonth/'+ UserProfile.getEmail() + `?month=${month}&year=${year}`, {
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
        const upcoming = [];
        var color1 = "black";
        var i = 0;
        for (i; i < this.state.assignments.length; i++) {
            if (this.state.primary === "black" || this.state.secondary === "black") {
                color1 = "white";
            }
            else {
                color1 = "black";
            }

            var tempDate = this.state.assignments[i].dueDate;

            tempDate = tempDate.substring(0,10);

            var year = tempDate.substring(0,4);
            var month = tempDate.substring(5,7);
            var day = tempDate.substring(8,10);

            var queryDate = `${month}/${day}/${year}`;


            if (queryDate === this.state.selectedDate) {
                upcoming.push(
                    <button style={{ color: color1, backgroundColor: `${this.state.primary}`, borderColor: `${this.state.secondary}` }} class="button2">{this.state.assignments[i].filename} <br /> <p style={{ fontSize: '.8rem' }}>{this.state.assignments[i].courseCode}</p></button>
                );
            }
        }

        return (
            <div>
                {upcoming}
            </div>
        );
    }
}

export default MatchCalendarDays;
