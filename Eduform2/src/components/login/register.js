import React, { Component } from "react";
import Logo from '../.././assets/edLogo.png';
import { Link } from "react-router-dom";
import NavBar from './navigation.js';

import UserProfile from '../.././utils/UserProfile';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validPhoneRegex = RegExp(/^\d+$/i);
const bcrypt = require('bcryptjs');

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            role: null,
            password: null,
            confirmPassword: null,
            response: '',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                role: '',
                password: '',
                confirmPassword: '',
          },

        }

    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors;

        //this.setState({name: document.getElementById(name).value});
        this.state[name] = value;

        switch (name) {

            case 'firstName':
                errors.firstName =
                value.length === 0
                    ? 'First name cannot be empty'
                    : '';
                break;
            case 'lastName':
                errors.lastName =
                  value.length === 0
                    ? 'Last name cannot be empty'
                    : '';
                break;
            case 'email':
                errors.email =
                validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid';
                break;
            case 'phone':
                errors.phone =
                (value.length === 10 && (validPhoneRegex.test(value)))
                    ? ''
                    : 'Invalid phone number';
                break;
            case 'password':
                errors.password =
                value.length < 8
                    ? 'Password must be atleast 8 characters long'
                    : '';
                if(errors.password === '' && document.getElementById("password").value === document.getElementById("confirmPassword").value){
                    errors.confirmPassword = '';
                } else{
                    errors.confirmPassword = 'Passwords do not match';
                }

                break;

            case 'confirmPassword':
                errors.confirmPassword =
                value !== document.getElementById("password").value
                    ? 'Passwords do not match'
                    : '';
                break;

            default:
                break;
        }

        this.setState({errors, [name]: value});

    }

    async registerUser(event){

        event.preventDefault();


        this.state.user.firstName = this.state.firstName;
        this.state.user.lastName = this.state.lastName;
        this.state.user.email = this.state.email;
        this.state.user.phoneNumber = parseInt(this.state.phone, 10);

        if(this.state.role === 'admin'){
            this.state.user.role = 'a';
        } else if(this.state.role === 'teacher'){
            this.state.user.role = 't';
        } else{
            this.state.user.role = 's';
        }


        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(this.state.password, salt);

        //this.state.user.password = hash;
        this.state.user.password = this.state.password;

        try{
            const response = await fetch('/user/registration', {
                method: 'POST',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                body: JSON.stringify(this.state.user)
            })
            .then(res => res.text())
            .then(text => {

                this.state.response = text;
                if (text !== "SUCCESS!"){
                    alert("This email address already exists");
                } else{
                    alert("Please wait for the admin to verify your account!");
                    return this.props.history.push('/sign-in');
                }
            });

            console.log(response.text());

        } catch (error){
            console.log(error);
        }


    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.setState({firstName: document.getElementById("firstName").value});
        this.setState({lastName: document.getElementById("lastName").value});
        this.setState({email: document.getElementById("email").value});
        this.setState({phone: document.getElementById("phone").value});
        this.setState({role: document.getElementById("role").value});
        this.setState({password: document.getElementById("password").value});
        this.setState({confirmPassword: document.getElementById("confirmPassword").value});

        console.log(this.state.errors);

        let vars = ["firstName","lastName","email","phone","role","password","confirmPassword"];

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

            this.registerUser(event);

        }
    }

    checkUserStatus(){

        const UserEmail = UserProfile.getEmail();
        const role = UserProfile.getRole();

        if (UserEmail){
            if (role === 'a'){
                return this.props.history.push('/admin-home');
        
            }
            else if (role === 't'){
                return this.props.history.push('/teacher-home');
            }
            else{
                return this.props.history.push('/student-home');
            }
        }
    }


    render() {
        const {errors} = this.state;
        return (
        <div className="App2">

            <div style={{paddingTop: '4%', paddingBottom: '2%'}} className="container">
                <div style={{paddingRight: '2%', paddingLeft: '2%'}} className="row myIntro">
                <div style={{padding: '0% 3% 1% 3%', paddingTop: '2%'}} className="col-lg-5 col-md-7 bg-black myLogIn text-primarys">
                    <form onSubmit={this.handleSubmit} noValidate>
                    <img style={{width: '70px', height: '70px'}} src={Logo} alt="edLogo"/>
                    <h1 className="welcome" style={{marginTop: '1.5%', fontSize: '2.5rem', paddingBottom: '10px'}}> Register for EduForm! </h1>

                                
                            <div className="form-group" style ={{alignSelf: 'center', backgroundColor: '#1089ff'}}>
                                <select name="role" id="role" name="role" style={{fontSize: '.9rem'}}>
                                    <option>admin</option>
                                    <option>teacher</option>
                                    <option>student</option>
                                </select>
                            </div>

                            <div style={{marginBottom: '13px'}}class="form-row">
                                <div class="col">
                                  <input type="text" style={{fontSize: '.9rem'}} id="firstName" name="firstName" className="form-control" placeholder="First name" onChange={this.handleChange} noValidate/>
                                  {errors.firstName.length > 0 && <span className='error'>{errors.firstName}</span>}
                                </div>
                                <div class="col">
                                  <input type="text" style={{fontSize: '.9rem'}} id="lastName" name="lastName" className="form-control" placeholder="Last name" onChange={this.handleChange} noValidate/>
                                  {errors.lastName.length > 0 && <span className='error'>{errors.lastName}</span>}
                                </div>
                              </div>


                            <div className="form-group">
                                <input type="email" style={{fontSize: '.9rem'}} id="email" name="email" className="form-control" placeholder="Email Address" onChange={this.handleChange} noValidate/>
                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <input type="phone" style={{fontSize: '.9rem'}} id="phone" name="phone" className="form-control" placeholder="Phone Number" onChange={this.handleChange} noValidate/>
                                {errors.phone.length > 0 && <span className='error'>{errors.phone}</span>}
                            </div>
                            {/*
                            <div className="form-group">
                                <input type="text" style={{fontSize: '.9rem'}} id="role" name="role" className="form-control" placeholder="Role(a/t/s)" onChange={this.handleChange} noValidate/>
                                {errors.role.length > 0 && <span className='error'>{errors.role}</span>}
                            </div>
                            */}

                            <div style={{marginBottom: '13px'}} class="form-row">
                                <div class="col">
                                  <input type="password" style={{fontSize: '.9rem'}} id="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} noValidate/>
                                  {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                </div>
                                <div class="col">
                                  <input type="password" style={{fontSize: '.9rem'}} id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm password" onChange={this.handleChange} noValidate/>
                                  {errors.confirmPassword.length > 0 && <span className='error'>{errors.confirmPassword}</span>}
                                </div>
                              </div>


                            <button type="submit" className="btn btn-block log" style={{fontSize: '1.2rem', backgroundColor: '#febf63'}}> <b> Register </b></button>

                            <p className="forgot-password text-left" style={{paddingTop: '2.5%',paddingBottom: '.5%', fontSize: '1.1rem'}}>
                                Already registered? <Link to="./sign-in" style={{color: '#febf63'}}>Sign In</Link>
                            </p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }


}


export default Register;
