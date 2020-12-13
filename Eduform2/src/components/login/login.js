import React, { Component } from "react";
import { Link } from "react-router-dom";
import googleBtn from '../../assets/btn_google_signin.png';
import Logo from '../.././assets/edLogo.png';
import NavBar from './navigation.js';
import UserProfile from '../.././utils/UserProfile';

import { GoogleLogin } from 'react-google-login';



//const clientId = "459178222733-akt56ten5kdp6vshn7n4bbololhh323i.apps.googleusercontent.com";

// Works with both local and AWS
const clientId = "595753582109-1mb2nlon8o9mrc89vs225527hsfaknfv.apps.googleusercontent.com";
const bcrypt = require('bcryptjs');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            formValid: false,
            errorCount: 0,
            user: {},
            response: '',
            saveUserProfile:{},
            errors:{
                email: '',
                password: '',
            }
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.checkUserStatus = this.checkUserStatus.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
    }

    initialize = () => {
        this.state.email = null;
        this.state.password = null;

    }



    async loginUser(event){
        event.preventDefault();

        this.state.user.email = document.getElementById("email").value;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(document.getElementById("password").value, salt);

        //this.state.user.password = hash;
        this.state.user.password = document.getElementById("password").value;

        try{
            const response = await fetch('/user/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                body: JSON.stringify(this.state.user)
            })
            .then(res => res.json())
            .then(jsonData => {

                if (jsonData.status === "SUCCESS!"){

                    var saveUserProfile = jsonData.result[0];

                    UserProfile.setUserProfile(saveUserProfile);


                    if (UserProfile.getRole() === 'a'){
                        return this.props.history.push('/admin-verify-user');
                    }
                    else if (UserProfile.getRole() === 't'){
                        return this.props.history.push('/teacher-home');
                    }
                    else{
                        return this.props.history.push('/student-home');
                    }
                } else{
                    alert(jsonData.status);
                }
                
                
            });

        } catch (error){
            alert(error);
            console.log(error);
        }

    } 
    

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: document.getElementById("email").value});
        this.setState({password: document.getElementById("password").value});
        
        let vars = ["email","password"];

        var i;
        let errorCount = 0;
        for (i = 0; i < vars.length; i++) {

            if(document.getElementById(vars[i]).value.length === 0){
                this.state.errors[vars[i]] = "Required";
                errorCount += 1;
            }
        }
        

        if(errorCount > 0){
            return ;
        } else{

            this.loginUser(event);

        }
    }

    handleEmail = (event) => {

        event.preventDefault();        

        this.setState({errors: Object.assign({}, this.state.errors, {email: ''})});
    
        this.setState({email: document.getElementById("email").value});

    }


    handlePassword = (event) => {
        event.preventDefault();        

        this.setState({errors: Object.assign({}, this.state.errors, {password: ''})});
    
        this.setState({password: document.getElementById("password").value});
    }

    googleSignInFailed (res){

        console.log('Google sign in failed!!');
        console.log(res);

    }

    async googleSignIn (res){

        if("error" in res){
            alert('Sign in was not successful');
        }else{
            
            try{
                
                var googleUser = {};
                googleUser.email = res.profileObj.email;

                const response = await fetch('/user/googleLogin?email=' + res.profileObj.email, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                })
                .then(res => res.json())
                .then(jsonData => {

                    if (jsonData.status === "SUCCESS!"){

                        var saveUserProfile = jsonData.result[0];
                        UserProfile.setUserProfile(saveUserProfile);

                        alert("Login Successful");
                        if (UserProfile.getRole() === 'a'){
                            return this.props.history.push('/admin-home');
                        }
                        else if (UserProfile.getRole() === 't'){
                            return this.props.history.push('/teacher-home');
                        }
                        else{
                            return this.props.history.push('/student-home');
                        }

                    } 
                    
                    else if (jsonData.status !== "Username is not valid"){
                        alert("Kindly create an account first!");
                        return this.props.history.push('/sign-up');
                    } 
                    
                    else{
                        alert(jsonData.status);
                    }

                    
                });
    
            } catch (error){
                alert(error);
            }
            

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

        this.checkUserStatus();

        return (

            <div className="App2">

                <div style={{paddingTop: '4%', paddingBottom: '5%'}} className="container">
                    <div style={{paddingRight: '2%', paddingLeft: '2%'}} className="row myIntro">
                    <div style={{padding: '0% 3% 1% 3%', paddingTop: '2%'}} className="col-lg-5 col-md-7 bg-black myLogIn text-primarys">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <img style={{width: '70px', height: '70px'}} src={Logo} alt="edLogo"/>
                            <h1 className="welcome" style={{marginTop: '1.5%', fontSize: '2.5rem', paddingBottom: '10px'}}> Login to EduForm </h1>

                            <div className="form-group">
                                <input type= "email" id="email" name="email" className="form-control" placeholder="Enter email" style={{fontSize: '.9rem'}} onChange={this.handleEmail} noValidate/>
                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <input type= "password" id="password" name="password" className="form-control" placeholder="Enter password" style={{fontSize: '.9rem'}} onChange={this.handlePassword} noValidate/>
                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                            </div>

                            <button type="submit" className="btn btn-block log" style={{fontSize: '1.2rem', backgroundColor: '#febf63'}}> Log In </button>

                            <p style={{fontSize: '1rem', marginTop: "5px"}} className="forgot-password text-right">
                                <Link to="/password-reset" style={{color:'#febf63'}}>Forgot password?</Link>
                            </p>

                            <p style={{fontSize: '1rem', color: 'white', textAlign: 'center', marginBottom: '0'}} className="text-primarys">
                                or you can sign in with
                            </p>

                            <div className="col-12" style={{paddingTop: '18px'}}>
                                <GoogleLogin
                                    clientId={clientId}
                                    onSuccess={this.googleSignIn}
                                    onFailure={this.googleSignInFailed}
                                >

                                    <span> Login with Google</span>

                                </GoogleLogin>
                            </div>
                            <div style={{marginBottom: '1.5%'}} className="ui horizontal divider">
                                Or
                            </div>

                            <p style={{fontSize: '1.1rem', textAlign: 'left'}}> Need an Account? <Link style={{color:'#febf63'}} to="./sign-up"> Register </Link> </p>

                        </form>
                    </div>
                    </div>
                </div>
            </div>

        );



    }

// Useful links for forms:
//https://react-bootstrap.github.io/components/forms/
//https://reactjs.org/docs/forms.html
}


export default Login;
