import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';


function getCoursesResponse(courses) {
    return {
        type: ActionType.LIST_COURSES_RESPONSE,
        courses
    };
}



export function getCoursesAction() {
    return(dispatch) => {
        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(getCoursesResponse(courses));
            }).catch(error => {
                throw(error);
            });
    };
}



function updateCourseResponse(course) {
    return {
        type: ActionType.UPDATE_COURSE_RESPONSE,
        course
    };
}



export function saveCourseAction(course) {
    return function(dispatch) {
        return CourseApi.saveCourse(course)
            .catch(error => {
                throw(error);
            });
    };
}
