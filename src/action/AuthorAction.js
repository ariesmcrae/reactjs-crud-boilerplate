import * as ActionType from './ActionType';
import AuthorApi from '../api/AuthorApi';
import {beginApiCallAction} from './ApiAction';


function getAuthorsResponse(authors) {
    return {
        type: ActionType.GET_AUTHORS_RESPONSE,
        authors
    };
}



export function getAuthorsAction() {
    return dispatch => {

        dispatch(beginApiCallAction());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(getAuthorsResponse(authors));
            }).catch(error => {
                throw error;
            });
    };
}
