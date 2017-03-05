import React, {PropTypes} from 'react';
import {NavLink} from 'react-router-dom';
import Spinner from './Spinner';



export default function Header({apiCallsInProgress}) {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>        
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
            &nbsp; &nbsp; &nbsp; {apiCallsInProgress && <Spinner interval={100} dots={20}/>}
        </nav>
    );
}



Header.propTypes = {
    apiCallsInProgress: PropTypes.bool.isRequired
};
