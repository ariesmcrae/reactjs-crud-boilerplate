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



function addNewCourseResponse(course) {
    return {
        type: ActionType.ADD_NEW_COURSE_RESPONSE,
        course
    };
}


function updateExistingCourseResponse(course) {
    return {
        type: ActionType.UPDATE_EXISTING_COURSE_RESPONSE,
        course
    };
}


export function saveCourseAction(courseBeingAddedOrEdited) {
    return function(dispatch) {

        dispatch(ApiCallBeginAction());

        //if authorId exists, it means that the course is being edited, therefore update it.
        //if authorId doesn't exist, it must therefore be new course that is being added, therefore add it
        return CourseApi.saveCourse(courseBeingAddedOrEdited)
            .then(savedCourse => {
                courseBeingAddedOrEdited.id ? 
                    dispatch(updateExistingCourseResponse(savedCourse))
                    : dispatch(addNewCourseResponse(savedCourse));
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw(error);
            });
    };
}
