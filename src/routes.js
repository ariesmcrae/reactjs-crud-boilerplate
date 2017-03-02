import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import CourseListContainer from './components/course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './components/course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import About from './components/About';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="courses" component={CourseListContainer} />
        <Route path="course" component={AddOrEditCourseContainer} />                
        <Route path="course/:id" component={AddOrEditCourseContainer} />        
        <Route path="about" component={About} />
    </Route>
);
