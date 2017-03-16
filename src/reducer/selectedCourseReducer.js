import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


export default function selectedCourseReducer(state = initialState.selectedCourseReducer, action) {
    switch(action.type) {

        case ActionType.GET_COURSE_RESPONSE: {
            return {
                ...state,
                course: _.assign(action.course)
            };
        }


        default: { return state; }
    }
}
