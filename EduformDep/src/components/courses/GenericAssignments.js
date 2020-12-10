import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Assignments from '../courses/AssignmentBlocks.js';
import Bar from '../student/StudentNavigation.js';

class GenericAssignments extends React.Component {

    constructor(props) {
        super(props);
        const { theCourse } = this.props.location.assignstate;
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
            myCourse: theCourse,
            displayNav: presetForNav,
            itemPad: defVal,
            allAssignments: []
        }

        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.getCourseAssignments = this.getCourseAssignments.bind(this);

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

    getCourseAssignments() {
        let code = this.props.match.params.courseCode;
        if (!code) {
            return this.props.history.push('/student-courses');
        } else {
            //this.state.allAssignments;


        }
    }

    componentDidMount(){
        //this.getCourseData();
    }

    render() {

        return (
            <div className="backGroundTeachC">
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: '#febf63' }} className="row dashItems">

                        <h1 className="welcome" style={{ margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: 'black', marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                        Eduform</h1>

                    </div>
                    <div style={{ marginTop: '30px' }} className="row">

                        <div style={{ textAlign: 'left' }} className="col-md-11 col-sm-8">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />

                            <h1 className="studentWords" style={{ fontSize: '2.4rem' }}> <Link to={{
                                pathname: '/course/' + this.props.match.params.courseCode, state: {
                                    currentClass: this.state.myCourse
                                }
                            }} > <i style={{ color: '#febf63', marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>Assignments</h1>

                            <hr style={{ marginBottom: '30px' }} />
                            <Assignments whichCourse={this.state.myCourse} theTog={this.state.displayNav} />
                        </div>
                    </div>
                    {this.displayer()}

                </div>
            </div>
        );
    }
}

export default GenericAssignments;
