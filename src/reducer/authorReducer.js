import * as ActionType from '../action/ActionType';
import initialState from './initialState';



export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case ActionType.GET_AUTHORS_RESPONSE:
            return {...state, authors: Object.assign([], action.authors)};

        default: return state;
    }
}
