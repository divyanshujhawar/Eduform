import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import CoursesBlocks from '../student/CourseBlocks.js';
import NavBar from '../student/NewNavbar';
import Bar from './StudentNavigation.js';
import update from 'react-addons-update';

class StudentChat extends React.Component {
  constructor(props) {
    super(props);

    var cssType;
    if (this.props.location.colors1) {
        cssType = this.props.location.colors1;
    }
    else {
        cssType = 'edu';
    }

    var presetForNav = false;
    var defVal = 30;
    if (this.props.toggleState) {
        presetForNav = this.props.toggleState;
        if (presetForNav === true) {
            defVal = 175;
        }
        else {
            defVal = 30;
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
        colorOfHeadWord: headerwordcolor,
        studentCourses: [{"courseName" : "Software Engineering", "courseCode" : "P456"},{"courseName" : "Databases", "courseCode" : "B465"}
        ,{"courseName" : "Computer Systems", "courseCode" : "C335"},{"courseName" : "Discrete Structures", "courseCode" : "C241"}],
        chatElements : []
    }

    this.bar = this.bar.bind(this);
    this.displayer = this.displayer.bind(this);
    this.chatRooms = this.chatRooms.bind(this);
    this.activator = this.activator.bind(this);

    var j;
      for(j = 0; j < this.state.studentCourses.length; j++){
          this.setState({chatElements : this.state.chatElements.push("item")})
      }


}
displayer() {

    if (this.state.displayNav === true) {

        return (<Bar thetog={this.state.displayNav} colorspass={this.state.pageTheme} />);
    }
    else {
        return <p></p>;
    }
}

bar() {
    this.setState({ displayNav: !this.state.displayNav });
    if (this.state.itemPad === 30) {
        this.setState({ itemPad: 175 });
    }
    else {
        this.setState({ itemPad: 30 });
    }

}

activator() {
   
    var i;
      for(i = 0; i < this.state.studentCourses.length; i++)
      {
        
          this.setState(update(this.state, {chatElements: {[i]: {$set: "active item"}}}));
        
      }

}


chatRooms (){

      const chatItems = [];
      var i;
      for(i = 0; i < this.state.studentCourses.length; i++)
      {
        chatItems.push(<a onClick={this.activator} style={{borderBottom: 'solid', borderColor: 'white'}} className={`${this.state.chatElements[i]}`}>
            <h3 style={{color: 'black'}} className="adminWordHead"> <b>{this.state.studentCourses[i].courseCode}</b> {this.state.studentCourses[i].courseName} </h3>
        </a>);
      }
       return( <div style={{backgroundColor: '#febf63'}} className="ui vertical pointing menu">
                 {chatItems}
        </div>);
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
                        <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.8rem' }}> Chat</h1>
                        <hr style={{ marginBottom: '30px' }} />
                        <div className="row">
                          <div className="col-3"> 
                            {this.chatRooms()}
                          </div>
                          <div className="col-9"> 
                            <textarea style={{borderStyle: 'solid', borderWidth: '2px', borderColor: '#febf63',width: '100%', height: '400px'}}> </textarea>
                            <div className="row">
                              <div className="col-10">
                                <input style={{width: '100%'}} placeHolder="Enter Message to Chat"></input>
                              </div>
                              <div className="col-2">
                                <button className="btn btn-success btn-block" style={{width: '100%'}} >Send</button>
                              </div>
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

export default StudentChat;
