import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';

const Calendar = () => {
  return(
    <div className="col-md-11 col-sm-10">
    <h2 style={{margin: 'auto'}}> October 2020 </h2>
    <table style={{color: '#1089ff'}} class="ui celled table">
      <thead style={{fontSize:'1.3rem',height: '120px', width: '120px'}}>
        <tr>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Monday   </th>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Tuesday  </th>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Wednesday</th>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Thursday </th>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Friday   </th>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Saturday </th>
        <th style={{backgroundColor: '#1089ff', color:'#febf63'}}>Sunday   </th>
      </tr></thead>
        <tbody>
          <tr style={{height: '120px', width: '120px'}}>

            <td data-label="date"><b> 10/1 </b> <br/> <br/>
            <a class="item">
              <div class="ui red horizontal label">P465</div>
              Assignment 5
              <p style={{fontSize: '.8rem'}}> 11:59pm </p>
            </a>
            <br/>
            <a class="item">
              <div class="ui blue horizontal label">B461</div>
              Assignment 6
              <p style={{fontSize: '.8rem'}}> 11:59pm </p>
            </a>
            </td>

            <td data-label="date"><b> 10/2 </b> <br/> <br/>
            <a class="item">
              <div class="ui yellow horizontal label">C335</div>
              Lab 6
              <p style={{fontSize: '.8rem'}}> 11:59pm </p>
            </a>
            </td>
            <td data-label="date"><b> 10/3 </b></td>
            <td data-label="date"><b> 10/4 </b></td>
            <td data-label="date"><b> 10/5 </b> <br/> <br/>
            <a class="item">
              <div class="ui yellow horizontal label">C335</div>
              Lab 7
              <p style={{fontSize: '.8rem'}}> 7:59pm </p>
            </a>
            </td>
            <td data-label="date"><b> 10/6 </b></td>
            <td data-label="date"><b> 10/7 </b></td>
          </tr>
          <tr style={{height: '120px', width: '120px'}}>
            <td data-label="date"><b> 10/8 </b></td>
            <td data-label="date"><b> 10/9 </b></td>
            <td data-label="date"><b> 10/10 </b></td>
            <td data-label="date"><b> 10/11</b>
            <br/> <br/>
            <a class="item">
              <div class="ui red horizontal label">P465</div>
              Assignment 6
              <p style={{fontSize: '.8rem'}}> 11:59pm </p>
            </a>
            <br/>
            <a class="item">
              <div class="ui blue horizontal label">B461</div>
              Assignment 7
              <p style={{fontSize: '.8rem'}}> 11:59pm </p>
            </a>
            </td>
            <td data-label="date"><b> 10/12</b></td>
            <td data-label="date"><b> 10/13 </b></td>
            <td data-label="date"><b> 10/14 </b></td>
          </tr>
          <tr style={{height: '120px', width: '120px'}}>
            <td data-label="date"><b> 10/15 </b></td>
            <td data-label="date"><b> 10/16 </b></td>
            <td data-label="date"><b> 10/17 </b></td>
            <td data-label="date"><b> 10/18 </b></td>
            <td data-label="date"><b> 10/19 </b></td>
            <td data-label="date"><b> 10/20 </b></td>
            <td data-label="date"><b> 10/21 </b></td>
          </tr>
          <tr style={{height: '120px', width: '120px'}}>
            <td data-label="date"><b> 10/22 </b></td>
            <td data-label="date"><b> 10/23 </b></td>
            <td data-label="date"><b> 10/24</b></td>
            <td data-label="date"><b> 10/25 </b></td>
            <td data-label="date"><b> 10/26 </b></td>
            <td data-label="date"><b> 10/27 </b></td>
            <td data-label="date"><b> 10/28 </b></td>
          </tr>
          <tr style={{height: '120px', width: '120px'}}>
            <td data-label="date"><b> 10/29 </b></td>
            <td data-label="date"><b> 10/30 </b></td>
            <td data-label="date"><b> 10/31 </b></td>
            <td data-label="date"><b>  </b></td>
            <td data-label="date"><b>  </b></td>
            <td data-label="date"><b> </b></td>
            <td data-label="date"><b>  </b></td>
          </tr>
        </tbody>
    </table>

  </div>

  );
};

export default Calendar;
