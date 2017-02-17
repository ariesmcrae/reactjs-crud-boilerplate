import React, {PropTypes} from 'react';
import Header from './Header';

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

