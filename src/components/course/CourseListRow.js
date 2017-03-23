import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';



const style = {
    cursor:'pointer'
};


export default function CourseListRow({course, handleDelete}) {
    return(
        <tr>
            <td><a href={course.watchHref} target="_blank">{course.title}</a></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><Link to={`/course/${course.id}`}><i className="fa fa-pencil" aria-hidden="true"/></Link></td>
            <td><i className="fa fa-trash-o" aria-hidden="true" style={style} value={course.id} onClick={handleDelete}/></td>
        </tr>
    );    
}
		



CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
