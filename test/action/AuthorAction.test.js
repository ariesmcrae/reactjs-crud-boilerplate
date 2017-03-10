import {expect} from 'chai';
import * as AuthorActions from '../../src/action/AuthorAction';
import * as ActionType from '../../src/action/ActionType';



describe('AuthorAction', () => {

    describe('getAuthorsResponse', () => {
         it(`should create action ${ActionType.GET_AUTHORS_RESPONSE}`, () => {
            const authors = {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'};
            const expectedAction = {
                type: ActionType.GET_AUTHORS_RESPONSE,
                authors: authors
            };

            const actualAction = AuthorActions.getAuthorsResponse(authors);
            
            expect(actualAction).to.deep.equal(expectedAction);
         });
    });


});