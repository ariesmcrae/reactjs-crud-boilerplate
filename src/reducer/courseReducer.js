import * as ActionType from '../action/ActionType';
import initialState from './initialState';


export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case ActionType.GET_COURSES_RESPONSE:
            // '...' spread operator clones the state
            // Object assign simply clones action.courses into a new array.
            // The return object is a copy of state and overwrites the state.courses with a fresh clone of action.courses
            return {...state, courses: Object.assign([], action.courses)};

        default: return state;
    }
}
