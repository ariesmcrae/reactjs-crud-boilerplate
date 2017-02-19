import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CourseListContainer from './components/course/CourseListContainer';
import ManageCourseContainer from './components/course/ManageCourseContainer';
import About from './components/About';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="courses" component={CourseListContainer} />
        <Route path="course" component={ManageCourseContainer} />                
        <Route path="course/:id" component={ManageCourseContainer} />        
        <Route path="about" component={About} />
    </Route>
);
