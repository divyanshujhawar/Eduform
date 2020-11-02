import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from 'query-string';

import Logo from '../.././assets/edLogo.png';
import NavBar from './navigation.js';


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: null,
            confirmPassword: null,
            resetToken: '',
            formValid: false,
            errorCount: 0,
            errors:{
                password: '',
                confirmPassword: '',
            }
        };

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.checkToken = this.checkToken.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    initialize = () => {
        this.state.password = null;
        this.state.confirmPassword = null;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({password: document.getElementById("password").value});
        this.setState({confirmPassword: document.getElementById("confirmPassword").value});

        let vars = ["password", "confirmPassword"];

        var i;
        let errorCount = 0;
        for (i = 0; i < vars.length; i++) {

            if(document.getElementById(vars[i]).value.length === 0){
                this.state.errors[vars[i]] = "This cannot be empty";
                errorCount += 1;
            }

        }

        if (errorCount > 0){
            return;
        } else{
            this.updatePassword();
        }
    }

    
    async updatePassword(){

        console.log(this.state.password);

        try{
            const response = await fetch('/user/changePassword/'+this.state.resetToken + "?password=" + this.state.password, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'}
            })
            .then(res => res.text())
            .then(text => {

                console.log(text);



                if (text === "password changed successfully"){
                    alert(text);
                    return this.props.history.push('/sign-in');
                } else{
                    alert(text);
                    return this.props.history.push('/sign-in');
                }
                
            });

        } catch (error){
            alert(error);
        }

    }

    handleChange = (event) => {
        event.preventDefault();
        
        const { name, value } = event.target;
        let errors = this.state.errors;

        //this.setState({name: document.getElementById(name).value});
        this.state[name] = value;

        switch (name) {

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

    handlePassword = (event) => {

        event.preventDefault();        

        this.setState({errors: Object.assign({}, this.state.errors, {password: ''})});
    
        this.setState({password: document.getElementById("password").value});

    }


    handleConfirmPassword = (event) => {
        event.preventDefault();        

        this.setState({errors: Object.assign({}, this.state.errors, {confirmPassword: ''})});
    
        this.setState({confirmPassword: document.getElementById("confirmPassword").value});
    }



    checkToken(){
        let params = queryString.parse(this.props.location.search);
        

        if (!params.token){
            alert('Not a valid link!');
            return this.props.history.push('/sign-in');
        } else{

            this.state.resetToken = params.token;
        }
    }



    render() {
        const {errors} = this.state;

        this.checkToken();

        return (

            <div className="App2">

                <div>
                    <NavBar/>
                </div>

                <div style={{paddingTop: '4%', paddingBottom: '2%'}} className="container">
                    <div style={{paddingRight: '2%', paddingLeft: '2%'}} className="row myIntro">
                    <div style={{padding: '0% 3% 1% 3%', paddingTop: '2%'}} className="col-lg-5 col-md-7 bg-black myLogIn text-primarys">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <img style={{width: '70px', height: '70px'}} src={Logo} alt="edLogo"/>
                            <h1 className="welcome" style={{marginTop: '1.5%', fontSize: '2.5rem', paddingBottom: '10px'}}> Change Password </h1>


                            <div className="form-group">
                                <input type= "password" id="password" name="password" className="form-control" placeholder="Enter new password" style={{fontSize: '.9rem'}} onChange={this.handleChange} noValidate/>
                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <input type= "password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Re-enter new password" style={{fontSize: '.9rem'}} onChange={this.handleChange} noValidate/>
                                {errors.confirmPassword.length > 0 && <span className='error'>{errors.confirmPassword}</span>}
                            </div>

                            <button type="submit" className="btn btn-block log" style={{fontSize: '1.2rem', backgroundColor: '#febf63', marginBottom: '10px'}}>Confirm Password Change</button>
                        </form>
                        </div>
                        </div>
                    </div>

            </div>
        );
  }

}

export default withRouter(ChangePassword);
