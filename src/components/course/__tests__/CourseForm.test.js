import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {CourseForm} from '../CourseForm';



function setup(heading) {
    const props = {
        handleSubmit: jest.fn(),
        pristine: true,
        reset: jest.fn(),
        submitting: false,
        heading: heading,
        authors: [],
        handleSave: jest.fn(),
        handleCancel: jest.fn(),
    };

    return shallow(<CourseForm {...props}/>);
}


describe('CourseForm.test.js', () => {

    it('renders without crashing', () => {
        const wrapper = setup('Add');
        expect(wrapper.length).toEqual(1);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });


    it('renders form and display "Add" in h1', () => {
        const wrapper = setup('Add');
        expect(wrapper.find('h1').text()).toEqual('Add');
    });


    it('displays "Edit" in h1', () => {
        const wrapper = setup('Edit');
        expect(wrapper.find('h1').text()).toEqual('Edit');
    });

    
});

