import apiReducer from '../apiReducer';
import * as ActionType from '../../action/ActionType';
import * as ApiAction from '../../action/ApiAction';
import * as CourseAction from '../../action/CourseAction';



describe('apiReducer.test.js', () => {

    it('has a default state', () => {
        const initialState = undefined;
        const action = { type: 'blah blah' }

        const newState = apiReducer(initialState, action);

        const expectedState = { apiCallsInProgress: 0 };

        expect(newState).toEqual(expectedState);
    });


    it(`has apiCallsInProgress = 1 when passed ${ActionType.API_CALL_BEGIN}`, () => {
        const state = { apiCallsInProgress: 0 };
        const action = ApiAction.ApiCallBeginAction();

        const newState = apiReducer(state, action);

        const expectedState = { apiCallsInProgress: 1 };

        expect(newState).toEqual(expectedState);
    });


    it(`has apiCallsInProgress = 0 when passed ${ActionType.GET_COURSE_RESPONSE}`, () => {
        const state = { apiCallsInProgress: 1 };
        const action = CourseAction.getCourseResponse();

        const newState = apiReducer(state, action);

        const expectedState = { apiCallsInProgress: 0 };

        expect(newState).toEqual(expectedState);
    });


    it(`has apiCallsInProgress = 0 when passed ${ActionType.API_CALL_ERROR}`, () => {
        const state = { apiCallsInProgress: 1 };
        let action = ApiAction.ApiCallErrorAction();

        const newState = apiReducer(state, action);

        const expectedState = { apiCallsInProgress: 0 };

        expect(newState).toEqual(expectedState);
    });

});