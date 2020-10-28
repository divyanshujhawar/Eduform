import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Personal from '../../assets/cat.jpg';

const Announcements = () => {
  return(
    <div class="ui relaxed list">
      <div style={{marginBottom: '5px'}} class="item">
        <img class="ui avatar image" src={Personal}/>
        <div class="content">
          <a class="header">Divyanshu</a>
          <div class="description">Guys we really need to finish the sprint 2 tonight!</div>
          <p> <b> P465 </b> </p>
        </div>
      </div>
      <div style={{marginBottom: '5px'}} class="item">
        <img class="ui avatar image" src={Personal}/>
        <div class="content">
          <a class="header">Shubham Gaikwad</a>
          <div class="description">Everyone is doing a great job! Keep it up!</div>
          <p> <b> P465 </b> </p>
        </div>
      </div>
      <div style={{marginBottom: '5px'}} class="item">
        <img class="ui avatar image" src={Personal}/>
        <div class="content">
          <a class="header">Bryant Hunsberger</a>
          <div class="description">I am working on the Student page right now!</div>
          <p> <b> P465 </b> </p>
        </div>
      </div>
      <div style={{marginBottom: '5px'}} class="item">
        <img class="ui avatar image" src={Personal}/>
        <div class="content">
          <a class="header">Bryant Hunsberger</a>
          <div class="description">I am finishing up on some UI elements! I am noew finishing some of the docs!</div>
          <p> <b> P465 </b> </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
