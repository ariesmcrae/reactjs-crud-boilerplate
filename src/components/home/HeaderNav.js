import React, {PropTypes} from 'react';
import {NavLink} from 'react-router-dom';
import Spinner from '../common/Spinner';



export default function Header({apiCallsInProgress}) {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active" to="/" activeClassName="active">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/courses" activeClassName="active">Courses</NavLink>        
                        <NavLink className="nav-item nav-link" to="/about" activeClassName="active">About</NavLink>

                        &nbsp; &nbsp; &nbsp; {apiCallsInProgress && <Spinner className="nav-item nav-link" interval={100} dots={20}/>}
                    </div>
                </div>
            </div>
        </nav>
    );
}



Header.propTypes = {
    apiCallsInProgress: PropTypes.bool.isRequired
};
