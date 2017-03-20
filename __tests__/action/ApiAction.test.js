import * as ApiActions from '../../src/action/ApiAction';
import * as ActionType from '../../src/action/ActionType';



describe('ApiAction.test.js', () => {

    describe('ApiCallBeginAction Creator', () => {
         it(`should create action ${ActionType.API_CALL_BEGIN}`, () => {
            const expectedAction = {type: ActionType.API_CALL_BEGIN};

            const actualAction = ApiActions.ApiCallBeginAction();
            
            expect(actualAction).toEqual(expectedAction);
         });
    });


    describe('ApiCallErrorAction Creator', () => {
         it(`should create action ${ActionType.API_CALL_ERROR}`, () => {
            const expectedAction = {type: ActionType.API_CALL_ERROR};

            const actualAction = ApiActions.ApiCallErrorAction();
            
            expect(actualAction).toEqual(expectedAction);
         });
    });    


});