import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import CourseListRow from '../../../src/components/course/CourseListRow';


describe('CourseListRow.test.js', () => {

    it('renders', () => {
        const props = {
            course: { id: 1, title: 'Java Clean Code' }
        };
        
        const wrapper = shallow(<CourseListRow {...props}/>);

        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('tr')).to.have.length(1);
    });
});
