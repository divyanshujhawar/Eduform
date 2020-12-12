import React, { Component } from "react";
import { Link } from "react-router-dom";
import googleBtn from '../../assets/btn_google_signin.png';
import Logo from '../.././assets/edLogo.png';
import HomeDashBar from '../.././assets/eduHome.png';
import HomeDash from '../.././assets/eduHome2.png';

import GradeSearch from '../.././assets/gradeSearch.png';
import AssignmentSearch from '../.././assets/aSearch.png';
import AnnounceSearch from '../.././assets/anSearch.png';

import Bat from '../.././assets/bats.png';
import IU from '../.././assets/iuform.png';
import Dino from '../.././assets/dinoform.png';

import NavBar from './navigation.js';
import UserProfile from '../.././utils/UserProfile';
import Bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';

import { GoogleLogin } from 'react-google-login';


class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            iter : 0,
            transitionWord : 'Advanced',
            dashNum : 0,
            searchNum : 0,
            themeNum : 0
        }

        this.centerWord = this.centerWord.bind(this);
        this.pickDashImage = this.pickDashImage.bind(this);
        this.dashImage = this.dashImage.bind(this);
        this.pickSearchImage = this.pickSearchImage.bind(this);
        this.searchImage = this.searchImage.bind(this);
        this.pickThemeImage = this.pickThemeImage.bind(this);
        this.themeImage = this.themeImage.bind(this);
    }

    centerWord() {
        const keyWords = ['Innovative', 'Visionary', 'Modern', 'Advanced', 'Revolutionary'];

        if(this.state.iter === 4)
        {
            this.setState({iter : 0, transitionWord : keyWords[this.state.iter]});
        }
        else{
            this.setState({iter : this.state.iter + 1, transitionWord : keyWords[this.state.iter]});
        }
      
    }

    componentDidMount()
    {
        setInterval(this.centerWord, 5000);
        setInterval(this.pickDashImage, 5000);
        setInterval(this.pickSearchImage, 5000);
        setInterval(this.pickThemeImage, 5000);
    }

    pickDashImage()
    {
        if(this.state.dashNum === 1)
        {
            this.setState({dashNum : 0});
        }
        else{
            this.setState({dashNum : 1});
        }

    }

    dashImage()
    {
        if(this.state.dashNum === 1)
        {
            return HomeDashBar;
        }
        else{
            return HomeDash;
        }
    }

    pickSearchImage()
    {
        if(this.state.searchNum === 2)
        {
            this.setState({searchNum : 0});
        }
        else{
            this.setState({searchNum : this.state.searchNum + 1});
        }

    }

    searchImage()
    {
        if(this.state.searchNum === 1)
        {
            return AssignmentSearch;
        }
        else if(this.state.searchNum === 2)
        {
            return GradeSearch;
        }
        else{
            return AnnounceSearch;
        }
    }

    pickThemeImage()
    {
        if(this.state.themeNum === 2)
        {
            this.setState({themeNum : 0});
        }
        else{
            this.setState({themeNum : this.state.themeNum + 1});
        }

    }

    themeImage()
    {
        if(this.state.themeNum === 1)
        {
            return Bat;
        }
        else if(this.state.themeNum === 2)
        {
            return IU;
        }
        else{
            return Dino;
        }
    }


    render(){

        return(

            <div className="homsePage">
                <div className="homePic flex-container">

                <nav className="navbar navbar-expand-lg navbar-dark">
                
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul style={{fontSize: '1.2rem'}} class="navbar-nav ml-auto adminWordHead">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="sign-in">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="sign-up">Register</Link>
                        </li>
                  
                        </ul>
                    </div>
                    </nav>

                    <h1 className="adminWordHead" style={{fontSize: '3.8rem',color: 'white'}}><b>Welcome to Eduform</b></h1>
                    <p className="adminWordHead" style={{fontSize: '1.3rem',color: 'white'}}><b>The Future of Education Starts Here!</b></p>
                    <br/>
                    <br/>
                    <p className="adminWordHead" style={{fontSize: '1rem',color: 'white'}}>{this.state.transitionWord}</p>
        
                    
                </div>
                <div style={{padding: '60px 120px 90px 80px',height: '100%',backgroundColor: '#febf63'}} className="flex-container">
                    <div  style={{textAlign: 'center'}} className="row">
                        <h1 className="adminWordHead2" style={{margin: 'auto',fontSize: '3.4rem'}}>Core Features</h1>
                        
                      
                    </div>
                    <div style={{borderColor: '#1089ff',paddingTop: '130px',marginLeft: '0px'}} className="row">
                        <div style={{borderLeft: 'solid', borderColor: 'white'}} className="col-7">
                            <h2 style={{paddingRight: '95px',paddingTop: '100px'}} className="adminWordHead2">Elegant UI and Dynamic Dashboard</h2>
                        </div>
                        <div style={{borderWidth: '1px',borderRadius: '15px',paddingTop: '20px',width: '750px',height: '237px',backgroundColor: 'white'}} className="col-5">
                        <div class="ui card">
                            <a class="image" href="#">
                                <img style={{height: '200px', width: '420px'}} src={this.dashImage()}/>
                            </a>
                       
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop: '150px',marginLeft: '20px'}} className="row">
                        <div  style={{borderWidth: '1px',borderRadius: '15px',paddingTop: '20px',width: '750px',height: '237px',backgroundColor: 'white'}} className="col-5">
                        <div class="ui card">
                            <a class="image" href="#">
                                <img style={{height: '200px', width: '420px'}} src={this.searchImage()}/>
                            </a>
                       
                            </div>
                        </div>
                        <div style={{borderRight: 'solid', borderColor: 'white'}}className="col-7">
                             <h2 style={{paddingLeft: '95px',paddingTop: '100px'}} className="adminWordHead2">Powerful Search Techniques</h2>
                        </div>
                    </div>
                    <div style={{paddingTop: '150px',marginLeft: '20px'}} className="row">
                    <div style={{borderLeft: 'solid', borderColor: 'white'}} className="col-7">
                            <h2 style={{paddingRight: '75px',paddingTop: '70px'}} className="adminWordHead2">Custom Themes and More</h2>
                        </div>
                        <div style={{borderWidth: '1px',borderRadius: '15px',paddingTop: '20px',width: '750px',height: '237px',backgroundColor: 'white'}} className="col-5">
                        <div class="ui card">
                            <a class="image" href="#">
                                <img style={{height: '200px', width: '420px'}} src={this.themeImage()}/>
                            </a>
                       
                            </div>
                        </div>
                    </div>

                </div>

                <div className="homePic flex-container">

                    <h1 className="adminWordHead" style={{fontSize: '3.8rem',color: 'white'}}><b>Welcome to Eduform</b></h1>
                    <p className="adminWordHead" style={{fontSize: '1.3rem',color: 'white'}}><b>The Future of Education Starts Here!</b></p>
        
                    
                </div>

                <div style={{height: '600px',backgroundColor: '#1089ff'}} className="flex-container">

                <div style={{width: '100%',padding: '0 0', margin: '0 0'}} class="row row-cols-1 row-cols-md-3">
                    <div style={{width: '100%'}} class="col mb-4">
                        <div class="card">
                        <img src={Logo} class="card-img-top" alt="..."/>
                    
                        </div>
                    </div>
                    <div style={{width: '100%'}} class="col mb-4">
                        <div class="card">
                        <img src={Logo} class="card-img-top" alt="..."/>
                    
                        </div>
                    </div>
                    <div style={{width: '100%'}} class="col mb-4">
                        <div class="card">
                        <img src={Logo} class="card-img-top" alt="..."/>
                     
                        </div>
                    </div>
             
                    </div>
                </div>
            </div>
    
        );



    }

}


export default Home;
