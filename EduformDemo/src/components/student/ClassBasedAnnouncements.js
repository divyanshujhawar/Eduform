import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class ClassBasedAnnouncements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            theClass: this.props.currentClass,
            classAnnouncements : []
           
          
        }

        this.getClassAnnouncements = this.getClassAnnouncements.bind(this);
    }

    getClassAnnouncements(){

        try {
            const response = fetch('/student/getLastWeekCourseAnnouncements/' + this.state.theClass, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        classAnnouncements: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    componentDidMount(){
        this.getClassAnnouncements();
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
        for (i; i < this.state.classAnnouncements.length; i++) {
            var passedDay = Date.parse(this.state.classAnnouncements[i].announcementDate);
            
            var tempDate = this.state.classAnnouncements[i].announcementDate;

            var queryDate = '';

            if(tempDate){
                tempDate = tempDate.substring(0,10);

                var year = tempDate.substring(0,4);
                var month = tempDate.substring(5,7);
                var day = tempDate.substring(8,10);

                queryDate = `${month}/${day}/${year}`;
            }

            

            if (((Math.abs(time - passedDay) / milliTime) <= 14) && (this.state.theClass === this.state.classAnnouncements[i].courseCode)) {  // This checks to make sure time is within 2 week span for announcements
                announceItems.push(
                    <div style={{ marginBottom: '2px' }} class="item">
                        <div class="content">
                            <a style={{ marginBottom: '7px' }} class="header"><b style={{ fontSize: '1.1rem', color: '#febf63' }}>{this.state.classAnnouncements[i].courseCode} </b></a>
                            <div style={{ color: 'white' }} class="description">{this.state.classAnnouncements[i].announcementText}</div>
                            <p style={{ color: '#febf63' }}> {queryDate}  </p>
                        </div>
                        <hr />
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

export default ClassBasedAnnouncements;
