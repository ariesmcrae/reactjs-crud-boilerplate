import React from 'react';
import {Link} from 'react-router-dom';
//import reactjsImage from 'reactjs.svg';


export default class Home extends React.Component {
  render() {
    return (
        <div>

            <div className="jumbotron jumbotron-fluid bg-info text-white text-center">
                <div className="container">
                    <h1 className="display-4">ReactJS CRUD Boilerplate</h1>
                    <p className="lead">with mocked backend</p>
                </div>
            </div>

            <div className="container text-muted">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img src="img/reactjs.svg" className="card-img-top img-fluid" />
                            <div className="card-block">
                                <h3 className="card-title">ReactJS</h3>
                                <p>ReactJS/Redux using the ES2015 (ES6) syntax.</p>                                
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img src="/img/reactjs.svg" className="card-img-top img-fluid" />
                            <div className="card-block">
                                <h3 className="card-title">Webpack 2</h3>
                                <p>The quick brown fox jumped over the lazy dawg.</p>                                
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img src="/img/reactjs.svg" className="card-img-top img-fluid" />
                            <div className="card-block">
                                <h3 className="card-title">React-Router 4</h3>
                                <p>The quick brown fox jumped over the lazy dawg.</p>                                
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="card">
                            <img src="/img/reactjs.svg" className="card-img-top img-fluid" />
                            <div className="card-block">
                                <h3 className="card-title">Bootstrap 4</h3>
                                <p>The quick brown fox jumped over the lazy dawg.</p>                                
                            </div>
                        </div>
                    </div>                                        
                </div>

                <h2 className="display-4 text-center py-5 my-4">Features</h2>

                <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                    <a className="nav-link active" href="#rest" data-toggle="tab">Mock REST</a>
                    <a className="nav-link" href="#livereload" data-toggle="tab">Live Reload</a>
                    <a className="nav-link" href="#es2015" data-toggle="tab">ES2015</a>
                    <a className="nav-link" href="#unittests" data-toggle="tab">Unit Tests</a>
                </nav>

                <div className="tab-content py-5" justify-content-center>
                    <div className="tab-pane active" id="rest">
                        <h3>Mock REST</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                           esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                           in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="tab-pane" id="livereload">
                        <h3>Live Reload</h3>
                        <p>aka Hot Module Replacement</p>
                    </div>

                    <div className="tab-pane" id="es2015">
                        <h3>ES2015</h3>
                        <p>aka ES6</p>
                    </div>

                    <div className="tab-pane" id="unittests">
                        <h3>Unit Tests</h3>
                        <p>Mocha, Chai, Enzyme</p>
                    </div>                                                            
                </div>
            </div>


        </div>
    );
  }
}

