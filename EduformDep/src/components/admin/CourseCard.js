import React, { Component } from "react";
import {
    Card,CardBody,CardTitle
  } from 'reactstrap';

class CourseCard extends Component{

    constructor(props){
        super(props);

    }


    render(){
        let {courseCode, courseName, courseDetails} = this.props.courses;

        return (
            <div className="course-card">
                <Card width="100%">
                    <CardBody>
                        <CardTitle>{courseCode}</CardTitle>
                        <CardTitle>{courseName}</CardTitle>
                        <CardTitle>{courseDetails}</CardTitle>

                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default CourseCard;
