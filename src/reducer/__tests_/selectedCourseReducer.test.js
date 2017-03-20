import selectedCourseReducer from '../selectedCourseReducer';
import * as CourseAction from '../../action/CourseAction';
import * as ActionType from '../../action/ActionType';



describe('selectedCourseReducer.test.js', ()  => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' }

        const newState = selectedCourseReducer(initialState, action);

        const expectedState = { course: undefined };

        expect(newState).toEqual(expectedState);
    });


    it(`should get a particular course when passed ${ActionType.GET_COURSE_RESPONSE}`, () => {
        const initialState = {
            course: undefined
        };

        const course = {title: 'B'};

        const action = CourseAction.getCourseResponse(course);

        const newState = selectedCourseReducer(initialState, action);

        expect(newState.course).toEqual(course);
    });

});
