import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class CourseCard extends Component{

    constructor(props){
        super(props);

    }


    render(){
        let {cno, courseName, instructor} = this.props.courses;

        return (
            <div className="course-card">
                <Card width="100%"> 
                    <CardBody>
                        <CardTitle>{cno}</CardTitle>
                        <CardTitle>{courseName}</CardTitle>
                        <CardTitle>{instructor}</CardTitle>

                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default CourseCard;