import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';


class AddNewCourse extends Component {
    //const [courseName, setCourseName] = React.useState("");
    //const [instructorEmail, setInstructorEmail] = React.useState("");

    constructor(props) {
        super(props);

        this.state = {
            courseCode: null,
            courseName: null,
            courseDescription: null,
            courseRequest: {},
            errors:{
                courseCode: '',
                courseName: '',
                courseDescription: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addCourse = this.addCourse.bind(this);

    }



    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors;
        this.state[name] = value;

        switch (name) {

            case 'courseCode':
                errors.courseCode =
                value.length === 0
                    ? 'This cannot be empty'
                    : '';
                break;
            case 'courseName':
                errors.courseName =
                  value.length === 0
                    ? 'This cannot be empty'
                    : '';
                break;
            case 'courseDescription':
                errors.courseDescription =
                  value.length === 0
                    ? 'This cannot be empty'
                    : '';
                break;


            default:
                break;
        }

        this.setState({errors, [name]: value});

    }

    async addCourse(event){

        event.preventDefault();

        this.setState({courseCode: document.getElementById("courseCode").value});
        this.setState({courseName: document.getElementById("courseName").value});
        this.setState({courseDescription: document.getElementById("courseDescription").value});

        this.state.courseRequest.courseCode = this.state.courseCode;
        this.state.courseRequest.courseName = this.state.courseName;
        this.state.courseRequest.courseDescription = this.state.courseDescription;

        console.log("CourseRequest: ", this.state.courseRequest);

        try{
            const response = await fetch('/admin/addCourse', {
                method: 'POST',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                body: JSON.stringify(this.state.courseRequest)
            })
            .then(res => res.text())
            .then(text => {


                if (text === "SUCCESS!"){
                    document.getElementById("course-form").reset();
                    alert('Course successfully added');
                } else{
                    alert(text);
                }


            });

        } catch (error){
            alert(error);
        }

    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({courseCode: document.getElementById("courseCode").value});
        this.setState({courseName: document.getElementById("courseName").value});
        this.setState({courseDescription: document.getElementById("courseDescription").value});

        console.log(this.state.errors);

        let vars = ["courseCode","courseName","courseDescription"];

        var i;
        let errorCount = 0;
        for (i = 0; i < vars.length; i++) {

            if(document.getElementById(vars[i]).value.length === 0){
                this.state.errors[vars[i]] = "This cannot be empty";
                errorCount += 1;
            }
        }


        if (errorCount>0){
            return;
        } else{

            this.addCourse(event);

        }

    }

    render() {

        const {errors} = this.state;

        return (
            <div className="backGroundSAT">
                <div >
                    <AdminNavBar />
                </div>

                <div style={{ paddingTop: '4%', paddingBottom: '2%' }} className="container">
                    <div style={{ paddingRight: '2%', paddingLeft: '2%' }} className="row myIntro">
                        <div style={{ padding: '0% 3% 1% 3%', paddingTop: '2%' }} className="col-lg-5 col-md-7 bg-black myLogIn text-primarys">
                            <form id="course-form" onSubmit={this.handleSubmit} noValidate>

                                <h1 className="welcome" style={{ marginTop: '1.5%', fontSize: '2.5rem', paddingBottom: '10px' }}> Add New Course </h1>

                                <div className="form-group">
                                    <input type="text" id="courseCode" name="courseCode" className="form-control" placeholder="Enter course code" style={{ fontSize: '.9rem' }} onChange={this.handleChange} noValidate />
                                    {errors.courseCode.length > 0 && <span className='error'>{errors.courseCode}</span>}
                                </div>

                                <div className="form-group">
                                    <input type="text" id="courseName" name="courseName" className="form-control" placeholder="Enter course name" style={{ fontSize: '.9rem' }} onChange={this.handleChange} noValidate />
                                    {errors.courseName.length > 0 && <span className='error'>{errors.courseName}</span>}
                                </div>

                                <div className="form-group">
                                    <input type="text" id="courseDescription" name="courseDescription" className="form-control" placeholder="Enter course description" style={{ fontSize: '.9rem' }} onChange={this.handleChange} noValidate />
                                    {errors.courseDescription.length > 0 && <span className='error'>{errors.courseDescription}</span>}
                                </div>

                                <button type="submit" className="btn btn-block log" style={{ fontSize: '1.2rem', backgroundColor: '#febf63' }}> Add Course </button>



                            </form>
                        </div>
                    </div>
                </div>

                {/*
        <div className='courseForm'>
          <form onSubmit={handleSubmit}>
            <h1>Add new course</h1>
            <label>
              Course Name:
              <input
                name="courseName"
                type="text"
                value={courseName}
                onChange={e => setCourseName(e.target.value)}
                required />
            </label>
            <label>
              Instructor Email:
              <input
                name="instructorEmail"
                type="email"
                value={instructorEmail}
                onChange={e => setInstructorEmail(e.target.value)}
                required />
            </label>
            <button>Submit</button>
          </form>
        </div>
        */}
            </div>
        );
    }
}


export default AddNewCourse; 