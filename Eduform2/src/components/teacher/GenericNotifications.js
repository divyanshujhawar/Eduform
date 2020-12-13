import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../student/TeacherNavigation';
import Notifications from '../teacher/NotificationBlocks.js';

class GenericNotifications extends React.Component{

  constructor(props){
    super(props);
    const {currentClassNotes} = this.props.location.notestate;

    this.state = {
        myCourse : currentClassNotes,
    }

  }

  render(){

    return(
      <div className="backGroundTeach">
           <div className="container">
             <div style={{marginTop:'10px'}} className="row">
                 <div className="col-md-1 col-sm-2"></div>
                 <div style={{textAlign: 'left'}} className="col-md-11 col-sm-8">
                   <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>

                   <h1 className="studentWords" style={{fontSize: '2.4rem'}}> <Link to={{pathname: '/course102012930',state : {
                     currentClass : this.state.myCourse
                   }}} > <i style={{marginRight:'20px'}} class="fas fa-chevron-circle-left"></i> </Link>Notifications</h1>

                   <hr style={{marginBottom: '30px'}}/>
                    <Notifications whichCourse={this.state.myCourse}/>
                 </div>
             </div>

              <NavBar />
           </div>
        </div>
    );
  }
}

export default GenericNotifications;
