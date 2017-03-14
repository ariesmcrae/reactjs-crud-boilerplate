import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import createBrowserHistory from 'history/createBrowserHistory';
import {CourseListContainer} from '../../../src/components/course/CourseListContainer';


describe('CourseListContainer.test.js', () => {
    let history;

    beforeEach(() => {
      history = createBrowserHistory();
    });


    it('renders', () => {
        const props = {
            courses:[
                {title: 'Java The Good Pards'}
            ],
            action: { getCoursesAction: () => {return Promise.resolve();} },
            history: history
        };
        
        const wrapper = shallow(<CourseListContainer {...props}/>);

        expect(wrapper).to.have.length(1);

        expect(wrapper.find('button')).to.have.length(1);
        expect(wrapper.find('CourseList')).to.have.length(1);
    });
});
