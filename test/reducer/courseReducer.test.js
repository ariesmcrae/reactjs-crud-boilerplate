import {expect} from 'chai';
import courseReducer from '../../src/reducer/courseReducer';
import * as CourseActions from '../../src/action/CourseAction';
import * as ActionType from '../../src/action/ActionType';



describe('courseReducer', ()  => {

    it(`should add course when passed ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
        const initialState = {
            courses: [{title: 'A'}, {title: 'B'}]
        };

        const newCourse = {title: 'C'};

        const action = CourseActions.addNewCourseResponse(newCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.courses.length).to.equal(3);
        expect(newState.courses[0].title).to.equal('A');
        expect(newState.courses[2].title).to.equal('C');
    });


    it(`should update course when passed ${ActionType.UPDATE_EXISTING_COURSE_RESPONSE}`, () => {
        const initialState = {
            courses: [{id: 1, title: 'A'}, {id: 2, title: 'B'}]
        };

        const updatedCourse = {id: 2, title: 'C'};

        const action = CourseActions.updateExistingCourseResponse(updatedCourse);

        const newState = courseReducer(initialState, action);

        expect(newState.courses.length).to.equal(2);
        expect(newState.courses[0].title).to.equal('A');
        expect(newState.courses[1].title).to.equal('C');
    });


});