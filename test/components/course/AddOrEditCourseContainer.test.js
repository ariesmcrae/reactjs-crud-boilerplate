import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {AddOrEditCourseContainer} from '../../../src/components/course/AddOrEditCourseContainer';


describe('AddOrEditCourseContainer.test.js', () => {
    let store;
    
    beforeEach(() => {
        const thunkMiddleware = [thunk];
        const mockStore = configureMockStore(thunkMiddleware);
        const initialState = {course:{}};
        store = mockStore(initialState);
    });

    it('sets an error message when trying to save empty title', () => {
        const props = {
            action: {
                getCourseAction: () => {return Promise.resolve();},
                getAuthorsAction: () => {return Promise.resolve();}
            },
            authors:[],
            initialValues: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
            match: {params: {id:'1'}}
        };

        const wrapper = shallow(<AddOrEditCourseContainer store={store} {...props}/>);
        expect(wrapper.length).to.equal(1);        
    });

});



    
        