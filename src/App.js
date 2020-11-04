import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/login/login.js";
import SignUp from "./components/login/register.js";
import Reset from "./components/login/PasswordReset.js";
import ChangePassword from "./components/login/ChangePassword.js";
import Confirmation from "./components/login/confirmation.js";

import StudentHome from "./components/dashboard/StudentHome.js";
import TeacherHome from "./components/dashboard/TeacherHome.js";
import AdminHome from "./components/dashboard/AdminHome.js";

import StudentCalendar from "./components/student/StudentCalendar.js";
import StudentChat from "./components/student/StudentChat.js";
import StudentCourses from "./components/student/Courses.js";
import StudentSettings from "./components/student/StudentSettings.js";

import AdminAddNewCourse from "./components/admin/AddNewCourse.js";
import AdminVerifyUser from "./components/admin/VerifyUser.js";
import AdminSettings from "./components/admin/AdminSettings.js";
import AdminUserDetails from "./components/admin/UserDetails.js";
import AdminCourseDetails from "./components/admin/CourseDetails.js";

import GenericAssignments from "./components/courses/GenericAssignments.js";
import GenericChat from "./components/courses/GenericChat.js";
import GenericGrades from "./components/courses/GenericGrades.js";
import GenericSettings from "./components/courses/GenericSettings.js";
import GenericCourse from "./components/student/GenericCourse.js";


function App() {
  return (
   <div className="App">
        <BrowserRouter>
            <div>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/password-reset" component={Reset} />
              <Route path="/confirmation" component={Confirmation} />
              <Route path="/user/changePassword" component={ChangePassword} />

              <Route path="/student-home" component={StudentHome} />
              <Route path="/teacher-home" component={TeacherHome} />
              <Route path="/admin-home" component={AdminHome} />

              <Route path="/student-calendar" component={StudentCalendar} />
              <Route path="/student-chat" component={StudentChat} />
              <Route path="/student-courses" component={StudentCourses} />
              <Route path="/student-settings" component={StudentSettings} />

              <Route path="/admin-verify-user" component={AdminVerifyUser} />
              <Route path="/admin-new-course" component={AdminAddNewCourse} />
              <Route path="/admin-settings" component={AdminSettings} />
              <Route path="/admin-user-details" component={AdminUserDetails} />
              <Route path="/admin-course-details" component={AdminCourseDetails} />

              <Route path="/courseAssignments093028" component={GenericAssignments} />
              <Route path="/coursesettings930293" component={GenericSettings} />
              <Route path="/coursechat28738" component={GenericChat} />
              <Route path="/coursegrades827398" component={GenericGrades} />
              <Route exact path="/course/:courseCode" component={GenericCourse} />


            </div>
        </BrowserRouter>
   </div>
  );
}

export default App;
