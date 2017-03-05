import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, eos mutat liber interesset ut, id repudiare deseruisse eum.</p>
        <Link to="/about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

