import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Courses from './components/course/CourseListContainer';
import About from './components/About';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="courses" component={Courses} />
        <Route path="about" component={About} />
    </Route>
);
