import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home Header </h1>
        <p>Home Home Home Home Home Home</p>
        <Link to="about" className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

