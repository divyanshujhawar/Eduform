import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar.js';



const UserDisplay = ({ firstName, lastName, email, phoneNumber, role, verified }) => {
    if (!email) return <div />;
    return (
        <table >
            <tbody>
                <tr>
                    <td>
                        <h5>{firstName}</h5>
                    </td>
                    <td>
                        <h5>{lastName}</h5>
                    </td>
                    <td>
                        <h5>{email}</h5>
                    </td>
                    <td>
                        <h4>{phoneNumber}</h4>
                    </td>
                    <td>
                        <p>{role}</p>
                    </td>
                    <td>
                        <h5>{verified}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: {},
            students: {},
            teachers: {},
            userDetails: []
        }

        this.handleUser = this.handleUser.bind(this);
        this.handleStudent = this.handleStudent.bind(this);
        this.handleTeacher = this.handleTeacher.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getStudents = this.getStudents.bind(this);
        this.getTeachers = this.getTeachers.bind(this);

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

                    console.log(this.state.userDetails);
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
            userDetails: this.state.users
        });
    }


    handleStudent(event){
        event.preventDefault();

        this.setState({
            userDetails: this.state.students
        });
    }


    handleTeacher(event){
        event.preventDefault();

        this.setState({
            userDetails: this.state.teachers
        });
    }

    render() {

        return(
            <div>
                <div id="ud-header" className="ud-header" style={{ backgroundColor: '#DEDEDE', height: '200px' }}>
                    <div >
                        <AdminNavBar />
                    </div>

                    <div id="outer">
                        <div className="inner"><button type="submit" className="userDisplay" onClick={this.handleUser}>Users</button></div>
                        <div className="inner"><button type="submit" className="userDisplay" onClick={this.handleTeacher}>Teachers</button></div>
                        <div className="inner"><button type="submit" className="userDisplay" onClick={this.handleStudent}>Students</button></div>
                    </div>



                </div>

                <div className="ud-table-comp">
                    <div className="stock-container">
                        <table>
                            <thead>
                                <tr>
                                    <td style={{padding: '10px'}}>First Name</td>
                                    <td>LastName</td>
                                    <td>Email</td>
                                    <td>Phone Number</td>
                                    <td>Role</td>
                                    <td>Verfied</td>
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
                                        role={data.role}
                                        verified={JSON.stringify(data.verified)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        );
    }



    /*
    render() {

        
        return (
            <div>
                <div id="ud-header" className="ud-header" style={{ backgroundColor: '#DEDEDE', height: '200px' }}>
                    <div >
                        <AdminNavBar />
                    </div>

                    <div id="outer">
                        <div className="inner"><button type="submit" className="userDisplay" onClick={this.onClick} >Users</button></div>
                        <div className="inner"><button type="submit" className="userDisplay" onClick={this.onClick}>Teachers</button></div>
                        <div className="inner"><button type="submit" className="userDisplay" onClick={this.onClick}>Students</button></div>
                    </div>



                </div>

                <div className="ud-table-comp">


                    <table className="ud-table">
                        <thead>
                            <tr>
                                <th colSpan='6'>User Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(this.state.userDetails).map((data,key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{data.firstName}</td>
                                            <td>{data.lastName}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
    */

}


export default UserDetails;