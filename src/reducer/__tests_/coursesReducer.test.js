import coursesReducer from '../coursesReducer';
import * as CourseAction from '../../action/CourseAction';
import * as ActionType from '../../action/ActionType';



describe('coursesReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' }

        const newState = coursesReducer(initialState, action);

        const expectedState = { courses: [] };

        expect(newState).toEqual(expectedState);
    });


    it(`should add course when passed ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
        const initialState = {
            courses: [{title: 'A'}, {title: 'B'}]
        };

        const newCourse = {title: 'C'};

        const action = CourseAction.addNewCourseResponse(newCourse);

        const newState = coursesReducer(initialState, action);

        expect(newState.courses.length).toEqual(3);
        expect(newState.courses[0].title).toEqual('A');
        expect(newState.courses[2].title).toEqual('C');
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

        expect(updatedCourse.title).toEqual('BB');
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.courses.length).toEqual(3);
    });


    it(`should get all courses when passed ${ActionType.GET_COURSES_RESPONSE}`, () => {
        const initialState = {
            courses: []
        };

        const courses = [{id: 1, title: 'A'}, {id: 2, title: 'B'}];

        const action = CourseAction.getCoursesResponse(courses);

        const newState = coursesReducer(initialState, action);

        expect(newState.courses.length).toEqual(2);
        expect(newState.courses[0].id).toEqual(1);
    });    


});
