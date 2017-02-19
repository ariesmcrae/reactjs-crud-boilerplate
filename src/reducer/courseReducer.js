import * as Actiontype from '../action/ActionType';


const initialState = { courses:[] };


export default function courseReducer(state = initialState, action) {
    switch(action.type) {
        case Actiontype.LIST_COURSES_RESPONSE:
            return {...state, courses: action.courses};

        default: return state;
    }
}
