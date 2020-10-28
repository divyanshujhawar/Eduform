import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrap from '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import Semantic from 'semantic-ui-css/semantic.min.css';
import Personal from '../../assets/cat.jpg';
import AdminNavBar from './AdminNavBar.js';


const AdminSettings = () => {
  return(
<div className="backGroundSAT">
    <AdminNavBar/>
</div>
  );
};

export default AdminSettings;