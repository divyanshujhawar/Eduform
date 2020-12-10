import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import Mini from '../teacher/TeacherAssignBlocks.js';

class Upcoming extends React.Component {

    constructor(props){
        super(props);
    
        const daysOfWeekKeys = [{day : ''}, {day : ''}, {day : ''},{day : ''}, {day : ''}, {day : ''}, {day : ''}, {day : ''},{day : ''}, {day : ''},
                {day : ''}, {day : ''}, {day : ''},{day : ''}];
    
        const dateKeys = [{day : ''}, {day : ''}, {day : ''},{day : ''}, {day : ''}, {day : ''}, {day : ''}, {day : ''},{day : ''}, {day : ''},
                {day : ''}, {day : ''}, {day : ''},{day : ''}];
    
        const daysToCompareKeys = [{day : ''}, {day : ''}, {day : ''},{day : ''}, {day : ''}, {day : ''}, {day : ''}, {day : ''},{day : ''}, {day : ''},
                {day : ''}, {day : ''}, {day : ''},{day : ''}];
    
        var listOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
    
        var currentDay = new Date().getDay();
    
        switch(currentDay){
          case(0):
              var dayInc = 0;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
    
            break;
          case(1):
              var dayInc = 1;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
            break;
          case(2):
              var dayInc = 2;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
            break;
          case(3):
              var dayInc = 3;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
            break;
          case(4):
              var dayInc = 4;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
            break;
          case(5):
              var dayInc = 5;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
            break;
          case(6):
              var dayInc = 6;
              var i;
              for(i = 0; i < 14; i++){
                if(dayInc === 7){
                  dayInc = 0;
                }
                daysOfWeekKeys[i].day = listOfDay[dayInc];
                dayInc++;
              }
    
            break;
        }
    
        var month = new Date().getMonth(); // 0-11
        var day = new Date().getDate(); // 1-31
        var year = new Date().getFullYear();
    
        if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11)
        {
          switch(day){
    
            case(31):
                var mMonth = (month+1);
                if(mMonth < 10){
                  mMonth = '0'+mMonth;
                }
                var mDay;
                dateKeys[0].day = (month+1) + "/" + day;
                mDay = day;
                if(mDay < 10)
                {
                  mDay = '0' + mDay;
                }
                daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                day = 1;
                if((month + 2) > 12){
                  month = -1;
                }
                var nMonth = (month+2);
                if(nMonth < 10){
                  nMonth = '0'+nMonth;
                }
                var nDay;
                for(i = 1; i < 14; i++){
                  nDay = day;
                  dateKeys[i].day = (month+2) + "/" + day;
                  if(nDay < 10)
                  {
                    nDay = '0' + nDay;
                  }
                  daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                  day +=1;
                }
              break;
            case(30):
                var mMonth = (month+1);
                if(mMonth < 10){
                  mMonth = '0'+mMonth;
                }
                var mDay;
                dateKeys[0].day = (month+1) + "/" + day;
                mDay = day;
                if(mDay < 10)
                {
                  mDay = '0' + mDay;
                }
                daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                day+=1;
                dateKeys[1].day = (month+1) + "/" + day;
                mDay = day;
                if(mDay < 10)
                {
                  mDay = '0' + mDay;
                }
                daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                day = 1;
                if((month + 2) > 12){
                  month = -1;
                }
                var nMonth = (month+2);
                if(nMonth < 10){
                  nMonth = '0'+nMonth;
                }
                var nDay;
                for(i = 2; i < 14; i++){
                  nDay = day;
                  dateKeys[i].day = (month+2) + "/" + day;
                  if(nDay < 10)
                  {
                    nDay = '0' + nDay;
                  }
                  daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                  day +=1;
                }
              break;
            case(29):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 3; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 3; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(28):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 4; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 4; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(27):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 5; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 5; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(26):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 6; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 6; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(25):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 7; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 7; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(24):
    
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 8; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 8; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(23):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 9; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 9; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(22):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 10; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 10; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(21):
                    var mMonth = (month+1);
                    if(mMonth < 10){
                      mMonth = '0'+mMonth;
                    }
                    var mDay;
                    var j;
                    for(j = 0; j < 11; j++)
                    {
                      mDay = day;
                      dateKeys[j].day = (month+1) + "/" + day;
                      if(mDay < 10)
                      {
                        mDay = '0' + mDay;
                      }
                      daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                      day+=1;
                    }
                    day = 1;
    
                    if((month + 2) > 12){
                      month = -1;
                    }
                    var nMonth = (month+2);
                    if(nMonth < 10){
                      nMonth = '0'+nMonth;
                    }
                    var nDay;
                    for(i = 11; i < 14; i++){
                      nDay = day;
                      dateKeys[i].day = (month+2) + "/" + day;
                      if(nDay < 10)
                      {
                        nDay = '0' + nDay;
                      }
                      daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                      day +=1;
                    }
              break;
            case(20):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 12; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 12; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(19):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 13; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 13; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            default:
              var nMonth = (month+1);
              if(nMonth < 10){
                nMonth = '0'+nMonth;
              }
              var nDay;
              for(i = 0; i < 14; i++){
                nDay = day;
                dateKeys[i].day = (month+1) + "/" + day;
                if(nDay < 10)
                {
                  nDay = '0' + nDay;
                }
                daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                day+=1;
              }
              break;
            }
        }
        else{
          switch(day){
    
            case(30):
                var mMonth = (month+1);
                if(mMonth < 10){
                  mMonth = '0'+mMonth;
                }
                var mDay;
                mDay = day;
                dateKeys[0].day = (month+1) + "/" + day;
                if(mDay < 10)
                {
                  mDay = '0' + mDay;
                }
                daysToCompareKeys[0].day =  mMonth + "/" + mDay + "/" + year;
    
                day = 1;
                if((month + 2) > 12){
                  month = -1;
                }
                var nMonth = (month+2);
                if(nMonth < 10){
                  nMonth = '0'+nMonth;
                }
                var nDay;
                for(i = 1; i < 14; i++){
                  nDay = day;
                  dateKeys[i].day = (month+2) + "/" + day;
                  if(nDay < 10)
                  {
                    nDay = '0' + nDay;
                  }
                  daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                  day +=1;
                }
              break;
            case(29):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 2; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 2; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(28):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 3; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                   daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 3; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(27):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 4; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 4; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(26):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 5; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 5; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(25):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 6; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 6; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(24):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 7; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 7; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(23):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 8; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 8; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(22):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 9; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 9; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(21):
                    var mMonth = (month+1);
                    if(mMonth < 10){
                      mMonth = '0'+mMonth;
                    }
                    var mDay;
                    var j;
                    for(j = 0; j < 10; j++)
                    {
                      mDay = day;
                      dateKeys[j].day = (month+1) + "/" + day;
                      if(mDay < 10)
                      {
                        mDay = '0' + mDay;
                      }
                      daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                      day+=1;
                    }
                    day = 1;
    
                    if((month + 2) > 12){
                      month = -1;
                    }
                    var nMonth = (month+2);
                    if(nMonth < 10){
                      nMonth = '0'+nMonth;
                    }
                    var nDay;
                    for(i = 10; i < 14; i++){
                      nDay = day;
                      dateKeys[i].day = (month+2) + "/" + day;
                      if(nDay < 10)
                      {
                        nDay = '0' + nDay;
                      }
                     daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                      day +=1;
                    }
              break;
            case(20):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 11; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
    
                  for(i = 11; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
            case(19):
                  var mMonth = (month+1);
                  if(mMonth < 10){
                    mMonth = '0'+mMonth;
                  }
                  var mDay;
                  var j;
                  for(j = 0; j < 12; j++)
                  {
                    mDay = day;
                    dateKeys[j].day = (month+1) + "/" + day;
                    if(mDay < 10)
                    {
                      mDay = '0' + mDay;
                    }
                    daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                    day+=1;
                  }
                  day = 1;
    
                  if((month + 2) > 12){
                    month = -1;
                  }
                  var nMonth = (month+2);
                  if(nMonth < 10){
                    nMonth = '0'+nMonth;
                  }
                  var nDay;
                  for(i = 12; i < 14; i++){
                    nDay = day;
                    dateKeys[i].day = (month+2) + "/" + day;
                    if(nDay < 10)
                    {
                      nDay = '0' + nDay;
                    }
                    daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                    day +=1;
                  }
              break;
              case(18):
                    var mMonth = (month+1);
                    if(mMonth < 10){
                      mMonth = '0'+mMonth;
                    }
                    var mDay;
                    var j;
                    for(j = 0; j < 13; j++)
                    {
                      mDay = day;
                      dateKeys[j].day = (month+1) + "/" + day;
                      if(mDay < 10)
                      {
                        mDay = '0' + mDay;
                      }
                      daysToCompareKeys[j].day =  mMonth + "/" + mDay + "/" + year;
                      day+=1;
                    }
                    day = 1;
    
                    if((month + 2) > 12){
                      month = -1;
                    }
                    var nMonth = (month+2);
                    if(nMonth < 10){
                      nMonth = '0'+nMonth;
                    }
                    var nDay;
    
                    for(i = 13; i < 14; i++){
                      nDay = day;
                      dateKeys[i].day = (month+2) + "/" + day;
                      if(nDay < 10)
                      {
                        nDay = '0' + nDay;
                      }
                      daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                      day +=1;
                    }
                break;
            default:
              var nMonth = (month + 1);
              if(nMonth < 10){
                nMonth = '0'+nMonth;
              }
              var nDay;
              for(i = 0; i < 14; i++){
                nDay = day;
                dateKeys[i].day = (month+1) + "/" + day;
                if(nDay < 10)
                {
                  nDay = '0' + nDay;
                }
                daysToCompareKeys[i].day = nMonth + "/" + nDay + "/" + year;
                day+=1;
              }
              break;
            }

        var cssType = 'edu';
        if(this.props.styler){
          cssType = this.props.styler;
        }
        else{
          cssType = 'edu';
        }

        const batVals = ['batbackground', 'batwords2', 'batotherwords'];
        const eduVals = ['backgroundGenericCourse', 'teachWords', 'eduotherwords'];
        const iuVals = ['iubackground', 'iuwords2', 'iuotherwords'];
        const dinoVals = ['dinobackground', 'dinowords', 'dinootherwords'];

        var whichCssbackground;
        var whichCsswords;
        var whichCssothers;

        if(cssType === 'dino')
        {
          whichCssbackground = dinoVals[0];
          whichCsswords = dinoVals[1];
          whichCssothers = dinoVals[2];
        }
        else if(cssType === 'bat')
        {
          whichCssbackground = batVals[0];
          whichCsswords = batVals[1];
          whichCssothers = batVals[2];
        }
        else if(cssType === 'iu'){
          whichCssbackground = iuVals[0];
          whichCsswords = iuVals[1];
          whichCssothers = iuVals[2];
        }
        else{
          whichCssbackground = eduVals[0];
          whichCsswords = eduVals[1];
          whichCssothers = eduVals[2];
        }
    }


        this.state = {

            daysOfWeek: daysOfWeekKeys,
            dateToCompare: daysToCompareKeys,
            date: dateKeys,

   
            pageTheme : cssType,
            theBackground : whichCssbackground,
            theWords : whichCsswords,
            others : whichCsswords
        }


    }



    render() {

        const days = [];
        var i = 0;
        for (i; i < this.state.daysOfWeek.length; i++) {
            days.push(
                <div style={{ marginTop: '15px' }} className="myDays">
                    <h3 style={{fontSize: '1.8rem',color: '#febf63' }}> {this.state.daysOfWeek[i].day} - {this.state.date[i].day} </h3>
                    <Mini datePass={this.state.dateToCompare[i].day} />
                </div>
            );
        }

        return (
            <div>
                {days}
            </div>
        );
    }
}

export default Upcoming;
