import coursesReducer from '../coursesReducer';
import * as CourseAction from '../../action/CourseAction';
import * as ActionType from '../../action/ActionType';



describe('coursesReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' };

        const newState = coursesReducer(initialState, action);

        const expectedState = { courses: [] };

        expect(newState).toEqual(expectedState);
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
