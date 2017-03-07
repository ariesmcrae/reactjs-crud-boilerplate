import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import PageNotFound from './common/PageNotFound';
import Home from './Home';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';



const history = createBrowserHistory();



class App extends React.Component {
    render() {
        return (
            <div >
                <Router history={history}>
                    <div>
                        <Header apiCallsInProgress={this.props.apiCallsInProgress}/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/courses" component={CourseListContainer} />
                            <Route exact path="/course" component={AddOrEditCourseContainer} />                
                            <Route path="/course/:id" component={AddOrEditCourseContainer} />        
                            <Route path="/about" component={About} />
                            <Route component={PageNotFound} />
                        </Switch>                        
                    </div>                        
                </Router>
            </div>
        );
  }
}

App.propTypes = {
  apiCallsInProgress: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
    return {
        apiCallsInProgress: state.apiReducer.apiCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);

