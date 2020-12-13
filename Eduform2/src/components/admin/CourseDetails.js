import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import Logo from '../.././assets/edLogo.png';
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';

const CourseDisplay = ({ courseCode, courseName, courseDetails }) => {
    if (!courseCode) return <div />;
    return (

        <tr style={{ color: 'white', backgroundColor: '#1089ff', height: '200px' }} className="adminWordHead">
            <td style={{ borderColor: 'white', width: '200px' }}>
                {courseCode}
            </td>
            <td style={{ borderColor: 'white', width: '350px' }}>
                {courseName}
            </td>
            <td style={{ borderColor: 'white', width: '500px' }}>
                {courseDetails}
            </td>
        </tr>

    );
};

class CourseDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /*
            courses: [{
                "courseCode": "P465", "courseName": "Software Engineering", "courseDetails":
                    "dfmfkndskfnkdsanfkjnadfjk jasdfjkdasbfj jsdfkjdshfjkhdsj asdkjfndskljabfjb njfadsnjfkbadsjknbfakjlsbdkjfbdasjfb kfnasdkjlfbdsaljbkjfbadsfb jbjfkbadsjkbbbbbbbbbfbb  jsbdfj nbsdkjfbsf jsbdfjfnsadjbjkdnasfljkb kdnsfjksabfd kjfndskajnf"
            },
            {
                "courseCode": "P465", "courseName": "Software Engineering", "courseDetails":
                    "dfmfkndskfnkdsanfkjnadfjk jasdfjkdasbfj jsdfkjdshfjkhdsj asdkjfndskljabfjb njfadsnjfkbadsjknbfakjlsbdkjfbdasjfb kfnasdkjlfbdsaljbkjfbadsfb jbjfkbadsjkbbbbbbbbbfbb  jsbdfj nbsdkjfbsf jsbdfjfnsadjbjkdnasfljkb kdnsfjksabfd kjfndskajnf"
            }]
            */

            courses: []
        }
    }

    componentDidMount() {
        this.getCourses();

    }

    getCourses() {
        try {
            const response = fetch('/admin/getAllCourses', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        courses: jsonData.result
                    });

                    console.log("The courses we get: ", this.state.courses);

                });

        } catch (error) {
            alert(error);
        }
    }

    render() {

        return (
            <div className="adminBackground">
                <div style={{ paddingRight: '5%', paddingLeft: '190px' }} className="flex-container">
                    <div style={{ marginBottom: '20px', paddingTop: '20px' }} className="row">
                        <div style={{ textAlign: 'left' }} className="flex-col-md-8 flex-col-sm-12">
                            <img style={{ backgroundColor: '#1089ff', width: '70px', height: '70px', marginTop: '2.5%' }} src={Logo} alt="edLogo" />
                            <h1 className="adminWordHead" style={{ fontSize: '2.6rem' }}> Course Details</h1>
                            <hr style={{ backgroundColor: 'black', marginBottom: '20px' }} />

                        </div>
                    </div>

                    <div >
                        <AdminNavBar />
                    </div>
                    <div className="row">
                        <div style={{ backgroundColor: '#1089ff' }} className="ui table">

                            <thead className="adminWordHead">
                                <tr>
                                    <th style={{ borderColor: '#1089ff', width: '200px', padding: '10px' }}>Course Code</th>
                                    <th style={{ borderColor: '#1089ff', width: '350px' }} >Course Name</th>
                                    <th style={{ borderColor: '#1089ff', width: '500px' }}>Course Description</th>
                                </tr>
                            </thead>

                            {this.state.courses.map((data, key) => {
                                return (
                                    <div key={key}>
                                        <CourseDisplay
                                            key={key}
                                            courseCode={data.courseCode}
                                            courseName={data.courseName}
                                            courseDetails={data.courseDetails}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

        );
    }

};

export default CourseDetails;
