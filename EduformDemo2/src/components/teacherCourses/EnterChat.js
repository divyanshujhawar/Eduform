import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import CoursesBlocks from '../student/CourseBlocks.js';
import NavBar from '../student/NewNavbar';
import Bar from '../teacher/TeacherNavigation.js';
import update from 'react-addons-update';


class EnterChat extends React.Component{

    constructor(props) {
        super(props);
        const { currentClassGrade } = this.props.match.params.courseCode;
     
    this.state = {
        //myCourse: currentClassGrade,
        myCourse : 'P456',
       
        usersSearchedItems: "",
        userTyped: false
    }

    this.handleChatSubmit = this.handleChatSubmit.bind(this);
}

    handleChatSubmit = (event) => {
    
        event.preventDefault();
        let userName = document.getElementById("userName").value;
        var classType = 'P456';
        this.props.history.push({
            pathname: '/teacher-course/' + this.props.match.params.courseCode + '/chat', state: {
                theUserName: userName, theCourse : classType
        }});
    }

    render()
    {
        return(
            <div style={{height: '600px',backgroundColor: '#1089ff'}} >
                <div style={{paddingLeft: '50px', paddingRight: '5%' }} className="flex-container">
                 
                    <div style={{ marginTop: '0px' }} className="row">

                        <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-12">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                            <h1 className="studentWords" style={{ fontSize: '2.4rem' }}> <Link to={{
                                        pathname: '/course/' + this.props.match.params.courseCode, state: {
                                            currentClass: this.state.myCourse
                                        }
                                    }} > <i style={{ color: "#febf63", marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>Enter Username</h1>
                            <hr style={{ marginBottom: '50px' }} />

                            <form onSubmit={this.handleChatSubmit} style={{borderRadius: '5px',margin: 'auto',padding: '10px 10px',width: '50%',backgroundColor: '#febf63'}} class="ui form">
                                <div class="field">
                                    <label className="adminWordHead" style={{paddingTop: '10px',marginBottom: '25px',textAlign: 'center', fontSize: '2rem'}}>Username</label>
                                    <input type="text" id="userName" placeholder="Enter Username Here"/>
                                </div>
                            
                                <button style={{backgroundColor: '#1089ff', color: 'white', fontSize: '1.1rem'}} class="ui button" type="submit">Submit</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnterChat;