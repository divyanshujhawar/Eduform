import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class AssignmentBlocks extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        course : this.props.whichCourse,
        assignments: [
          {
            assign_id: 1009,
            course_id: 23,
            user_id: 2,
            course_code: 'CS1009',
            teacher_email: 'd',
            filename: 'Lab 7',
            max_points: '120',
            creation_date: 's',
            due_date: '11/05/2020',
            assignment_path : 'Computer Engineering'
          },
          {
            assign_id: 1007,
            course_id: 56,
            user_id: 2,
            course_code: 'CS1990',
            teacher_email: 'd',
            filename: 'Assignment 3',
            max_points: '75',
            creation_date: 's',
            due_date: '11/06/2020',
            assignment_path : 'Object Oriented Programming'
          },
          {
            assign_id: 1006,
            course_id: 11,
            user_id: 2,
            course_code: 'CS1006',
            teacher_email: 'd',
            filename: 'Assignment 5',
            max_points: '25',
            creation_date: 's',
            due_date: '11/13/2020',
            assignment_path : 'Software Engineering I'
          },
          {
            assign_id: 1005,
            course_id: 11,
            user_id: 2,
            course_code: 'CS1006',
            teacher_email: 'd',
            filename: 'Milestone 3',
            max_points: '150',
            creation_date: 's',
            due_date: '11/12/2020',
            assignment_path : 'Software Engineering I'
          },
          {
            assign_id: 1004,
            course_id: 4,
            user_id: 2,
            course_code: 'CS1113',
            teacher_email: 'd',
            filename: 'Midterm',
            max_points: '100',
            creation_date: 's',
            due_date: '11/05/2020',
            assignment_path : 'Big Data'
          },
          {
            assign_id: 1003,
            course_id: 12,
            user_id: 2,
            course_code: 'CS2145',
            teacher_email: 'd',
            filename: 'Assignment 6',
            max_points: '200',
            creation_date: 's',
            due_date: '11/03/2020',
            assignment_path : 'Database Concepts'
          },
          {
            assign_id: 1002,
            course_id: 6,
            user_id: 2,
            course_code: 'CS1111',
            teacher_email: 'divyanshu@iu.edu',
            filename: 'Lab 6',
            max_points: '100',
            creation_date: 's',
            due_date: '11/03/2020',
            assignment_path : 'Intro to Computer Science'
          },
          {
            assign_id: 1001,
            course_id: 6,
            user_id: 2,
            course_code: 'CS1111',
            teacher_email: 'divyanshu@iu.edu',
            filename: 'Assignment 5',
            max_points: '150',
            creation_date: '2020-11-01',
            due_date: '11/10/2020',
            assignment_path : 'Intro to Computer Science'
          }
        ]
    }

  }

  render(){

    const theAssignments = [];
     var i = 0;
     for(i; i < this.state.assignments.length; i++){
       if(this.state.course===this.state.assignments[i].course_id){
         theAssignments.push(
            <div className="item">
              <a style={{fontSize: '1.2rem', marginBottom: '10px'}} className="header">{this.state.assignments[i].filename}</a>
              <div className="content">
                  <b style={{fontSize:'1rem'}}>{this.state.assignments[i].course_code} </b>
                <div className="description"> Due: {this.state.assignments[i].due_date}</div>
            </div>
          </div>
          );
        }
     }

    return(

        <div className="ui relaxed divided list">
          {theAssignments}
        </div>

    );
  }
}

export default AssignmentBlocks;
