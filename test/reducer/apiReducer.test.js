import {expect} from 'chai';
import apiReducer from '../../src/reducer/apiReducer';
import * as ApiAction from '../../src/action/ApiAction';
import * as CourseAction from '../../src/action/CourseAction';
import * as ActionType from '../../src/action/ActionType';



describe('courseReducer', ()  => {

    it(`should increment apiCallsInProgress when passed ${ActionType.API_CALL_BEGIN}`, () => {
        const initialState = {
            apiCallsInProgress: 0
        };

        const action = ApiAction.ApiCallBeginAction();

        const newState = apiReducer(initialState, action);

        expect(newState.apiCallsInProgress).to.equal(1);
    });


    it(`should decrement apiCallsInProgress when passed ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
        const initialState = {
            apiCallsInProgress: 3
        };

        const action = CourseAction.addNewCourseResponse({});

        const newState = apiReducer(initialState, action);

        expect(newState.apiCallsInProgress).to.equal(2);
    });


    it(`should decrement apiCallsInProgress when passed ${ActionType.API_CALL_ERROR}`, () => {
        const initialState = {
            apiCallsInProgress: 4
        };

        const action = ApiAction.ApiCallErrorAction();

        const newState = apiReducer(initialState, action);

        expect(newState.apiCallsInProgress).to.equal(3);
    });    
});
