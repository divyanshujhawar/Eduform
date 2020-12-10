import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Wheel from '../student/OptionWheel';

class NewNavbar extends React.Component{

  
    
    render(){

        

        return(
            <div style={{margin: 'auto',width: '300px',height: '40px', backgroundColor: '#febf63'}} className="row  dashItems">
                 
                 <div className="col-4"> 
                    <button type="button" class="btn btn-primary" onClick={this.bar}>Primary</button>
                 </div>
                 
                <div className="col-8" style={{color: 'white'}}> 
                <h1 className="welcome" style={{fontSize: '2.6rem', color: '#1089ff'}}>
                     Eduform </h1></div>
            </div>
        );
    }
}

export default NewNavbar;