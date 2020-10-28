import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const UpcomingAssignments = () => {
  return(
    <div>
    <div style={{marginTop: '15px'}} className="currentDay">
      <h3 style={{color:'#febf63'}}> Monday - 10/18/2020 </h3>
      <div class="ui celled list">
          <div class="item">
            <h3> B461 </h3>
            <div class="content">
              <div class="header">Assignment 4</div>
              <p style={{fontSize: '.9rem'}}> Due: 11:59pm </p>
            </div>
          </div>
          <div class="item">
            <h3> P465 </h3>
            <div class="content">
              <div class="header">Sprint 2</div>
              <p style={{fontSize: '.9rem'}}> Due: 11:59pm </p>
            </div>
          </div>
          <div class="item">
            <h3> C335 </h3>
            <div class="content">
              <div class="header">Homework 6</div>
              <p style={{fontSize: '.9rem'}}> Due: 7:30pm </p>
            </div>
          </div>
          <div class="item">
            <h3> C212 </h3>
            <div class="content">
              <div class="header">Lab 9</div>
              <p style={{fontSize: '.9rem'}}> Due: 9:30pm </p>
            </div>
          </div>
          <div class="item">
            <h3> C200 </h3>
            <div class="content">
              <div class="header">Lab 4</div>
              <p style={{fontSize: '.9rem'}}> Due: 7:30pm </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop: '15px'}} className="tommorow">
        <h3 style={{color:'#febf63'}}> Tuesday - 10/19/2020 </h3>
        <div class="ui celled list">
        <div class="item">
          <h3> B461 </h3>
          <div class="content">
            <div class="header">Assignment 4</div>
            <p style={{fontSize: '.9rem'}}> Due: 11:59pm </p>
          </div>
        </div>
        <div class="item">
          <h3> P465 </h3>
          <div class="content">
            <div class="header">Sprint 2</div>
            <p style={{fontSize: '.9rem'}}> Due: 11:59pm </p>
          </div>
        </div>
        <div class="item">
          <h3> C335 </h3>
          <div class="content">
            <div class="header">Homework 6</div>
            <p style={{fontSize: '.9rem'}}> Due: 7:30pm </p>
          </div>
        </div>
        </div>
        <div style={{marginTop: '15px'}} className="lastDay">
        <h3 style={{color:'#febf63'}}> Wednesday - 10/20/2020 </h3>
        <div class="ui celled list">
        <div class="item">
          <h3> B461 </h3>
          <div class="content">
            <div class="header">Assignment 4</div>
            <p style={{fontSize: '.9rem'}}> Due: 11:59pm </p>
          </div>
        </div>
        <div class="item">
          <h3> P465 </h3>
          <div class="content">
            <div class="header">Sprint 2</div>
            <p style={{fontSize: '.9rem'}}> Due: 11:59pm </p>
          </div>
        </div>
        <div class="item">
          <h3> C335 </h3>
          <div class="content">
            <div class="header">Homework 6</div>
            <p style={{fontSize: '.9rem'}}> Due: 7:30pm </p>
          </div>
        </div>
        </div>
        </div>
        </div>


          </div>
  );
};

export default UpcomingAssignments;
