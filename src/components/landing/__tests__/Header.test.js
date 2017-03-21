import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header';


describe('Header.test.js', () => {

    it('renders without crashing', () => {
        
        const wrapper = shallow(<Header />);

        expect(wrapper).toHaveLength(1);

        expect(wrapper.find('header')).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();        
        
    });
});
