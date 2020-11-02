import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

class OptionWheel extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        homeLink : this.props.linkToCourse
      }
    }

    render(){
      return(

          <div style={{paddingTop: '15px'}}className="col-md-8 col-sm-12">
          <div style={{marginBottom: '45px'}} className="row">
            <div style={{textAlign: 'right', paddingRight: '30px'}} className="col-6">
            <Link to={`./${this.state.homeLink}-grades`}>
              <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
                <i style={{fontSize: '5.5rem', color:'#1089ff'}} class="fas fa-percent"></i>
                <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Grades </h3>
              </a>
            </Link>
            </div>
            <div style={{textAlign: 'left',paddingLeft: '30px'}} className="col-6">
            <Link to={`./${this.state.homeLink}`}>
              <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
                <i style={{fontSize: '5.5rem', color:'#1089ff'}} className="fas fa-home"></i>
                <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Home </h3>
              </a>
            </Link>
            </div>
          </div>
          <div style={{marginBottom: '10px'}} className="row">
            <div style={{textAlign: 'right'}} className="col-5">
            <Link to={`./${this.state.homeLink}-notifications`}>
              <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
                <i style={{fontSize: '5.5rem', color:'#1089ff'}} class="fas fa-exclamation-circle"></i>
                <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Notifications </h3>
              </a>
            </Link>
            </div>
            <div style={{fontSize: '7.5rem',textAlign: 'center'}} className="col-2">
              <i style={{color:'#febf63'}} class="fas fa-circle"></i>
            </div>
            <div style={{paddingLeft: '32px',textAlign: 'left'}} className="col-5">
            <Link to={`./${this.state.homeLink}-assignments`}>
              <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
                <i style={{fontSize: '5.5rem', color:'#1089ff'}} class="fas fa-copy"></i>
                <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Assignments </h3>
              </a>
            </Link>
            </div>
          </div>
          <div style={{marginTop:'35px'}}className="row">
            <div style={{textAlign: 'center'}} className="col-12">
            <Link to={`./${this.state.homeLink}-chat`}>
              <a style={{marginTop: '10px', paddingBottom: '10px'}} className="item">
                <i style={{fontSize: '5.5rem', color:'#1089ff'}} className="far fa-comment"></i>
                <h3 style={{marginTop: '2px', marginBottom: '0px', color: '#febf63'}}> Chat </h3>
              </a>
            </Link>
            </div>
            </div>

          </div>
      );
    }
}

export default OptionWheel;
