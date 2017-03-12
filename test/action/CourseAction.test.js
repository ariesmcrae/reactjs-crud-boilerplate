import {expect} from 'chai';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as CourseActions from '../../src/action/CourseAction';
import * as ActionType from '../../src/action/ActionType';



describe('CourseActionCreator', () => {

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



const thunkMiddleware = [thunk];
const mockStore = configureMockStore(thunkMiddleware);


describe('getCoursesAction', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should get courses', (done) => {
        // nock Example (note: our API is a mock, so no need to use nock here) :
        //   nock('http://example.com')
        //       .get('/courses')
        //       .reply(200, { body: 
        //           {
        //               course: [ { id: 1, firstName: 'Ben', lastName: 'Stuart' } ]
        //           }
        //       });

        const expectedActions = [
            {type: ActionType.API_CALL_BEGIN},
            {type: ActionType.GET_COURSES_RESPONSE,
             body: {
                courses: [
                    {id: 1, title: 'Java Clean Code'}
                ]
             }
            }
        ];

        const store = mockStore({courses: []}, expectedActions, done);
        store.dispatch(CourseActions.getCoursesAction())
            .then(() => {
                const actions = store.getActions();

                expect(actions[0].type).to.equal(ActionType.API_CALL_BEGIN);
                expect(actions[1].type).to.equal(ActionType.GET_COURSES_RESPONSE);
                done();
            });
    });

});