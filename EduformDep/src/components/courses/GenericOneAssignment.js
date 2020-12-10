import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Bar from '../student/StudentNavigation.js';

class GenericOneAssignment extends React.Component{

  constructor(props){
    super(props);
    const {assignID} = this.props.location.passCourseState;
    const {courseName} = this.props.location.passCourseState;
    const {currentClass} = this.props.location.passCourseState;
    var presetForNav = false;
    var defVal = 30;
    if(this.props.toggleState)
    {
      presetForNav = this.props.toggleState;
      if(presetForNav === true)
      {
        defVal = 175;
      }
      else{
        defVal = 30;
      }
    }
    else{
      presetForNav = true;
      defVal = 175;
    }

    this.state = {
        myCourse : assignID,
        myCourseName : courseName,
        getVal : currentClass,
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
        ],
        displayNav: presetForNav,
        itemPad : defVal
    }
    this.bar = this.bar.bind(this);
    this.displayer = this.displayer.bind(this);

  }

  displayer() {
    
    if(this.state.displayNav === true){
      
        return(<Bar thetog={this.state.displayNav} />);
    }
    else{
        return <p></p>;
    }
  }

  bar() {
    this.setState({displayNav : !this.state.displayNav});
    if(this.state.itemPad === 30)
    {
      this.setState({itemPad : 175});
    }
    else{
      this.setState({itemPad : 30});
    }
  
  }

  render(){

     var dueDate;
     var maxPoints;

     var i = 0;
     for(i; i < this.state.assignments.length; i++){
       if(this.state.myCourse===this.state.assignments[i].assign_id){
              dueDate = this.state.assignments[i].due_date;
              maxPoints = this.state.assignments[i].max_points;
       }
    }

    return(
      <div className="backGroundTeachC">
            <div style={{paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%'}} className="flex-container">
            <div style={{margin: 'auto',width: '267px',height: '50px', backgroundColor: '#febf63'}} className="row dashItems">
  
              <h1 className="welcome" style={{margin: 'auto',fontSize: '2.6rem'}}><Link onClick={this.bar}> <i style={{color: 'black',marginRight:'0px'}} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                        Eduform</h1>

              </div>
             <div style={{marginTop:'10px'}} className="row">
             
            
                 <div style={{textAlign: 'left'}} className="col-md-11 col-sm-8">
                   <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>

                   <h1 className="studentWords" style={{fontSize: '2.4rem'}}> <Link to={{pathname:'/courseAssignments093028',assignstate : {
            theCourse : this.state.getVal
          }, toggleState : this.state.toggler}}> <i style={{color: '#febf63',marginRight:'20px'}} class="fas fa-chevron-circle-left"></i> </Link>{this.state.myCourseName}</h1>

                   <hr style={{marginBottom: '30px'}}/>
                   <p style={{color: 'white', fontSize: '1.1rem'}}><b style={{color: 'white', fontSize: '1.1rem'}}> Due: </b>{dueDate} |<b style={{color: 'white', fontSize: '1.1rem'}}> Max Points:</b> {maxPoints}</p>
                   <hr/>
                   </div>

              </div>

                 <div style={{marginTop:'10px'}} className="row">
           
                  <div className="col-md-5 col-sm-12">
                          <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <button style={{backgroundColor: '#febf63',color: '#1089ff'}} class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Upload File</button>
                                    </div>
                                    <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"/>
                                    <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                                </div>
                            </div>
                    </div>
                    </div>

                    {this.displayer()}
              
           </div>
        </div>
    );
  }
}

export default GenericOneAssignment;
