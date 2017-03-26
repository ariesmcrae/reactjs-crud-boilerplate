import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CourseList from '../CourseList';


describe('CourseList.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            courses: [
                { id: 1, title: 'Java Clean Code' },
                { id: 2, title: 'Java The Good Pards' },                
            ],
            handleRowSelect: jest.fn()            
        };
        
        const wrapper = shallow(<CourseList {...props}/>);

        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('BootstrapTable')).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});
