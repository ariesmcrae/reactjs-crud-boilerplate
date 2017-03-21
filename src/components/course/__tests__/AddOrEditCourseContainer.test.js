import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AddOrEditCourseContainer} from '../AddOrEditCourseContainer';


describe('AddOrEditCourseContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            action: {
                getCourseAction: jest.fn(),
                getAuthorsAction: jest.fn()
            },
            authors:[],
            initialValues: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
            match: {params: {id:'1'}}
        };

        const wrapper = shallow(<AddOrEditCourseContainer {...props}/>);
        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

});



    
        