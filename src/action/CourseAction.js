import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';


function getCoursesResponse(courses) {
    return {
        type: ActionType.LIST_COURSES_RESPONSE,
        courses
    };
}


export function getCoursesAction() {
    return function(dispatch) {
        console.log('todo');
    };
}
