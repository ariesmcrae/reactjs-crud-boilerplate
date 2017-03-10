import {expect} from 'chai';
import * as CourseActions from '../../src/action/CourseAction';
import * as ActionType from '../../src/action/ActionType';



describe('CourseAction', () => {

    describe('addNewCourseResponse', () => {
         it(`should create action ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
            const course = {title: 'Learn reactjs redux'};
            const expectedAction = {
                type: ActionType.ADD_NEW_COURSE_RESPONSE,
                course: course
            };

            const actualAction = CourseActions.addNewCourseResponse(course);
            
            expect(actualAction).to.deep.equal(expectedAction);
         });
    });


});