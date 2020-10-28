import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Logo from '../.././assets/edLogo.png';
import { Link } from "react-router-dom";
import NavBar from './navigation.js';

const validateForm = (errors) => {
    let valid = true
    Object.values(errors).forEach(
    // if we have an error string, set valid to false
    (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (count = count+1)
    );
    return count;
}


class Confirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            confirmPassword: null,
            formValid: false,
            errorCount: 0,
            errors:{
                email: '',
                password: '',
                confirmPassword: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialize = () => {
        this.state.email = null;
        this.state.password = null;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let vars = ["email"];

        var i;
        for (i = 0; i < vars.length; i++) {

            if(document.getElementById(vars[i]).value.length === 0){
                this.state.errors[vars[i]] = "Required";
            }

        }

        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});


        if (this.state.errorCount === 0 && this.state.formValid){

            //alert("You are logged in!");
            console.log('Logged In');

            //return <Redirect to = "./sign-up" />

            return this.props.history.push('/ChangePassword');

            //Initialize variables
            //initialize()
        }
    }

    handleChange = (event) => {

        event.preventDefault();


        this.state.errors["email"] = "";
        this.state.errors["password"] = "";

        const { name, value } = event.target;

        this.state[name] = value

    }

    onButtonClick = (event) =>
    {
      event.preventDefault();
    }

    googleSignIn = () => {
        console.log('Click!!!!');
     }

    render() {
        const {errors} = this.state;
        return (
            <div className="App2">

            <div>
                <NavBar/>
            </div>

                <div style={{paddingTop: '4%', paddingBottom: '2%'}} className="container">
                    <div style={{paddingRight: '2%', paddingLeft: '2%'}} className="row myIntro">
                    <div style={{padding: '0% 3% 1% 3%'}} className="col-lg-5 col-md-7 bg-black myLogIn text-primarys">
                        <form onSubmit={this.handleSubmit} noValidate>
                            <img style={{width: '70px', height: '70px'}} src={Logo} alt="edLogo"/>
                            <h1 style={{paddingBottom: '10px'}}> Confirmation </h1>
                            <p> Please enter the new password </p>

                            <div className="form-group">
                                <input type="password" style={{fontSize: '.9rem'}} id="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} noValidate/>
                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                            </div>

                            <div className="form-group">
                                <input type="password" style={{fontSize: '.9rem'}} id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm password" onChange={this.handleChange} noValidate/>
                                {errors.confirmPassword.length > 0 && <span className='error'>{errors.confirmPassword}</span>}
                            </div>

                            <button type="submit" onChange={this.onButtonClick} className="btn btn-block log" style={{fontSize: '1.2rem', backgroundColor: '#febf63', marginBottom: '10px'}}>Check Code</button>
                        </form>
                        </div>
                        </div>
                    </div>
            </div>

        );
  }
}

export default withRouter(Confirmation);
