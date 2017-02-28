import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



export default function apiReducer(state = initialState.apiCallsInProgress, action) {
    if (action.type == ActionType.BEGIN_API_CALL) {
        return state + 1;
    } else if (isApiCallFinished(action.type)) {
        return state - 1;
    }

    return state;
}



function isApiCallFinished(type) {
    return _.endsWith(type, '_RESPONSE');
}
