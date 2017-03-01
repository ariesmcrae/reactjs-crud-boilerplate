import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';
import {ApiCallBeginAction, ApiCallErrorAction} from './ApiAction';

function getCoursesResponse(courses) {
    return {
        type: ActionType.GET_COURSES_RESPONSE,
        courses
    };
}



export function getCoursesAction() {
    return(dispatch) => {
        
        dispatch(ApiCallBeginAction());

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

        dispatch(ApiCallBeginAction());

        return CourseApi.saveCourse(course)
            .then(course => {
                dispatch(saveCourseResponse());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw(error);
            });
    };
}
