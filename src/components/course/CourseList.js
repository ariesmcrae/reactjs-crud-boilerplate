import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

export default function CourseList({courses}) {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>                
                </tr>
            </thead>

            <tbody>
                {
                    courses.map(course => {
                        <CourseListRow key={course.id} course={course} />;
                    })
                }
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};
