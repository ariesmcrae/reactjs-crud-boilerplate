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



export function saveCourseAction(course) {
    return function(dispatch) {
        return CourseApi.saveCourse(course)
            .catch(error => {
                throw(error);
            });
    };
}
