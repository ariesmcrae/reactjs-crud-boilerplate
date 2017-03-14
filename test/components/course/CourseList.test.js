import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import CourseList from '../../../src/components/course/CourseList';


describe('CourseList.test.js', () => {

    it('renders', () => {
        const props = {
            courses: [
                { id: 1, title: 'Java Clean Code' },
                { id: 2, title: 'Java The Good Pards' },                
            ]
        };
        
        const wrapper = shallow(<CourseList {...props}/>);

        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('CourseListRow')).to.have.length(2);        
    });
});
