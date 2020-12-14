import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import AssignmentGen from '../courses/GenericAssignments.js';
import update from 'react-addons-update';

class OptionWheel extends React.Component {

    constructor(props) {
        super(props);

      

        this.state = {
            currentCourse: this.props.currentClass,
            toggler: this.props.thetog,
            stat: this.props.theChatStat,
        
            buttonStates: ['none', 'none', 'none', 'none']
        }

        this.state.ButtonSize = this.ButtonSize.bind(this);
        this.state.ButtonLeave = this.ButtonLeave.bind(this);
    }

    ButtonSize = (event) => {
        if(this.state.buttonStates[event] === 'none')
        {
            this.setState(update(this.state,{buttonStates: {[event] : {$set: 'scale(3)'}}}));
        }
        else{
            this.setState(update(this.state,{buttonStates: {[event] : {$set: 'none'}}}));
        }
    }

    ButtonLeave = (event) => {
        
        this.setState(update(this.state,{buttonStates: {[event] : {$set: 'none'}}}));
        
    }

    render() {

        return (

            <div style={{paddingTop: '7px', paddingBottom: '7px',width: '100%' }} class="ui vertical menu">
            
                <Link to={{
                    pathname: '/course/' + this.state.currentCourse + '/assignments', assignstate: {
                        theCourse: this.state.currentCourse
                    }, toggleState: this.state.toggler
                }}> <a onMouseOver={() => this.ButtonSize(3)}  style={{transform: `${this.state.buttonStates[2]}`,borderBottom: 'solid', borderColor: 'white', backgroundColor: '#febf63', width: '100%', height: '50px' }} class="item">
                        <p className="studentWords" style={{color: 'black', fontSize: '1.2rem' }}><b>Assignments </b></p>
                    </a>
                </Link>
                <Link to={{
                    pathname: '/course/' + this.state.currentCourse + '/grades', 
                        currentClassChat: this.state.currentCourse
                    , toggleState: this.state.toggler
                }}> <a onMouseOver={(e) => this.ButtonSize(3)} style={{transform: `${this.state.buttonStates[2]}`,borderBottom: 'solid', borderColor: 'white', backgroundColor: '#febf63', width: '100%', height: '50px' }} class="item">
                        <p className="studentWords" style={{color: 'black', fontSize: '1.2rem' }}><b>Grades</b></p>
                    </a>
                </Link>
                <Link to={{
                    pathname: '/course/' + this.state.currentCourse + '/chat',
                        course:this.state.currentCourse
                    , toggleState: this.state.toggler, chatStat : this.state.stat
                }}><a style={{transform: `${this.state.buttonStates[2]}`,borderBottom: 'solid', borderColor: 'white', backgroundColor: '#febf63', width: '100%', height: '50px' }} class="item">
                    <p className="studentWords" style={{color: 'black', fontSize: '1.2rem' }}><b>Chat</b></p>
                </a>
                </Link>

                <Link to={{
                    pathname: '/course/' + this.state.currentCourse + '/announcements', state: {
                        currentClassNotes: this.state.currentCourse
                    }, toggleState: this.state.toggler
                }}>
                    <a onMouseOver={() => this.ButtonSize(3)} onMouseLeave={() => this.ButtonLeave(3)} id='announceButton' style={{transform: `${this.state.buttonStates[2]}`,backgroundColor: '#febf63', width: '100%', height: '50px' }} class="item">
                        <p className="studentWords" style={{ color: 'black', fontSize: '1.2rem' }}><b>Announcements</b></p>
                    </a>
                </Link>
         

            </div>


        );
    }
}

export default OptionWheel;
