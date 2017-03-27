import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import createMemoryHistory from 'history/createMemoryHistory';
import { CourseListContainer } from '../CourseListContainer';


describe('CourseListContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            courses: [
                { title: 'Java The Good Pards' }
            ],
            action: { getCoursesAction: jest.fn() },
            history: createMemoryHistory()
        };

        const wrapper = shallow(<CourseListContainer {...props} />);

        expect(wrapper).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();

        expect(wrapper.find('button')).toHaveLength(3);
    });

  
});

