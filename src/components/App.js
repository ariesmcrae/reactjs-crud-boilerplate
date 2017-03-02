import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header apiCallsInProgress={this.props.apiCallsInProgress}/>
                {this.props.children}
            </div>
        );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  apiCallsInProgress: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
    return {
        apiCallsInProgress: state.apiReducer.apiCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
