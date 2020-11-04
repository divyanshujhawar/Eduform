import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';


const CourseDisplay = ({ courseCode, courseName, courseDetails}) => {
    if (!courseCode) return <div />;
    return (
        <table >
            <tbody>
                <tr>
                    <td>
                        <h5>{courseCode}</h5>
                    </td>
                    <td>
                        <h5>{courseName}</h5>
                    </td>
                    <td>
                        <h5>{courseDetails}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

class CourseDetails extends Component {
  
    constructor(props){
        super(props);
        this.state ={
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

                });

        } catch (error) {
            alert(error);
        }
    }

    render() {

        return(
            <div>
                <div id="ud-header" className="ud-header" style={{ backgroundColor: '#DEDEDE', height: '200px' }}>
                    <div >
                        <AdminNavBar />
                    </div>

                </div>

                <div className="ud-table-comp">
                    <div className="stock-container">
                        <table>
                            <thead>
                                <tr>
                                    <td style={{padding: '10px'}}>Course Code</td>
                                    <td>Course Name</td>
                                    <td>Course Description</td>
                                </tr>
                            </thead>
                        </table>
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
        );
    }
    
};

export default CourseDetails;