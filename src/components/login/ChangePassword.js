import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from '../.././assets/edLogo.png';

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


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            formValid: false,
            errorCount: 0,
            errors:{
                email: '',
                password: '',
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

            return this.props.history.push('/sign-in');

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
          <div style={{height: '415px'}} className="container">
            <div style={{marginTop: '55px'}} className="row myIntro">
              <div className="col-lg-5 col-md-7 bg-black myLogIn text-primarys">
                <form onSubmit={this.handleSubmit} noValidate>
                    <img style={{width: '70px', height: '70px'}} src={Logo} alt="edLogo"/>
                    <h1 style={{paddingBottom: '10px'}}> Change Password </h1>
                    <p> Enter your new password </p>

                    <div className="form-group">
                        <input type= "email" id="email" name="email" className="form-control" placeholder="Enter new password" style={{fontSize: '.9rem'}} onChange={this.handleChange} noValidate/>
                        {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                    </div>
                    <p> Re-enter your new password </p>
                    <div className="form-group">
                        <input type= "email" id="email" name="email" className="form-control" placeholder="Re-enter new password" style={{fontSize: '.9rem'}} onChange={this.handleChange} noValidate/>
                        {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                    </div>

                    <button type="submit" onChange={this.onButtonClick} className="btn btn-block log" style={{fontSize: '1.2rem', backgroundColor: '#febf63', marginBottom: '10px'}}>Confirm Password Change</button>
                </form>
                </div>
                </div>
            </div>

        );
  }
}

export default withRouter(ChangePassword);
