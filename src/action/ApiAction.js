import * as ActionType from './ActionType';



export function ApiCallBeginAction() {
    return {
        type: ActionType.API_CALL_BEGIN
    };
}



export function ApiCallErrorAction() {
    return {
        type: ActionType.API_CALL_ERROR
    };
}


