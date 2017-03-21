import authorReducer from '../authorReducer';
import * as AuthorAction from '../../action/AuthorAction';
import * as ActionType from '../../action/ActionType';



describe('authorReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' }

        const newState = authorReducer(initialState, action);

        const expectedState = { authors: [] };

        expect(newState).toEqual(expectedState);
    });


    it(`should get authors when passed ${ActionType.GET_AUTHORS_RESPONSE}`, () => {
        const initialState = {
            authors: []
        };

        const authors = [  
            {
                id: 'josh-bloch',
                firstName: 'Josh',
                lastName: 'Bloch'
            }, {
                id: 'gavin-king',
                firstName: 'Gavin',
                lastName: 'king'
            }
        ];

        const action = AuthorAction.getAuthorsResponse(authors);

        const newState = authorReducer(initialState, action);

        expect(newState.authors.length).toEqual(2);
        expect(newState.authors[0].id).toEqual('josh-bloch');
    });

});
