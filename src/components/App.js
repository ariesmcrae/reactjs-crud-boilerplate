import React, {PropTypes} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
//import AddOrEditCourseContainer from './course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import AddCourseContainer from './course/AddCourseContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default



const history = createBrowserHistory();



export default class App extends React.Component {
    render() {
        return (
            <div >
                <Router history={history}>
                    <div>
                        
                        <HeaderNavContainer/>
                        
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/courses" component={CourseListContainer}/>
                            <Route exact path="/course" component={AddCourseContainer}/>                
                            <Route path="/course/:id" component={AddCourseContainer}/>
                            <Route path="/about" component={About}/>                            
                            <Route component={PageNotFound}/>
                        </Switch>                        

                    </div>                        

                </Router>
            </div>
        );
  }
}
