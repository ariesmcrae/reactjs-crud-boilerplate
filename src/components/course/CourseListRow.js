import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

export default function CourseListRow({course}) {
    return(
        <tr>
            <td><a href={course.watchHref} target="_blank">{course.title}</a></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><Link to={`/course/${course.id}`}><i className="fa fa-pencil" aria-hidden="true"/></Link></td>            
        </tr>
    );    
}

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};
