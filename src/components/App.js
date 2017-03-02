import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        // if (!this.props.apiCallsInProgress) {
        //     return (
        //         <div>Loading...</div>
        //     );
        // }

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
    //debugger;
    return {
        apiCallsInProgress: state.apiReducer > 0
    };
}

export default connect(mapStateToProps)(App);
