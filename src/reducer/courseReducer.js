import * as Actiontype from '../action/ActionType';


const initialState = { };


export default function courseReducer(state = initialState, action) {
    switch(action.type) {
        case Actiontype.LIST_COURSES_RESPONSE:
            return action.courses;

        default: return state;
    }
}
