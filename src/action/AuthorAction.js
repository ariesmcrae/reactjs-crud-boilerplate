import * as ActionType from './ActionType';
import AuthorApi from '../api/AuthorApi';
import { ApiCallBeginAction } from './ApiAction';


export const getAuthorsResponse = authors => ({
    type: ActionType.GET_AUTHORS_RESPONSE,
    authors
});



export function getAuthorsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(getAuthorsResponse(authors));
            }).catch(error => {
                throw error;
            });
    };
}
