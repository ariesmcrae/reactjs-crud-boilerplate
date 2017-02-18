import * as ActionType from './ActionType';
import CourseApi from '../api/CourseApi';


function getCoursesResponse(courses) {
    return {
        type: ActionType.LIST_COURSES_RESPONSE,
        courses
    };
}


export function getCoursesAction() {
    console.log('xxxxxxxxaction1 getCoursesAction');
    return(dispatch) => {
    console.log('xxxxxxxxaction2 getCoursesAction');        
        return CourseApi.getAllCourses()
            .then(courses => {
                console.log('xxxxxxxxaction3 getCoursesAction');                        
                dispatch(getCoursesResponse(courses));
                console.log('xxxxxxxxaction4 getCoursesAction');                                        
            }).catch(error => {
                throw(error);
            });
    };
}
