import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Bootstrap2 from '../../.././node_modules/bootstrap/dist/js/bootstrap.min.js'
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from '../teacher/TeacherNavigation';
import IU from '../.././assets/IU.jpg';
import Bat from '../.././assets/bat.png';
import Dino from '../.././assets/dino.png';


class TeacherSettings extends React.Component {
  constructor(props) {
      super(props);

      var cssType;
      if (this.props.location.colors5) {
          cssType = this.props.location.colors5;
      }
      else {
          cssType = 'edu';
      }

      var presetForNav = false;

      var defVal = 70;
      if (this.props.toggleState) {
          presetForNav = this.props.toggleState;
          if (presetForNav === true) {
              defVal = 175;

          }
          else {
              defVal = 70;

          }
      }
      else {
          presetForNav = true;
          defVal = 175;

      }

      const batVals = ["batbackground", "batwords", "batheader", "Batform", "#fddb3a", "black"];
      const eduVals = ["backgroundGenericCourse", 'teachWords', 'eduheader', "Eduform", '#febf63', "black"];
      const iuVals = ['iubackground', 'iuwords', 'iuheader', "IUform", "white", "#a20a0a"];
      const dinoVals = ['dinobackground', 'dinowords', 'dinoheader', 'Dinoform', "black", "#8db596"];

      var whichCssbackground;
      var whichCsswords;
      var whichCssothers;
      var wordDisplay;
      var headerback;
      var headerwordcolor;

      if (cssType === 'dino') {
          whichCssbackground = dinoVals[0];
          whichCsswords = dinoVals[1];
          whichCssothers = dinoVals[2];
          wordDisplay = dinoVals[3];
          headerback = dinoVals[4];
          headerwordcolor = dinoVals[5];
      }
      else if (cssType === 'bat') {
          whichCssbackground = batVals[0];
          whichCsswords = batVals[1];
          whichCssothers = batVals[2];
          wordDisplay = batVals[3];
          headerback = batVals[4];
          headerwordcolor = batVals[5];
      }
      else if (cssType === 'iu') {
          whichCssbackground = iuVals[0];
          whichCsswords = iuVals[1];
          whichCssothers = iuVals[2];
          wordDisplay = iuVals[3];
          headerback = iuVals[4];
          headerwordcolor = iuVals[5];
      }
      else {
          whichCssbackground = eduVals[0];
          whichCsswords = eduVals[1];
          whichCssothers = eduVals[2];
          wordDisplay = eduVals[3];
          headerback = eduVals[4];
          headerwordcolor = eduVals[5];
      }


      this.state = {
          pageTheme: cssType,
          displayNav: presetForNav,

          itemPad: defVal,
          theBackground: whichCssbackground,
          theWords: whichCsswords,
          others: whichCssothers,
          headerWord: wordDisplay,
          selectheaderback: headerback,
          colorOfHeadWord: headerwordcolor
      }

      this.bar = this.bar.bind(this);

      this.displayer = this.displayer.bind(this);
      this.changeTheme = this.changeTheme.bind(this);

  }
  displayer() {

      if (this.state.displayNav === true) {

          return (<NavBar thetog={this.state.displayNav} colorspass={this.state.pageTheme} />);
      }
      else {
          return <p></p>;
      }
  }

  bar() {
      this.setState({ displayNav: !this.state.displayNav });
      
      if (this.state.itemPad === 70) {
          this.setState({ itemPad: 175 });
      }
      else {
          this.setState({ itemPad: 70 });
      }

  }

  changeTheme = (value) => {

      const batVals = ["batbackground", "batwords", "batheader", "Batform", "#fddb3a", "black"];
      const eduVals = ["backgroundGenericCourse", 'teachWords', 'eduheader', "Eduform", '#febf63', "black"];
      const iuVals = ['iubackground', 'iuwords', 'iuheader', "IUform", "white", "#a20a0a"];
      const dinoVals = ['dinobackground', 'dinowords', 'dinoheader', 'Dinoform', "black", "#8db596"];


      if (value === "iu") {
          this.setState({
              theBackground: iuVals[0], theWords: iuVals[1], others: iuVals[2], pageTheme: 'iu', headerWord: iuVals[3], selectheaderback: iuVals[4],
              colorOfHeadWord: iuVals[5]
          })

      }
      else if (value === "bat") {
          this.setState({
              theBackground: batVals[0], theWords: batVals[1], others: batVals[2], pageTheme: 'bat', headerWord: batVals[3], selectheaderback: batVals[4],
              colorOfHeadWord: batVals[5]
          })
      }
      else if (value === "dino") {
          this.setState({
              theBackground: dinoVals[0], theWords: dinoVals[1], others: dinoVals[2], pageTheme: 'dino', headerWord: dinoVals[3], selectheaderback: dinoVals[4],
              colorOfHeadWord: dinoVals[5]
          })
      }
      else {
          this.setState({
              theBackground: eduVals[0], theWords: eduVals[1], others: eduVals[2], pageTheme: 'edu', headerWord: eduVals[3], selectheaderback: eduVals[4],
              colorOfHeadWord: eduVals[5]
          })
      }
      
      // This line will hide the navigation bar on changing theme, so commented it!
      //this.bar();


      return;

  }

  render() {
      return (
          <div className={`${this.state.theBackground}`}>
              <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                  <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: `${this.state.selectheaderback}` }} className="row dashItems">

                      <h1 className={`${this.state.others}`} style={{ color: `${this.state.colorOfHeadWord}`, margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: `${this.state.colorOfHeadWord}`, marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                          {this.state.headerWord}</h1>

                  </div>
                  <div style={{ marginTop: '30px' }} className="row">

                      <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-12">
                          <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                          <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.6rem' }}> Settings</h1>
                          <hr style={{ marginBottom: '30px' }} />

                      </div>
                  </div>
                  <div style={{ marginTop: '30px' }} className="row">

                      <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-12">

                          <h1 className={`${this.state.theWords}`} style={{ textAlign: 'center', fontSize: '2.4rem' }}> Choose a Theme</h1>
                          <hr style={{ marginBottom: '30px' }} />

                      </div>
                  </div>
                  <div class="ui special cards">
                      <div style={{ marginBottom: '10px', cursor: 'pointer'}} className="col-md-3 col-sm-12" onClick={() => this.changeTheme("iu")} >
                          <div class="card">
                              <div class="blurring dimmable image">
                                  <div class="ui dimmer">
                                      <div class="content">
                                          <div class="center">
                                              <div class="ui inverted button">Add Friend</div>
                                          </div>
                                      </div>
                                  </div>
                                  <img src={IU} alt="IU Logo" height='100px' width='100px' />
                              </div>
                              <div class="content">
                                  <a class="header">Indiana University</a>
                                  <div class="meta">
                                      <button style={{ backgroundColor: '#a20a0a', color: 'white' }} type="button" class="btn">Go Hoosiers!</button>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div style={{ marginBottom: '10px' }} className="col-md-3 col-sm-12">
                          <div style={{ backgroundColor: 'white', cursor: 'pointer'}} class="card" onClick={() => this.changeTheme("edu")}>
                              <div class="blurring dimmable image">
                                  <div class="ui dimmer">
                                      <div class="content">
                                          <div class="center">
                                              <div class="ui inverted button">Add Friend</div>
                                          </div>
                                      </div>
                                  </div>
                                  <img src={Logo} alt="Eduform Logo" height='100px' width='100px' />
                              </div>
                              <div class="content">
                                  <a class="header">Original Eduform</a>
                                  <div class="meta">
                                      <button style={{ backgroundColor: '#febf63', color: '#1089ff' }}  type="button" class="btn">Welcome Back!</button>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div style={{ marginBottom: '10px'}} className="col-md-3 col-sm-12">
                          <div style={{ backgroundColor: '#fddb3a',cursor: 'pointer'}} class="card" onClick={() => this.changeTheme("bat")}>
                              <div class="blurring dimmable image">
                                  <div class="ui dimmer">
                                      <div class="content">
                                          <div class="center">
                                              <div class="ui inverted button">Add Friend</div>
                                          </div>
                                      </div>
                                  </div>
                                  <img src={Bat} alt="Bat Logo" height='100px' width='100px' />
                              </div>
                              <div class="content">
                                  <a class="header">Batman</a>
                                  <div class="meta">
                                      <button style={{ backgroundColor: '#4c4c4c', color: 'white' }}  type="button" class="btn">Suit Up!</button>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div style={{ marginBottom: '10px' }} className="col-md-3 col-sm-12">
                          <div style={{ backgroundColor: '#cbbcb1',cursor: 'pointer' }} class="card" onClick={() => this.changeTheme("dino")}>
                              <div class="blurring dimmable image">
                                  <div class="ui inverted dimmer">
                                      <div class="content">
                                          <div class="center">
                                              <div class="ui primary button">Add Friend</div>
                                          </div>
                                      </div>
                                  </div>
                                  <img src={Dino} alt="Dinosaur Logo" height='100px' width='100px' />
                              </div>
                              <div class="content">
                                  <a class="header">Prehistoric</a>
                                  <div class="meta">
                                      <button style={{ backgroundColor: '#8db596' }}  type="button" class="btn">Watch your back!</button>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>
                  <hr />
                  {this.displayer()}

              </div>
          </div>
      );
  }
}

export default TeacherSettings;
