import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/NewNavbar';
import Bar from '../student/StudentNavigation.js';


import UserProfile from '../.././utils/UserProfile';

class GenericOneAssignment extends React.Component {

    constructor(props) {
        super(props);
        const { courseName } = this.props.location.passCourseState;
        const { mp } = this.props.location.passCourseState;
        const { date } = this.props.location.passCourseState;
        const { an } = this.props.location.passCourseState;

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
            assignmentName: this.props.location.theFile,
            //getVal: currentClass,

            file: '',
            
            displayNav: presetForNav,
            itemPad: defVal
        }
        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        
        this.submitStudentCourseAssignment = this.submitStudentCourseAssignment.bind(this);
        this.downloadAssignment = this.downloadAssignment.bind(this);

    }

    displayer() {

        if (this.state.displayNav === true) {

            return (<Bar thetog={this.state.displayNav} />);
        }
        else {
            return <p></p>;
        }
    }

    downloadAssignment()
    {
        let baseURL = 'https://eduform-bucket.s3.us-east-2.amazonaws.com/';

        let downloadLink = '';

        let testLink = 'https://eduform-bucket.s3.us-east-2.amazonaws.com/submission/CS1111/Assignment7_sgaikwad%40iu.pdf';

        try {
            const response = fetch('/student/download/assignedAssignment' + `?assignmentName=${this.state.assignmentName}&courseCode=${this.state.courseCode}`,  {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {
                    console.log(jsonData);

                    downloadLink = baseURL + jsonData.result[0].assignmentPath;
                })
                .then((blob) => {
                    const link = document.createElement('a');
                    
                    document.body.appendChild(link);
                    link.href = downloadLink;
                    link.setAttribute('download', `${downloadLink}`);
                    link.setAttribute("target", "_blank");
                    link.click();
                    document.body.removeChild(link);
                    /*console.log("Download Link: ", testLink);

                    const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `${testLink}`);
                    
                    console.log(testLink);
                    document.body.appendChild(link);

                    link.click();

                    link.parentNode.removeChild(link);*/


                });

        } catch (error) {
            alert(error);
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

    async submitStudentCourseAssignment(event){
        event.preventDefault();
        
        let courseCode = this.state.courseCode;
        let assignmentFile = document.getElementById("inputGroupFile03").value.split('\\');

        let queryFileName = assignmentFile[assignmentFile.length - 1]

        
        if (!courseCode || !queryFileName){
            alert("Complete the form!");
            return 
        } 


        let uploadRequest = `{"courseCode": "${courseCode}","userEmail": "${UserProfile.getEmail()}","filename": "${this.state.assignmentName}"}`;

        console.log(uploadRequest);

        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('uploadRequest', uploadRequest);



        try{
            const response = await fetch('/student/submitAssignment', {
                method: 'POST',
                'content-type': 'multipart/form-data',
                body: formData
            })
            .then(res => res.text())
            .then(text => {

                if (text === "SUCCESS!"){
                    
                    alert("Assignment submitted succesfully!");
                    

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
                                pathname: '/course/' + this.state.courseCode+ '/assignments/', assignstate: {
                                    //theCourse: this.state.getVal
                                }, toggleState: this.state.toggler
                            }}> <i style={{ color: '#febf63', marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link>{this.state.myCourseName}</h1>

                            <hr style={{ marginBottom: '30px' }} />
                            <p style={{ color: 'white', fontSize: '1.1rem' }}><b style={{ color: 'white', fontSize: '1.1rem' }}> Due: </b>{queryDate} |<b style={{ color: 'white', fontSize: '1.1rem' }}> Max Points:</b> {maxPoints}</p>
                            <hr />
                        </div>

                    </div>

                    <div style={{ marginTop: '10px' }} className="row">

                        <div className="col-md-5 col-sm-12">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <button style={{ backgroundColor: '#febf63', color: '#1089ff' }} class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03" onClick={this.submitStudentCourseAssignment}>Upload File</button>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" onChange={e => this.setFile(e)}/>
                                    <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <div>
                                <button style={{ backgroundColor: '#febf63', color: '#1089ff', width: '50px'}} class="btn btn-outline-secondary" type="button" id="dab" onClick={this.downloadAssignment}>Download File</button>
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
