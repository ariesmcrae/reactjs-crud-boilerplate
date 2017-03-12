import {expect} from 'chai';
import * as ApiActions from '../../src/action/ApiAction';
import * as ActionType from '../../src/action/ActionType';



describe('ApiAction', () => {

    describe('ApiCallBegin', () => {
         it(`should create action ${ActionType.API_CALL_BEGIN}`, () => {
            const expectedAction = {type: ActionType.API_CALL_BEGIN};

            const actualAction = ApiActions.ApiCallBeginAction();
            
            expect(actualAction).to.deep.equal(expectedAction);
         });
    });


    describe('ApiCallError', () => {
         it(`should create action ${ActionType.API_CALL_ERROR}`, () => {
            const expectedAction = {type: ActionType.API_CALL_ERROR};

            const actualAction = ApiActions.ApiCallErrorAction();
            
            expect(actualAction).to.deep.equal(expectedAction);
         });
    });    


});