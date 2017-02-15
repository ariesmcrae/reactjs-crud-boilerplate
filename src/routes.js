import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="courses" component={Courses} />
        <Route path="about" component={About} />
    </Route>
);
