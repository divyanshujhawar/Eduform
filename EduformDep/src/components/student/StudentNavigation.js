import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';

class StudentNavigation extends React.Component {


    constructor(props) {
        super(props);

        var ccssType;
        if (this.props.colorspass) {
            ccssType = this.props.colorspass;
        }
        else {
            ccssType = 'edu';
        }
        const batVals = ['#fddb3a', '#4c4c4c', 'white', 'batwords'];
        const eduVals = ['#febf63', '#1089ff', 'white', 'teachWords'];
        const iuVals = ['white', '#a20a0a', '#a20a0a', 'iuwords'];
        const dinoVals = ['#cbbcb1', '#8db596', 'white', 'dinowords'];

        var prim;
        var sec;
        var tri;
        var wordType;

        if (ccssType === 'dino') {
            prim = dinoVals[0];
            sec = dinoVals[1];
            tri = dinoVals[2];
            wordType = dinoVals[3];
        }
        else if (ccssType === "bat") {
            prim = batVals[0];
            sec = batVals[1];
            tri = batVals[2];
            wordType = batVals[3];
        }
        else if (ccssType === 'iu') {
            prim = iuVals[0];
            sec = iuVals[1];
            tri = iuVals[2];
            wordType = iuVals[3];
        }
        else {
            prim = eduVals[0];
            sec = eduVals[1];
            tri = eduVals[2];
            wordType = eduVals[3];
        }
        this.state = {
            toggler: this.props.thetog,
            pageTheme: ccssType,
            primary: prim,
            secondary: sec,
            tridary: tri,
            typeOfWords: wordType

        }
    }
    render() {
        return (
            <div style={{ marginTop: '6%' }} className="row">
                <div className="col-1">
                    <div style={{ width: '131px', backgroundColor: `${this.state.primary}` }} className="ui visible sidebar inverted vertical menu">
                        <h1 className="welcome" style={{ paddingTop: '3%', fontSize: '2.1rem', color: 'black' }}> Eduform </h1>
                        <hr style={{ backgroundColor: '#febf63', marginBottom: '7%' }} />
                        <div style={{ backgroundColor: `${this.state.tridary}`, paddingLeft: '15%', paddingRight: '15%' }}>
                            <img style={{ width: '65px', height: '65px', margin: 'auto', marginBottom: '3%', marginTop: '3%' }} className="rounded-circle" src={Personal} />
                        </div>

                        <Link to={{ pathname: '/student-home', toggleState: this.state.toggler, colors2: this.state.pageTheme }}>
                            <a style={{ marginTop: '10px', paddingBottom: '10px' }} className="item">
                                <i style={{ fontSize: '1.5rem', color: `${this.state.secondary}` }} className="fas fa-home"></i>
                                <h3 className={`${this.state.typeOfWords}`} style={{ marginTop: '2px', marginBottom: '0px', color: 'black' }}> Home </h3>
                            </a>
                        </Link>
                        <Link to={{ pathname: '/student-courses', toggleState: this.state.toggler, colors1: this.state.pageTheme }}>
                            <a style={{ paddingBottom: '10px' }} className="item">
                                <i style={{ fontSize: '1.5rem', color: `${this.state.secondary}` }} className="fas fa-book"></i>
                                <h3 className={`${this.state.typeOfWords}`} style={{ marginTop: '2px', marginBottom: '0px', color: 'black' }}> Courses </h3>
                            </a>
                        </Link>
                        <Link to={{ pathname: '/student-chat', toggleState: this.state.toggler, colors3: this.state.pageTheme }}>
                            <a style={{ paddingBottom: '10px' }} className="item">
                                <i style={{ fontSize: '1.5rem', color: `${this.state.secondary}` }} className="far fa-comment"></i>
                                <h3 className={`${this.state.typeOfWords}`} style={{ marginTop: '2px', color: 'black', marginBottom: '0px' }}> Chat </h3>
                            </a>
                        </Link>
                        <Link to={{ pathname: '/student-calendar', toggleState: this.state.toggler, colors4: this.state.pageTheme }}>
                            <a style={{ paddingBottom: '10px' }} className="item">
                                <i style={{ marginBottom: '0', fontSize: '1.5rem', color: `${this.state.secondary}` }} className="far fa-calendar-alt"></i>
                                <h3 className={`${this.state.typeOfWords}`} style={{ marginTop: '2px', color: 'black', marginBottom: '0px' }}> Calendar </h3>
                            </a>
                        </Link>
                        <Link to={{ pathname: '/student-settings', toggleState: this.state.toggler, colors5: this.state.pageTheme }}>
                            <a style={{ paddingBottom: '10px' }} style={{ fontSize: '1.5rem', color: `${this.state.secondary}` }} className="item">
                                <i class="fas fa-cogs"></i>
                                <h3 className={`${this.state.typeOfWords}`} style={{ marginTop: '2px', color: 'black', marginBottom: '0px' }}> Settings </h3>
                            </a>
                        </Link>
                        <Link to='/sign-in'>
                            <a style={{ position: 'absolute', bottom: '0' }} className="item">
                                <h3 className={`${this.state.typeOfWords}`} style={{ marginTop: '2px', color: 'black' }}> Log Out </h3>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentNavigation;
