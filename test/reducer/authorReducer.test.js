import {expect} from 'chai';
import authorReducer from '../../src/reducer/authorReducer';
import * as AuthorAction from '../../src/action/AuthorAction';
import * as ActionType from '../../src/action/ActionType';



describe('authorReducer.test.js', ()  => {

    it(`should get authors when passed ${ActionType.GET_AUTHORS_RESPONSE}`, () => {
        const initialState = {
            authors: []
        };

        const authors = [  
            {
                id: 'josh-bloch',
                firstName: 'Josh',
                lastName: 'Bloch'
            },
            {
                id: 'gavin-king',
                firstName: 'Gavin',
                lastName: 'king'
            }
        ];

        const action = AuthorAction.getAuthorsResponse(authors);

        const newState = authorReducer(initialState, action);

        expect(newState.authors.length).to.equal(2);
        expect(newState.authors[0].id).to.equal('josh-bloch');
    });

});
