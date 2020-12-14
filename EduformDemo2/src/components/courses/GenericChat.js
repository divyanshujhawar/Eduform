import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import CoursesBlocks from '../student/CourseBlocks.js';
import NavBar from '../student/NewNavbar';
import Bar from '../student/StudentNavigation.js';
import update from 'react-addons-update';
import StompClient from "react-stomp-client";
import SockJsClient from 'react-stomp';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import CourseProfile from '../.././utils/CourseProfile';
import UserProfile from '../.././utils/UserProfile';



// Need API call to user ID

class GenericChat extends React.Component {
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

    
       // const { myCurrentClassGrade } = this.props.match.params.courseCode;

       
        let passedCourse = this.props.location.course;
        
        let currentUser = UserProfile.getName();

        var status;
        if(this.props.location.chatStat)
        {
            status = true;
        }
        else{
            status = false;
        }

        this.state = {
            pageTheme: cssType,
            displayNav: presetForNav,

            coursesEnrolled: CourseProfile.getCourseProfile(),

            itemPad: defVal,
            theBackground: whichCssbackground,
            theWords: whichCsswords,
            others: whichCssothers,
            headerWord: wordDisplay,
            selectheaderback: headerback,
            colorOfHeadWord: headerwordcolor,
            //studentCourses: [{ "courseName": "Software Engineering", "courseCode": "P456" }, { "courseName": "Databases", "courseCode": "B465" }
            //    , { "courseName": "Computer Systems", "courseCode": "C335" }, { "courseName": "Discrete Structures", "courseCode": "C241" }],
            chatElements: [],
            selectedClass :passedCourse,
            theUser : currentUser,
            stompClient : null,
            usersInChat : [],
            userColor: 1,
            chatPresence : status
            
        }
        

        this.bar = this.bar.bind(this);
        this.displayer = this.displayer.bind(this);
        this.chatRooms = this.chatRooms.bind(this);
        this.activator = this.activator.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        this.onConnected = this.onConnected.bind(this);
        this.onError = this.onError.bind(this);

        this.enterRoom = this.enterRoom.bind(this);
        this.onLeave = this.onLeave.bind(this);
       
        this.onMessageReceived = this.onMessageReceived.bind(this);
  
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
        for (i = 0; i < this.state.coursesEnrolled.length; i++) {

            this.setState(update(this.state, { chatElements: { [i]: { $set: "active item" } } }));

        }

    }


    chatRooms() {

        
        const chatItems = [];
        var i;
        for (i = 0; i < this.state.coursesEnrolled.length; i++) {
            chatItems.push(<a onClick={this.activator} style={{ borderBottom: 'solid', borderColor: 'white' }} className={`${this.state.chatElements[i]}`}>
                <h3 style={{ color: 'black' }} className="adminWordHead"> <b>{this.state.coursesEnrolled[i].courseCode}</b> {this.state.coursesEnrolled[i].courseName} </h3>
            </a>);
        }
        return (<div style={{ backgroundColor: '#febf63' }} className="ui vertical pointing menu">
            {chatItems}
        </div>);
    }

    componentDidMount(event) {
      
                var theForm = document.getElementById("inChatForm");
                theForm.addEventListener('submit', this.connect, true);
                var messageForm = document.getElementById('eventLis');
                messageForm.addEventListener('submit', this.sendMessage, true);
                this.connect();
        
     
        
       // messageForm.addEventListener('submit', this.sendMessage, true);
    }


    connect = (event) => {

  
        var chatPage = document.querySelector('#chat-page');
    

        var socket = new SockJS('/sock');
        this.state.stompClient = Stomp.over(socket);
        this.state.stompClient.connect({}, this.onConnected, this.onError);
        //event.preventDefault();
  
        //var socket = new SockJS('http://localhost:8080/course/' + `${this.state.selectedClass}` + '/chat');
  
    }

    onConnected() {
        
        var waiting = document.getElementById('waiting');
        var theRoom = this.state.selectedClass;
        this.enterRoom(theRoom);
        waiting.classList.add('d-none');
 
        var firstNum = Math.floor(Math.random() * 12);

        this.setState({userColor:firstNum});

    }

    onError(error) {
        alert("Cannot connect at this time, please try again later.");
    }


    enterRoom(newRoomId) {
        var topic = null;
        topic = `/chat-app/chat/${newRoomId}`;
      
        if(!(this.props.location.chatStat))
        {
            var currentSubscription;
            currentSubscription = this.state.stompClient.subscribe(`/chat-room/${newRoomId}`, this.onMessageReceived);
        }
        if(!(this.state.usersInChat.includes(this.state.theUser)))
            {
                this.setState({usersInChat : this.state.usersInChat.concat(this.state.theUser)});
            }
        var username = this.state.theUser;
        this.state.stompClient.send(`${topic}/addUser`,
          {},
          JSON.stringify({sender: username, type: 'JOIN'})
        );
      }

      onLeave()
      {
      
        var username = this.state.theUser;
        this.state.stompClient.send(`${this.state.selectedClass}/addUser`,
          {},
          JSON.stringify({sender: username, type: 'LEAVE'})
        );
      }
    

    sendMessage(event) {

        var messageContent = document.getElementById("message").value;
        var username = this.state.theUser;
        var newRoomId = this.state.selectedClass;
        var topic;
        topic = `/chat-app/chat/${newRoomId}`;
        if(messageContent && this.state.stompClient) {
            var chatMessage = {
                sender: username,
                content: messageContent,
                type: 'CHAT'
            };

            this.state.stompClient.send(`${topic}/sendMessage`, {}, JSON.stringify(chatMessage));
            document.querySelector('#message').value = '';
            if(!(this.state.usersInChat.includes(this.state.theUser)))
            {
                this.setState({usersInChat : this.state.usersInChat.concat(this.state.theUser)});
            }
        }
        event.preventDefault();
         
    }


    onMessageReceived(payload) {
        
        var message = JSON.parse(payload.body);
        var messageElement = document.createElement('div');
        messageElement.className = "list-item";
    
        var divCard = document.createElement('div');
        divCard.className = 'card';

        if(message.type === 'JOIN') {
            messageElement.classList.add('event-message');
            message.content = message.sender + ' joined!';
            if(!(this.state.usersInChat.includes(message.sender)))
            {
                this.setState({usersInChat : this.state.usersInChat.concat(message.sender)});
            }
        } else if (message.type === 'LEAVE') {
            if(!(this.state.usersInChat.includes(message.sender)))
            {
                this.setState({usersInChat : this.state.usersInChat.concat(message.sender)});
            }
      
            messageElement.classList.add('event-message');
            message.content = message.sender + ' left!';
            alert("Left");
         
            
        } else {

            if(!(this.state.usersInChat.includes(message.sender)))
            {
                this.setState({usersInChat : this.state.usersInChat.concat(message.sender)});
            }
            messageElement.classList.add('chat-message');

            var avatarText = document.createTextNode(message.sender[0].substring(1,message.sender.length));
        
        

            messageElement.appendChild(avatarText);

            var colors;
            colors  = ['#93b5e1', '#98acf8','#da9ff9', '#54e346', '#aee6e6', '#fdcfdf', '#dd9866', '#1f6f8b',
        '#51adcf', '#f56a79', '#ee6f57', '#b0cac7', '#93b5e1'];

            if(message.sender == this.state.theUser){
                
                var usernameElement = document.createElement('p');
                usernameElement.className = "badge badge-pill badge";
                usernameElement.style.display = 'inline-block';
                usernameElement.style.fontSize = '1rem';
                let theNum = this.state.userColor;
                usernameElement.style.backgroundColor = colors[theNum];
            
                usernameElement.style.marginLeft = '4px';
            }
            else{
                var usernameElement = document.createElement('p');
                usernameElement.className = "badge badge-pill badge";
                usernameElement.style.display = 'inline-block';
                usernameElement.style.fontSize = '1rem';
                let theNum = this.state.userColor;
                usernameElement.style.backgroundColor = '#fdb827';
            
                usernameElement.style.marginLeft = '4px';
            }
            
      
            var usernameText = document.createTextNode(message.sender);
            usernameElement.appendChild(usernameText);
            messageElement.appendChild(usernameElement);



            var divCardBody = document.createElement('div');
            divCardBody.className = 'card-body';

            divCardBody.appendChild(messageElement);
            divCard.appendChild(divCardBody);
        }

        var textElement = document.createElement('p');
       textElement.style.display = 'inline-block';
       textElement.style.marginLeft = '5px';
        var messageText = document.createTextNode(message.content);
    
        while(messageText === null){}
        textElement.appendChild(messageText);
        while(textElement === null){}
        messageElement.appendChild(textElement);
        while(messageElement === null){}
        var messageArea = document.querySelector('#chatForm');
    
        messageArea.appendChild(messageElement);


        messageArea.scrollBottom = messageArea.scrollHeight;
    }

    render() {

        var status = [];
        var i = 0;
        for(i; i < this.state.usersInChat.length;i++)
        {
            status.push(
                <div class="item">
                             
                        <div class="content">
                          <a class="header"><p style={{color: 'white'}}> <i style={{paddingRight: '5px', color: '#febf63'}} class="fas fa-dot-circle"></i> {this.state.usersInChat[i]} </p></a>
                         </div>
                        </div>
            );
        }
      

        return (
            <div className={`${this.state.theBackground}`}>
                <div style={{ paddingLeft: `${this.state.itemPad}px`, paddingRight: '5%' }} className="flex-container">
                    <div style={{ margin: 'auto', width: '267px', height: '50px', backgroundColor: `${this.state.selectheaderback}` }} className="row dashItems">

                        <h1 className={`${this.state.others}`} style={{ color: `${this.state.colorOfHeadWord}`, margin: 'auto', fontSize: '2.6rem' }}><Link onClick={this.bar}> <i style={{ color: `${this.state.colorOfHeadWord}`, marginRight: '0px' }} className={this.state.displayNav ? "toggle on icon" : "toggle off icon"}></i> </Link>
                            {this.state.headerWord}</h1>

                    </div>
                    <div style={{ marginTop: '30px' }} className="row">
                    <form style={{display: 'none'}} id="inChatForm">
                            <button type="submit" id="theButton"></button>
                        </form>

                        <div style={{ textAlign: 'left' }} className="col-md-12 col-sm-12">
                            <img style={{ width: '70px', height: '70px', marginTop: '1.5%' }} src={Logo} alt="edLogo" />
                            <h1 className={`${this.state.theWords}`} style={{ fontSize: '2.8rem' }}><Link onClick={this.onLeave} to={{
                                        pathname: '/course/' + this.props.match.params.courseCode, state: {
                                            currentClass: this.state.myCourse
                                        }, chatStat : true
                                        
                                    }} > <i style={{ color: "#febf63", marginRight: '20px' }} class="fas fa-chevron-circle-left"></i> </Link> Chat</h1>
                            <hr style={{ marginBottom: '30px' }} />
                            <div className="row">
                                <div className="col-3">
                                  <h1 style={{color: '#febf63'}}>Recently Active</h1>
                                  <div class="ui middle aligned divided list">
                                   
                                        {status}
                                    </div>
                                </div>
                                <div id="chat-page" className="hidden col-9">

                               
                                <div style={{backgroundColor: '#febf63', color: 'white'}} class="ui one item menu">
                                    <a class="active item">
                                        
                                        <h3>{this.state.selectedClass} - {this.state.theUser}</h3>
                                    </a>
                                </div>
                                <div style={{color:'white'}} id="waiting">
                                        Connecting...
                                    </div>
                                    <div style={{ backgroundColor: 'white',borderStyle: 'solid', borderWidth: '2px', borderColor: '#febf63', width: '100%', height: '400px', overflow: 'auto' }}> 
                                        <div id="chatForm"></div>
                                    </div>
                             
                                    <form id="eventLis">
                                        <div style={{marginTop: '6px'}} class="ui fluid action input">
                                            <input id='message' type="text" placeholder="Type to Chat"/>
                                            <div onClick={this.sendMessage} style={{backgroundColor: '#febf63', color: 'white'}} class="ui button">Send</div>
                                        </div>
                                    </form>
                                      
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

export default GenericChat;
