import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

export default function CourseList({courses, handleDelete}) {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>                    
                </tr>
            </thead>

            <tbody>
                {courses.map(course => 
                    <CourseListRow key={course.id} course={course} handleDelete={handleDelete}/>
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
};
