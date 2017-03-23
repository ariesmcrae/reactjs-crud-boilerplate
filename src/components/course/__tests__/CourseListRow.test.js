import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CourseListRow from '../CourseListRow';


describe('CourseListRow.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            course: { id: 1, title: 'Java Clean Code' },
            handleDelete: jest.fn()
        };
        
        const wrapper = shallow(<CourseListRow {...props}/>);

        expect(wrapper).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});
