import {expect} from 'chai';
import {authorsFormattedForDropdown} from '../../src/selectors/selectors';

describe('Selectors.test.js', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
            ];

            const expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'scott-allen', text: 'Scott Allen'}
            ];

            expect(authorsFormattedForDropdown(authors)).to.eql(expected);            
        });
    });

});
