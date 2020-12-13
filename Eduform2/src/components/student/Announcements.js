import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Personal from '../../assets/cat.jpg';
import Mini from '../student/UpcomingAnnouncementsBlocks.js';

class Announcements extends React.Component {
  

  constructor(props){
    super(props);

    var cssType = 'edu';
        if(this.props.getstyle){
          cssType = this.props.getstyle;
        }
        else{
          cssType = 'edu';
        }

      this.state = {
        pageTheme : cssType
      }
  }
  render(){
    return(
      <Mini styler={this.state.pageTheme}/>
    );
  }
}

export default Announcements;
