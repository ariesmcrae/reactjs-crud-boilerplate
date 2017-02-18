import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default function CourseListRow({course}) {
    return(
        <tr>
            <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );    
}

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};
