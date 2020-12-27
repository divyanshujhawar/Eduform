import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './dino.css';
import './iu.css';
import './bat.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./components/login/login.js";
import Home from "./components/login/home.js";
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
import GenericNotifications from "./components/courses/GenericNotifications.js";
import GenericCourse from "./components/student/GenericCourse.js";
import GenericIndAssignment from "./components/courses/GenericOneAssignment.js";

import TeacherCalendar from "./components/teacher/TeacherCalendar.js";
import TeacherChat from "./components/teacher/TeacherChat.js";
import TeacherCourses from "./components/teacher/Courses.js";
import TeacherSettings from "./components/teacher/TeacherSettings.js";
import GenericCourse2 from "./components/teacher/GenericCourse.js";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path="/sign-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/password-reset" component={Reset} />
                    <Route path="/confirmation" component={Confirmation} />
                    <Route path="/user/changePassword" component={ChangePassword} />

                    <Route path="/student-home" component={StudentHome} />
                    <Route path="/teacher-home" component={TeacherHome} />
                    <Route path="/admin-home" component={AdminHome} />

                    <Route path="/student-courses" component={StudentCourses} />
                    <Route path="/student-chat" component={StudentChat} />
                    <Route path="/student-calendar" component={StudentCalendar} />
                    <Route path="/student-settings" component={StudentSettings} />
                    <Route exact path="/course/:courseCode" component={GenericCourse} />       
                    <Route exact path="/course/:courseCode/assignments" component={GenericAssignments} />
                    <Route exact path="/course/:courseCode/grades" component={GenericGrades} />
                    <Route exact path="/course/:courseCode/announcements" component={GenericNotifications} />
                    <Route path="/course/:courseCode/assignments/:assignmentId" component={GenericIndAssignment} />

                    <Route path="/teacher-calendar" component={TeacherCalendar} />
                    <Route path="/teacher-chat" component={TeacherChat} />
                    <Route path="/teacher-courses" component={TeacherCourses} />
                    <Route path="/teacher-settings" component={TeacherSettings} />
                    <Route exact path="/teacher-course/:courseCode" component={GenericCourse2} />
                    <Route exact path="/teacher-course/:courseCode/assignments" component={GenericAssignments} />

                    <Route path="/admin-verify-user" component={AdminVerifyUser} />
                    <Route path="/admin-new-course" component={AdminAddNewCourse} />
                    <Route path="/admin-settings" component={AdminSettings} />
                    <Route path="/admin-user-details" component={AdminUserDetails} />
                    <Route path="/admin-course-details" component={AdminCourseDetails} />

                    <Route path="/courseAssignments093028" component={GenericAssignments} />
                    <Route path="/coursenotifications930293" component={GenericNotifications} />
                    <Route path="/coursechat28738" component={GenericChat} />
                    <Route path="/coursegrades827398" component={GenericGrades} />
                    <Route path="/course57589433" component={GenericIndAssignment} />


                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
