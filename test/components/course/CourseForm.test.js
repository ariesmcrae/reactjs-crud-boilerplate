import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CourseForm from '../../../src/components/course/CourseForm';



function setup(heading, isSaving) {
    const props = {
        heading: heading,
        course: {authorId: '1'},
        authors: [],
        errors: {},
        onChange: () => {},
        onSave: () => {},
        onCancel: () => {},
        isSaving: isSaving
    };

    return shallow(<CourseForm {...props}/>);
}


describe('CourseForm.test.js', () => {

    it('renders form and display "Add" in h1', () => {
        const wrapper = setup('Add', false);
        expect(wrapper.find('form').length).to.equal(1);
        expect(wrapper.find('h1').text()).to.equal('Add');
    });


    it('display "Edit" in h1', () => {
        const wrapper = setup('Edit', false);
        expect(wrapper.find('h1').text()).to.equal('Edit');
    });


    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup('Add', false);
        expect(wrapper.find('input').props().value).to.equal('Save');
    });



    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup('Add', true);
        expect(wrapper.find('input').props().value).to.equal('Saving...');
    });
    
});

