import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Grades from '../teacherCourses/GradeBlocks.js';
import Bar from '../student/StudentNavigation.js';

class GenericGrades extends React.Component {

    constructor(props) {
        super(props);
        const { currentClassGrade } = this.props.match.params.courseCode;
        var presetForNav = false;
        var defVal = 30;
        if (this.props.toggleState) {
            presetForNav = this.props.toggleState;
            if (presetForNav === true) {
                defVal = 175;
            }
            else {
                defVal = 30;
            }
        }
        else {
            presetForNav = true;
            defVal = 175;
        }

        this.state = {
            //myCourse: currentClassGrade,
            myCourse : 'P456',
            displayNav: presetForNav,
            itemPad: defVal,
            usersSearchedItems: "",
            userTyped: false,
            openedIds : [],
            studentsEnrolled : [{"userId" : 23}, {"userId" : 34}, {"userId" : 44},
            {"userId" : 21}, {"userId" : 20}, {"userId" : 15}] // We need to call students enrolled in this particular course
        }
        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.displayGrades = this.displayGrades.bind(this);
        this.theGrades = this.theGrades.bind(this);
        this.showElement = this.showElement.bind(this);

    }
    displayer() {

        if (this.state.displayNav === true) {

            return (<Bar thetog={this.state.displayNav} />);
        }
        else {
            return <p></p>;
        }
    }

    bar() {
        this.setState({ displayNav: !this.state.displayNav });
        if (this.state.itemPad === 30) {
            this.setState({ itemPad: 175 });
        }
        else {
            this.setState({ itemPad: 30 });
        }

    }

    displayGrades = () => {



        if (document.getElementById("inputBar").value === "") {
            this.setState({ usersSearchedItems: "", userTyped: false });

        }
        else {
            this.setState({ usersSearchedItems: document.getElementById("inputBar").value, userTyped: true });
        }

    }
    theGrades = (id) => {

     
        if (this.state.userTyped === false) {
          
            return( <Grades theUserId={id} userQueriedItem={""} whichCourse={this.state.myCourse} />);
              
        }
        else {

  
            return( <Grades theUserId={id} userQueriedItem={this.state.usersSearchedItems} whichCourse={this.state.myCourse} />);
        
        }
        

    }

    showElement = (id) => {
        if(document.getElementById(id).style.display === "block")
        {
            document.getElementById(id).style.display = "none";
        }
        else{
            document.getElementById(id).style.display = "block";
        }
        
    }

    render() {

        var theStudents = [];
        const ids = ['a','b','c','d','e','f','g'];
        const ids2 = ['a','b','c','d','e','f','g'];
        const ids3 = ['a','b','c','d','e','f','g'];
        const ids4 = ['a','b','c','d','e','f','g'];
        const ids5 = ['a','b','c','d','e','f','g'];
    
        for(var i = 0; i < this.state.studentsEnrolled.length; i++)
        {
            let currentVal = this.state.studentsEnrolled[i].userId;

            theStudents.push(
                <div class="item">
                    <div class="right floated content">
                    <div onClick={() => this.showElement(currentVal)} style={{fontSize: '1.1rem',backgroundColor: '#febf63', color: 'white'}} class="ui button">View Grades</div>
                    </div>
                    <img class="ui avatar image" src={Personal}/>
                    <div class="content">
                    <h3 style={{color: 'white'}}>Student {this.state.studentsEnrolled[i].userId} </h3>
                    
                    </div>
                    <p style={{width: '90%',marginTop: '30px',marginBottom: '30px',marginLeft: '100px',display: 'none'}} id={currentVal}> {this.theGrades(currentVal)} </p>
            
                </div>
            );
        }

        var studentContent = [];
        studentContent.push(<div class="ui middle aligned divided list">
            {theStudents}
        </div>);


        return (
            <div className="backGroundTeachC">
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: '#febf63' }} className="row dashItems">

                        <h1 className="welcome" style={{ margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: 'black', marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                        Eduform</h1>

                    </div>
                    <div style={{ marginTop: '30px' }} className="row">

                        <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-12">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                            <div style={{ marginTop: '20px' }} className='row'>
                                <div className="col-md-8 col-sm-12">
                                    <h1 className="studentWords" style={{ fontSize: '2.4rem' }}> <Link to={{
                                        pathname: '/teacher-course/' + this.props.match.params.courseCode, state: {
                                            currentClass: this.state.myCourse
                                        }
                                    }} > <i style={{ color: "#febf63", marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>Student Grades</h1>
                                </div>
                                <div style={{ paddingRight: '60px' }} className='col-md-4 col-sm-12'>
                                    
                                    <div style={{ width: '100%' }} class="ui vertical menu">
                                        <div class="item">
                                            <div class="ui transparent icon input">
                                                <input type="text" id="inputBar" placeholder="Search Grades" onChange={this.displayGrades} />
                                                <i class="search icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ marginBottom: '30px' }} />
                            {studentContent}
                            
                        </div>
                    </div>
                    {this.displayer()}


                </div>
            </div>
        );
    }
}

export default GenericGrades;
