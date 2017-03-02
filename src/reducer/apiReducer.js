import _ from 'lodash';
import * as ActionType from '../action/ActionType';
import initialState from './initialState';



export default function apiReducer(state = initialState.apiReducer.apiCallsInProgress, action) {
    if (action.type == ActionType.API_CALL_BEGIN) {
        return state + 1;

    } else if (isApiCallFinished(action.type) || action.type == ActionType.API_CALL_ERROR) {
        return state - 1;
    }

    return state;
}



function isApiCallFinished(type) {
    return _.endsWith(type, '_RESPONSE');
}
