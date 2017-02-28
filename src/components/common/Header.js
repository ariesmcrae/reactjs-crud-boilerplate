import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Spinner from './Spinner';



export default function Header({apiCallsInProgress}) {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>        
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            &nbsp; &nbsp; &nbsp; {apiCallsInProgress && <Spinner interval={100} dots={20}/>}
        </nav>
    );
}



Header.propTypes = {
    apiCallsInProgress: PropTypes.bool.isRequired
};
