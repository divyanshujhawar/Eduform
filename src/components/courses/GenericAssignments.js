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
        const { theCourse } = this.props.match.params.courseCode;
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
            myCourse: this.props.match.params.courseCode,
            displayNav: presetForNav,
            itemPad: defVal,
            allAssignments: [],
            usersSearchedItems : "",
            userTyped : false        
            
        }

        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.displayAssignments = this.displayAssignments.bind(this);
        this.theAssignments = this.theAssignments.bind(this);

    }
    displayer = () => {

        if (this.state.displayNav === true) {

            return (<Bar thetog={this.state.displayNav} />);
        }
        else {
            return <p></p>;
        }
    }

    bar = () => {
        this.setState({ displayNav: !this.state.displayNav });
        if (this.state.itemPad === 30) {
            this.setState({ itemPad: 175 });
        }
        else {
            this.setState({ itemPad: 30 });
        }

    }


    displayAssignments = () =>{

        if(document.getElementById("inputBar").value === ""){
            this.setState({usersSearchedItems : "", userTyped : false});
     
        }
        else{
            this.setState({usersSearchedItems : document.getElementById("inputBar").value, userTyped : true});
        }

    }

    theAssignments = () => {

        if(this.state.userTyped === false)
        {
            return (
                <div>
                    <Assignments whatUserSearched={""} whichCourse={this.state.myCourse} theTog={this.state.displayNav} />
                </div>);
        }
        else{

            return(

                <Assignments whatUserSearched={this.state.usersSearchedItems} whichCourse={this.state.myCourse} theTog={this.state.displayNav} />
           
            );
        }
          
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

                        <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-8">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                            <div style={{marginTop: '20px'}}className='row'>
                            <div className="col-md-8 col-sm-12">
                            <h1 className="studentWords" style={{fontSize: '2.6rem' }}> <Link to={{
                                pathname: '/course/' + this.props.match.params.courseCode, state: {
                                    currentClass: this.state.myCourse
                                }
                            }} > <i style={{ color: '#febf63', marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>Assignments
                            </h1>
                        </div>
                        <div style={{paddingRight: '60px'}} className='col-md-4 col-sm-12'>
                            <div style={{ width: '100%' }} class="ui vertical menu">
                                    <div class="item">
                                        <div class="ui transparent icon input">
                                            <input type="text" id="inputBar" placeholder="Search Assignments" onChange={this.displayAssignments}/>
                                            <i class="search icon"></i>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </div>
                            

                            <hr style={{ marginBottom: '30px' }} />
                           
                            {this.theAssignments()}
                        </div>
                    </div>
                    {this.displayer()}

                </div>
            </div>
        );
    }
}

export default GenericAssignments;
