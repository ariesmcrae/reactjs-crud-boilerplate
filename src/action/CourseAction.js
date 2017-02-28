import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';
import {beginApiCallAction} from './ApiAction';

function getCoursesResponse(courses) {
    return {
        type: ActionType.GET_COURSES_RESPONSE,
        courses
    };
}



export function getCoursesAction() {
    return(dispatch) => {
        
        dispatch(beginApiCallAction());

        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(getCoursesResponse(courses));
            }).catch(error => {
                throw error;
            });
    };
}



function saveCourseResponse() {
    return {
        type: ActionType.SAVE_COURSE_RESPONSE
    };
}


export function saveCourseAction(course) {
    return function(dispatch) {

        dispatch(beginApiCallAction());

        return CourseApi.saveCourse(course)
            .then(course => {
                dispatch(saveCourseResponse());
            }).catch(error => {
                throw(error);
            });
    };
}
