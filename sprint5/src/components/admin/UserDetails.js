import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';
import Logo from '../.././assets/edLogo.png';
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';



const UserDisplay = ({ firstName, lastName, email, phoneNumber, role, verified }) => {
    if (!email) return <div />;
    return (
       
            <tbody>
                <tr style={{height: '30px'}}className="adminWordHead">
                    <td style={{borderColor:'#1089ff',backgroundColor: 'white',width: '165px'}}>
                        {firstName}
                    </td>
                    <td style={{borderColor:'#1089ff',backgroundColor: 'white',width: '165px'}}>
                        {lastName}
                    </td>
                    <td style={{borderColor:'#1089ff',backgroundColor: 'white',width: '270px'}}>
                        {email}
                    </td>
                    <td style={{borderColor:'#1089ff',backgroundColor: 'white',width: '165px'}}>
                        {phoneNumber}
                    </td>
                    <td style={{borderColor:'#1089ff',backgroundColor: 'white',width: '165px'}}>
                        {role}
                    </td>
                    <td style={{borderColor:'#1089ff',backgroundColor: 'white',backgroundColor: 'white',width: '80px'}}>
                        {verified}
                    </td>
                </tr>
            </tbody>
       
    );
};

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [{"firstName": "Divyanshu", "lastName": "Jhawar", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"}
            ],
            students: [{"firstName": "Shubham", "lastName": "Gaikwad", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"}],
            teachers: [{"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"}],
            userDetails: [{"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"},
            {"firstName": "Bryant", "lastName": "Bryant", "email": "bjhunsbe@iu.edu",
            "phoneNumber": "Bryant","role": "a","verified": "T"}],

            pressStateUsers : 'item',
            pressStateTeachers : 'item',
            pressStateStudents : 'item'
        }

        this.handleUser = this.handleUser.bind(this);
        this.handleStudent = this.handleStudent.bind(this);
        this.handleTeacher = this.handleTeacher.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getStudents = this.getStudents.bind(this);
        this.getTeachers = this.getTeachers.bind(this);
        this.decideRole = this.decideRole.bind(this);

    }

    componentDidMount() {
        this.getUsers();
        this.getStudents();
        this.getTeachers();

    }

    getUsers() {
        try {
            const response = fetch('/admin/getAllUsers', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {

                    this.setState({
                        users: jsonData.result
                    });

                    this.setState({
                        userDetails: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    getStudents() {
        try {
            const response = fetch('/admin/getAllStudents', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                    this.setState({
                        students: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    getTeachers() {
        try {
            const response = fetch('/admin/getAllTeachers', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            })
                .then(res => res.json())
                .then(jsonData => {


                    this.setState({
                        teachers: jsonData.result
                    });

                });

        } catch (error) {
            alert(error);
        }
    }

    handleUser(event) {
        event.preventDefault();

        this.setState({
            userDetails: this.state.users,
            pressStateTeachers : "item",
            pressStateStudents : "item",
            pressStateUsers : "item active"
        });
    }


    handleStudent(event){
        event.preventDefault();

        this.setState({
            userDetails: this.state.students,
            pressStateTeachers : "item",
            pressStateStudents : "item active",
            pressStateUsers : "item"
        });
    }


    handleTeacher(event){
        event.preventDefault();

        this.setState({
            userDetails: this.state.teachers,
            pressStateTeachers : "item active",
            pressStateStudents : "item",
            pressStateUsers : "item"
        });
    }

    decideRole(data){
        if(data === 'a'){
            return 'admin';
        } else if(data === 't'){
            return 'teacher';
        } else{
            return 'student';
        }
    }

    render() {

        return(
            <div className="adminBackground">
                    <div style={{paddingRight: '5%',paddingLeft: '190px'}} className="flex-container">
                        <div style={{marginBottom: '20px',paddingTop: '20px'}} className="row">
                            <div style={{textAlign: 'left' }} className="flex-col-md-8 flex-col-sm-12">
                                <img style={{backgroundColor: '#1089ff',width: '70px', height: '70px', marginTop: '2.5%' }} src={Logo} alt="edLogo" />
                                <h1 className="adminWordHead" style={{fontSize: '2.6rem' }}> User Details</h1>
                                <hr style={{backgroundColor: 'black',marginBottom: '20px' }} />
                           
                            </div>
                        </div>

                    <div >
                        <AdminNavBar />
                    </div>

                    <div class="ui three item menu">
                         <div className={`${this.state.pressStateUsers}`}><button className="adminWordHead" style={{textAlign: 'center',fontSize: '1.4rem',backgroundColor: '#1089ff'}} type="submit" onClick={this.handleUser}>Users</button></div>
                        <div className={`${this.state.pressStateTeachers}`}><button className="adminWordHead" style={{textAlign: 'center',fontSize: '1.4rem',backgroundColor: '#1089ff'}} type="submit" onClick={this.handleTeacher}>Teachers</button></div>
                        <div className={`${this.state.pressStateStudents}`}><button className="adminWordHead" style={{textAlign: 'center',fontSize: '1.4rem',backgroundColor: '#1089ff'}} type="submit"  onClick={this.handleStudent}>Students</button></div>
                    </div>

          
                <div style={{marginTop: '20px',paddingLeft: '5px',textAlign: 'center'}} className="row">
                    <div className="col-12">
                            <table>
                                <thead>
                                    <tr className="adminWordHead">
                                        <td style={{backgroundColor: '#1089ff',width: '165px',padding: '5px'}}>First Name</td>
                                        <td style={{backgroundColor: '#1089ff',width: '165px'}}>LastName</td>
                                        <td style={{backgroundColor: '#1089ff',width: '270px'}}>Email</td>
                                        <td style={{backgroundColor: '#1089ff',width: '165px'}}>Phone Number</td>
                                        <td style={{backgroundColor: '#1089ff',width: '165px'}}>Role</td>
                                        <td style={{backgroundColor: '#1089ff',width: '80px'}}>Verified</td>
                                    </tr>
                                </thead>
                            </table>
                            {this.state.userDetails.map((data, key) => {
                                return (
                                    <div key={key}>
                                        <UserDisplay
                                            key={key}
                                            firstName={data.firstName}
                                            lastName={data.lastName}
                                            email={data.email}
                                            phoneNumber={data.phoneNumber}
                                            role={this.decideRole(data.role)}
                                            verified={JSON.stringify(data.verified)}
                                            
                                        />
                            
                                    </div>
                                );
                            })}
                    
                    </div>
                </div>
                </div>

            </div>
        );
    }

}


export default UserDetails;
