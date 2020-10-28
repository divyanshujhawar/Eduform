import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from './AdminNavBar.js';
import { Form, Field } from "@progress/kendo-react-form";


export default function App() {
  const [courseName, setCourseName] = React.useState("");
  const [instructorEmail, setInstructorEmail] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      courseName: ${courseName}
      instructorEmail: ${instructorEmail}
    `);
    
    event.preventDefault();
  }

  return (
    <div className="backGroundSAT">
      <div >
        <AdminNavBar/>
      </div>

      <div className='courseForm'>
        <form onSubmit={handleSubmit}>
          <h1>Add new course</h1>

          <label>
            Course Name:
            <input
              name="courseName"
              type="text"
              value={courseName}
              onChange={e => setCourseName(e.target.value)}
              required />
          </label>
          
          <label>
            Instructor Email:
            <input
              name="instructorEmail"
              type="email"
              value={instructorEmail}
              onChange={e => setInstructorEmail(e.target.value)}
              required />
          </label>

          

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
