import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';
import {ApiCallBeginAction, ApiCallErrorAction} from './ApiAction';

export function getCoursesResponse(courses) {
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



export function addNewCourseResponse() {
    return {
        type: ActionType.ADD_NEW_COURSE_RESPONSE
    };
}


export function updateExistingCourseResponse() {
    return {
        type: ActionType.UPDATE_EXISTING_COURSE_RESPONSE
    };
}


export function saveCourseAction(courseBeingAddedOrEdited) {
    return function(dispatch) {

        dispatch(ApiCallBeginAction());

        //if authorId exists, it means that the course is being edited, therefore update it.
        //if authorId doesn't exist, it must therefore be new course that is being added, therefore add it
        return CourseApi.saveCourse(courseBeingAddedOrEdited)
            .then(() => {
                if (courseBeingAddedOrEdited.id) {
                    dispatch(updateExistingCourseResponse());
                } else {
                    dispatch(addNewCourseResponse());
                }
            }).then(() => {
                 dispatch(getCoursesAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw(error);
            });
    };
}



export function getCourseResponse(courseFound) {
    return {
        type: ActionType.GET_COURSE_RESPONSE,
        course: courseFound 
    };
}



export function getCourseAction(courseId) {
    return(dispatch) => {
        
        dispatch(ApiCallBeginAction());

        return CourseApi.getCourse(courseId)
            .then(course => {
                dispatch(getCourseResponse(course));
            }).catch(error => {
                throw error;
            });
    };
}



export function deleteCourseResponse() {
    return {
        type: ActionType.DELETE_COURSE_RESPONSE
    };
}



export function deleteCourseAction(courseId) {
    return(dispatch) => {
        
        dispatch(ApiCallBeginAction());

        return CourseApi.deleteCourse(courseId)
            .then(() => {
                dispatch(deleteCourseResponse());
            }).then(() => {
                dispatch(getCoursesAction());
            }).catch(error => {
                throw error;
            });
    };
}