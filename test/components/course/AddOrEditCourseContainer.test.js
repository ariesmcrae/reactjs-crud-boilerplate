import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {AddOrEditCourseContainer} from '../../../src/components/course/AddOrEditCourseContainer';


describe('AddOrEditCourseContainer.test.js', () => {

    it('sets an error message when trying to save empty title', () => {
        const props = {
            authors:[],
            action: {getAuthorsAction: () => {return Promise.resolve();}},
            course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
        };

        const wrapper = mount(<AddOrEditCourseContainer {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).to.equal('submit');        

        saveButton.simulate('click');
        expect(wrapper.state().errors.title).to.equal('Title must be at least 5 characters.');
    });

});



    
        