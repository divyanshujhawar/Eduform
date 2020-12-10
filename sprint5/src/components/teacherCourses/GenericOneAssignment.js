import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Bar from '../student/StudentNavigation.js';

class GenericOneAssignment extends React.Component {

    constructor(props) {
        super(props);
        const { assignID } = this.props.location.passCourseState;
        const { courseName } = this.props.location.passCourseState;
        const { mp } = this.props.location.passCourseState;
        const { date } = this.props.location.passCourseState;
        //const { currentClass } = this.props.location.passCourseState;

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
            dueDate: date,
            maxPoints: mp,
            courseCode: this.props.match.params.courseCode,
            assignmentId: this.props.match.params.assignmentId,
            myCourseName: courseName,
            //getVal: currentClass,

            file: '',

            displayNav: presetForNav,
            itemPad: defVal
        }
        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
 
        this.postTeacherCourseAssignment = this.postTeacherCourseAssignment.bind(this);
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

    setFile(e) {
        this.setState({ file: e.target.files[0] });    
    }

    async postTeacherCourseAssignment(event){
        event.preventDefault();
        
        let courseCode = document.getElementById("assignmentCourseCode").value;
        let assignmentName = document.getElementById("assignmentName").value;
        let assignmentMaxPoints = parseInt(document.getElementById("assignmentMaxPoints").value);
        let assignmentDueDate = document.getElementById("assignmentDueDate").value;
        let assignmentFile = document.getElementById("assignmentFile").value;

        
        if (!courseCode|| !assignmentName || !assignmentMaxPoints || !assignmentDueDate || !assignmentFile){
            alert("Complete the form!");
            return 
        } 


        let uploadRequest = `{"courseCode": "${courseCode}","userEmail": "shubham@iu.edu","filename": "${assignmentName}", \
                            "maxPoints": ${assignmentMaxPoints},"dueDate": "${assignmentDueDate}"}`;



        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('uploadRequest', uploadRequest);



        try{
            const response = await fetch('/teacher/uploadAssignment', {
                method: 'POST',
                'content-type': 'multipart/form-data',
                body: formData
            })
            .then(res => res.text())
            .then(text => {

                if (text === "SUCCESS!"){
                    this.setState({
                        newAssignment: {}
                    });
                    alert("Assignment created succesfully!");

                    document.getElementById("makeAssignment").reset();
                    

                } else{
                    alert(text);
                }
                
            });

        } catch (error){
            alert(error);
        }
        
    }

 
    render() {

        var dueDate;
        var maxPoints;
        var assignmentName;

        assignmentName = this.state.myCourseName.split('.')[0];
        dueDate = this.state.dueDate;
        maxPoints = this.state.maxPoints;

        var tempDate = dueDate;

        tempDate = tempDate.substring(0,10);

        var year = tempDate.substring(0,4);
        var month = tempDate.substring(5,7);
        var day = tempDate.substring(8,10);

        var queryDate = `${month}/${day}/${year}`;


        return (
            <div className="backGroundTeachC">
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: '#febf63' }} className="row dashItems">

                        <h1 className="welcome" style={{ margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: 'black', marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                        Eduform</h1>

                    </div>
                    <div style={{ marginTop: '10px' }} className="row">


                        <div style={{ textAlign: 'left' }} className="col-md-11 col-sm-8">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />

                            <h1 className="studentWords" style={{ fontSize: '2.4rem' }}> <Link to={{
                                pathname: '/teacher-course/' + this.state.courseCode+ '/assignments/', assignstate: {
                                    //theCourse: this.state.getVal
                                }, toggleState: this.state.toggler
                            }}> <i style={{ color: '#febf63', marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>{assignmentName}
                            <div style={{paddingLeft: '400px'}} className="btn-group dropdown">
                            <button style={{ width: '252px', height: '50px', backgroundColor: '#febf63' }} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <b style={{ fontSize: '1.15rem' }}>Edit Assignment</b>
                            </button>
                            <div className="dropdown-menu">
                                <form style={{ width: '650px', height: '650px' }} class="px-4 py-3" id="makeAssignment"  onSubmit={this.postTeacherCourseAssignment} noValidate>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                                        <input class="form-control" value={this.state.courseCode} id="assignmentCourseCode" type="text" required />
                      
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Assignment Name </b></label>
                                        <input type="text" class="form-control" value={assignmentName} id="assignmentName" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Max Points </b></label>
                                        <input type="text" class="form-control" id="assignmentMaxPoints" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormEmail1"><b>Due Date </b></label>
                                        <input type="text" class="form-control" id="assignmentDueDate" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleDropdownFormPassword1"><b>File</b></label>
                                        <input type="file" class="form-control" id="assignmentFile" placeholder="" onChange={e => this.setFile(e)}/>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                            </div>
                        </div></h1>

                            <hr style={{ marginBottom: '30px' }} />
                            <p style={{ color: 'white', fontSize: '1.1rem' }}><b style={{ color: 'white', fontSize: '1.1rem' }}> Due: </b>{queryDate} |<b style={{ color: 'white', fontSize: '1.1rem' }}> Max Points:</b> {maxPoints}</p>
                            <hr />
                        </div>

                    </div>

                    <div style={{ marginTop: '10px' }} className="row">

                        <div className="col-md-5 col-sm-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <button style={{ backgroundColor: '#febf63', color: '#1089ff' }} class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Upload File</button>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
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
