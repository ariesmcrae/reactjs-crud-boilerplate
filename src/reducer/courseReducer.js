import * as Actiontype from '../action/ActionType';


const initialState = { };


export default function courseReducer(state = initialState, action) {
    switch(action.type) {
        case Actiontype.LIST_COURSES_RESPONSE:
            console.log('xxxxxxxx courseReducerlenght=' + action.courses.length);
            return [
                ...state, Object.assign({}, action.courses)
            ];

        default: return state;
    }
}
