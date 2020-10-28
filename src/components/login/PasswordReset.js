import React, { Component } from "react";
import Logo from '../.././assets/edLogo.png';
import { Link } from "react-router-dom";
import NavBar from './navigation.js';



class PasswordReset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            formValid: false,
            errorCount: 0,
            PasswordResetEmail: {},
            errors:{
                email: '',
                password: '',
            }
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialize = () => {
        this.state.email = null;
        this.state.password = null;
    }

    async sendPasswordResetEmail(event){
        event.preventDefault();

        this.state.PasswordResetEmail.email = document.getElementById("email").value;

        console.log("Email: ", this.state.PasswordResetEmail);

        try{
            const response = await fetch('/user/resetPassword', {
                method: 'POST',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                body: JSON.stringify(this.state.PasswordResetEmail)
            })
            .then(res => res.text())
            .then(text => {
                
                this.state.response = text;
                alert("Password reset email has been sent!");
                console.log("Response: ",text);
                
                return this.props.history.push('/sign-in');
                
            });

        } catch (error){
            alert(error)
            console.log("Error: ", error);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: document.getElementById("email").value});

        let vars = ["email"];

        var i;
        let errorCount = 0;
        for (i = 0; i < vars.length; i++) {

            if(document.getElementById(vars[i]).value.length === 0){
                this.state.errors[vars[i]] = "Required";
                errorCount += 1;
            }

        }

        if (errorCount>0){
            return;
        } else{
        
            this.sendPasswordResetEmail(event);
            
        }
 
    }


    handleEmail = (event) => {

        event.preventDefault();        

        this.setState({errors: Object.assign({}, this.state.errors, {email: ''})});
    
        this.setState({email: document.getElementById("email").value});

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
                            <h1 style={{paddingBottom: '10px'}}> Password Recovery </h1>
                            <p> Please enter your email </p>

                            <div className="form-group">
                                <input type= "email" id="email" name="email" className="form-control" placeholder="Enter email" style={{fontSize: '.9rem'}} onChange={this.handleEmail} noValidate/>
                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                            </div>
                            <button type="submit" className="btn btn-block log" style={{fontSize: '1.2rem', backgroundColor: '#febf63', marginBottom: '10px'}}>Send Email</button>

                            
                        </form>
                        </div>
                        </div>
                </div> 
            </div>
        );
  }
}


export default PasswordReset;
