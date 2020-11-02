import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class UpcomingAssignmentInfoBlocks extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      // Query here specifically by due_date, if due_date matches the selectedDate below. Doing a makeshift query in render()
      // below with an if statement.
      //IF we don't do this, also okay, just put all assignment JSON info here.
      // IF you do, then remove the if statement form inside the render() portion.
        selectedDate : this.props.datePass,
        assignments: [
          {
            assign_id: 1009,
            course_id: 23,
            user_id: 2,
            course_code: 'CS3440',
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
            course_code: 'CS2771',
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
            course_code: 'CS2771',
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
            course_code: 'CS2432',
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

  const upcoming = [];
   var i = 0;
   for(i; i < this.state.assignments.length; i++){
     if(this.state.assignments[i].due_date === this.state.selectedDate)
     {
       upcoming.push(
         <div class="item">
          <h3> {this.state.assignments[i].assignment_path} </h3>
          <div class="content">
            <div class="header"> {this.state.assignments[i].course_code} - {this.state.assignments[i].course_id} </div>
            <p style={{fontSize: '.9rem'}}> Due: {this.state.assignments[i].due_date} </p>
            <p style={{fontSize: '.9rem'}}> {this.state.assignments[i].max_points} pts </p>
          </div>
        </div>
      );
     }
   }

      return(
        <div class="ui celled list">
          {upcoming}
        </div>
      );
  }
}

export default UpcomingAssignmentInfoBlocks;
