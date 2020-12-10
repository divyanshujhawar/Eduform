import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';

class MatchCalendarDays extends React.Component {

    constructor(props)
  {
    super(props);

    this.state = {
      // Query here specifically by due_date, if due_date matches the selectedDate below. Doing a makeshift query in render()
      // below with an if statement.
      //IF we don't do this, also okay, just put all assignment JSON info here.
      // IF you do, then remove the if statement form inside the render() portion.
        selectedDate : this.props.datePass2,
        primary : this.props.color1,
        secondary : this.props.color2,
        assignments: [
          {
            assign_id: 1009,
            course_id: 23,
            user_id: 2,
            course_code: 'CS1009',
            teacher_email: 'f',
            filename: 'Lab 7',
            max_points: '120',
            creation_date: 's',
            due_date: '11/13/2020',
            assignment_path : 'Computer Engineering'
          },
          {
            assign_id: 1007,
            course_id: 56,
            user_id: 2,
            course_code: 'CS1009',
            teacher_email: 'f',
            filename: 'Assignment 3',
            max_points: '75',
            creation_date: 's',
            due_date: '11/13/2020',
            assignment_path : 'Object Oriented Programming'
          },
          {
            assign_id: 1006,
            course_id: 11,
            user_id: 2,
            course_code: 'CS1113',
            teacher_email: 'f',
            filename: 'Assignment 5',
            max_points: '25',
            creation_date: 's',
            due_date: '11/16/2020',
            assignment_path : 'Software Engineering I'
          },
          {
            assign_id: 1005,
            course_id: 11,
            user_id: 2,
            course_code: 'CS1112',
            teacher_email: 'f',
            filename: 'Milestone 3',
            max_points: '150',
            creation_date: 's',
            due_date: '11/17/2020',
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
            due_date: '11/01/2020',
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
            due_date: '11/07/2020',
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
            due_date: '11/10/2020',
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
            due_date: '11/26/2020',
            assignment_path : 'Intro to Computer Science'
          }
        ]
    }
  }
  
  
  
  
  render(){
    const upcoming = [];
    var color1 = "black";
    var i = 0;
    for(i; i < this.state.assignments.length; i++){
        if(this.state.primary === "black" || this.state.secondary === "black")
        {
          color1 = "white";
        }
        else{
          color1 = "black";
        }
        if(this.state.assignments[i].due_date === this.state.selectedDate)
        {
        upcoming.push(
          <button style={{color: color1,backgroundColor: `${this.state.primary}`, borderColor: `${this.state.secondary}`}}class="button2">{this.state.assignments[i].filename} <br /> <p style={{fontSize: '.8rem'}}>{this.state.assignments[i].course_code}</p></button>
        );
        }
    }

  return(
      <div>
       {upcoming}
      </div> 
  );
 }
}

export default MatchCalendarDays;
