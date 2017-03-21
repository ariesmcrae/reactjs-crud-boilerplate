import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Section from '../Section';


describe('Section.test.js', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Section/>);

        expect(wrapper).toHaveLength(1);

        expect(wrapper.find('section')).toHaveLength(1);
        expect(wrapper.find('.card')).toHaveLength(4);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();           
    });
});
