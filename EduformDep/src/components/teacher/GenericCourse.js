import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import Logo from '../.././assets/edLogo.png';
import NavBar from './TeacherNavigation';
import TeacherWheel from '../teacher/TeacherWheel.js';
import Announcements from '../teacher/TeacherBasedAnnouncements.js';
import Assignments from './FilteredAssignments.js';

class GenericCourse extends React.Component{

  constructor(props){
    super(props);

    const {currentClass} = this.props.location.state;
    this.state = {

        getVal : currentClass,
      teacher_course: [
        {
          teacher_id: 2,
          course_id: 2,
          course_code: 'CS1112',
          course_name: 'Machine Learning',
          course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'

        },
        {
          teacher_id: 2,
          course_id: 4,
          course_code: 'CS1113',
          course_name: 'Big Data',
          course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'

        },
        {
          teacher_id: 2,
          course_id: 23,
          course_code: 'CS1009',
          course_name: 'Computer Engineering',
          course_description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula sem, accumsan ac dui vel, blandit venenatis tellus. Curabitur vel hendrerit massa, at consectetur lacus. Duis consequat eros eget rhoncus laoreet. Phasellus maximus luctus euismod. Vivamus in ullamcorper tellus. Proin faucibus efficitur egestas. Etiam eleifend eros in nibh feugiat, ut placerat tellus rutrum. Praesent maximus tortor vel odio ullamcorper faucibus. Phasellus ac nisi consequat, interdum purus vitae, ornare neque. Nullam mattis nibh egestas, tempus odio a, suscipit turpis. Etiam auctor enim libero, dignissim vehicula lacus elementum sit amet. Maecenas est mauris, fermentum ac velit id, consectetur efficitur elit.'

        },
      ],

    }
  }

  render(){

    const courseInfo = [];

    let i = 0;
    for(i; i < this.state.teacher_course.length; i++)
    {
        if(this.state.teacher_course[i].course_id === this.state.getVal){
          courseInfo.push(
            <div style={{textAlign: 'left'}} className="col-md-10 col-sm-12">
              <img style={{width: '70px', height: '70px', marginTop: '1.5%'}} src={Logo} alt="edLogo"/>
              <h1 className="teachWords" style={{fontSize: '2.4rem'}}> {this.state.teacher_course[i].course_code} - {this.state.teacher_course[i].course_name}</h1>
              <p style={{color: 'white'}}> {this.state.teacher_course[i].course_description}</p>
              <div className="btn-group dropright">
                  <button style={{width: '252px', height: '50px',backgroundColor: '#febf63'}} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <b style={{fontSize:'1.15rem'}}>Make an Announcement</b>
                  </button>
                  <div className="dropdown-menu">
                    <form style={{width: '500px', height: '300px'}} class="px-4 py-3">
                        <div class="form-group">
                          <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                          <input list="theItems" type="text" class="form-control" id="exampleDropdownFormEmail1" placeholder=""/>
                          <datalist id="theItems">
                          <option value={this.state.teacher_course[i].course_code}/>
                          </datalist>
                        </div>
                        <div class="form-group">
                          <label for="exampleDropdownFormPassword1"><b>Announcement</b></label>
                          <textarea style={{height: '125px'}} class="form-control" aria-label="With textarea"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                  </div>
                 </div>
                 <div style={{marginLeft: '30px'}} className="btn-group dropright">
                     <button style={{width: '252px', height: '50px',backgroundColor: '#febf63'}} type="button" className="btn dropdown-toggle announce" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                       <b style={{fontSize:'1.15rem'}}>Create an Assignment</b>
                     </button>
                     <div className="dropdown-menu">
                       <form style={{width: '650px', height: '450px'}} class="px-4 py-3">
                           <div class="form-group">
                             <label for="exampleDropdownFormEmail1"><b>Course Code </b></label>
                             <input list="theItems" type="text" class="form-control" id="exampleDropdownFormEmail1" placeholder=""/>
                              <option value={this.state.teacher_course[i].course_code}/>
                           </div>
                           <div class="form-group">
                             <label for="exampleDropdownFormEmail1"><b>Assignment Name </b></label>
                             <input type="text" class="form-control" id="exampleDropdownFormEmail12" placeholder=""/>
                           </div>
                           <div class="form-group">
                             <label for="exampleDropdownFormEmail1"><b>Max Points </b></label>
                             <input type="text" class="form-control" id="exampleDropdownFormEmail123" placeholder=""/>
                           </div>
                           <div class="form-group">
                             <label for="exampleDropdownFormEmail1"><b>Due Date </b></label>
                             <input type="text" class="form-control" id="exampleDropdownFormEmail1235" placeholder=""/>
                           </div>
                           <div class="form-group">
                             <label for="exampleDropdownFormPassword1"><b>File</b></label>
                             <input type="file" class="form-control" id="exampleDropdownFormEmail1235" placeholder=""/>
                           </div>

                           <button type="submit" class="btn btn-primary">Send</button>
                       </form>
                     </div>
                    </div>
              <hr style={{marginBottom: '30px'}}/>
            </div>
          );
        }

   }


    return(
      <div className="backGroundTeach">
           <div style={{padding: '0 10px 0px 125px'}} className="container">
             <div style={{marginTop:'10px'}} className="row">
                 <div className="col-md-1 col-sm-2"></div>
                 <div className="col-md-11 col-sm-10">
                      {courseInfo}
                 </div>

             </div>
             <div style={{marginTop:'10px'}} className="row">
                 <div className="col-md-1 col-sm-2"></div>
                 <div style={{marginBottom: '30px',paddingLeft: '28px'}} className="col-md-6 col-sm-10">

                    <TeacherWheel currentClass={this.state.getVal}/>
                 </div>
                 <div className="col-md-3 col-sm-10">
                   <h1 className="teachWords" style={{fontSize: '1.8rem'}}> Announcements</h1>
                   <hr/>
                    <Announcements currentClass={this.state.getVal}/>
                  <h1 className="teachWords" style={{fontSize: '1.8rem'}}> Assignments</h1>
                  <hr/>
                    <Assignments theClass={this.state.getVal}/>
                 </div>
                 <div className="col-md-2 col-sm-0">

                 </div>
             </div>
             <NavBar />
          </div>

        </div>
    );
  }
}

export default GenericCourse;
