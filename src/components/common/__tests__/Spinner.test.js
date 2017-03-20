import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from '../Spinner';



describe('Spinner.test.js', () => {
    let wrapper = undefined;

    beforeEach(() => {
        wrapper = shallow(<Spinner/>);
        return wrapper;
    });


    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });


    it('renders as expected', () => {
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });    
});
