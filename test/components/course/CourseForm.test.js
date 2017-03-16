import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {CourseForm} from '../../../src/components/course/CourseForm';



function setup(heading) {
    const props = {
        handleSubmit: () => {},
        pristine: true,
        reset: () => {},
        submitting: false,
        heading: heading,
        authors: [],
        handleSave: () => {},
        handleCancel: () => {},
    };

    return shallow(<CourseForm {...props}/>);
}


describe('CourseForm.test.js', () => {

    it('renders form and display "Add" in h1', () => {
        const wrapper = setup('Add');
        expect(wrapper.length).to.equal(1);
        expect(wrapper.find('form').length).to.equal(1);
        expect(wrapper.find('h1').text()).to.equal('Add');
    });


    it('displays "Edit" in h1', () => {
        const wrapper = setup('Edit');
        expect(wrapper.find('h1').text()).to.equal('Edit');
    });

    
});

