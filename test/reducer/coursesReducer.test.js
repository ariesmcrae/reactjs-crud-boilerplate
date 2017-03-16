import {expect} from 'chai';
import coursesReducer from '../../src/reducer/coursesReducer';
import * as CourseAction from '../../src/action/CourseAction';
import * as ActionType from '../../src/action/ActionType';



describe('coursesReducer.test.js', ()  => {

    it(`should add course when passed ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
        const initialState = {
            courses: [{title: 'A'}, {title: 'B'}]
        };

        const newCourse = {title: 'C'};

        const action = CourseAction.addNewCourseResponse(newCourse);

        const newState = coursesReducer(initialState, action);

        expect(newState.courses.length).to.equal(3);
        expect(newState.courses[0].title).to.equal('A');
        expect(newState.courses[2].title).to.equal('C');
    });


    it(`should update course when passed ${ActionType.UPDATE_EXISTING_COURSE_RESPONSE}`, () => {
        const initialState = {
            courses: [{id: 1, title: 'A'}, {id: 2, title: 'B'}, {id: 2, title: 'C'}]
        };

        const courseToBeUpdated = {id: 2, title: 'BB'};

        const action = CourseAction.updateExistingCourseResponse(courseToBeUpdated);

        const newState = coursesReducer(initialState, action);

        const updatedCourse = newState.courses.find(course => course.id === courseToBeUpdated.id);
        const untouchedCourse = newState.courses.find(course => course.id === 1);

        expect(updatedCourse.title).to.equal('BB');
        expect(untouchedCourse.title).to.equal('A');
        expect(newState.courses.length).to.equal(3);
    });


    it(`should get all courses when passed ${ActionType.GET_COURSES_RESPONSE}`, () => {
        const initialState = {
            courses: []
        };

        const courses = [{id: 1, title: 'A'}, {id: 2, title: 'B'}];

        const action = CourseAction.getCoursesResponse(courses);

        const newState = coursesReducer(initialState, action);

        expect(newState.courses.length).to.equal(2);
        expect(newState.courses[0].id).to.equal(1);
    });    


});
