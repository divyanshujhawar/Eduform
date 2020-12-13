import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Home from './components/dashboard/home.js';

const Routes = () => (
    <Router>
            <Route exact path="/" component={Home} />
    </Router>
);

export default Routes;