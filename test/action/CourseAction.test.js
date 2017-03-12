import { expect } from 'chai';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as CourseActions from '../../src/action/CourseAction';
import * as ActionType from '../../src/action/ActionType';



describe('CourseAction.test.js', () => {

    describe('getCoursesResponseActionCreator', () => {
        it(`should create action ${ActionType.GET_COURSES_RESPONSE}`, () => {
            const courses = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.GET_COURSES_RESPONSE,
                courses: courses
            };

            const actualAction = CourseActions.getCoursesResponse(courses);

            expect(actualAction).to.deep.equal(expectedAction);
        });
    });


    describe('addNewCourseResponseActionCreator', () => {
        it(`should create action ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
            const course = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.ADD_NEW_COURSE_RESPONSE,
                course: course
            };

            const actualAction = CourseActions.addNewCourseResponse(course);

            expect(actualAction).to.deep.equal(expectedAction);
        });
    });


    describe('updateExistingCourseResponseActionCreator', () => {
        it(`should create action ${ActionType.UPDATE_EXISTING_COURSE_RESPONSE}`, () => {
            const course = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.UPDATE_EXISTING_COURSE_RESPONSE,
                course: course
            };

            const actualAction = CourseActions.updateExistingCourseResponse(course);

            expect(actualAction).to.deep.equal(expectedAction);
        });
    });


    const thunkMiddleware = [thunk];
    const mockStore = configureMockStore(thunkMiddleware);


    describe('getCoursesActionThunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should get all courses', (done) => {
            // nock Example (note: our API is a mock, so no need to use nock here) :
            //   nock('http://example.com')
            //       .get('/courses')
            //       .reply(200, { body: 
            //           {
            //               course: [ { id: 1, firstName: 'Ben', lastName: 'Stuart' } ]
            //           }
            //       });

            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.GET_COURSES_RESPONSE,
                    body: {
                        courses: [
                            { id: 1, title: 'Java Clean Code' }
                        ]
                    }
                }
            ];

            const store = mockStore({ courses: [] }, expectedActions, done);
            store.dispatch(CourseActions.getCoursesAction())
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).to.equal(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).to.equal(ActionType.GET_COURSES_RESPONSE);
                    done();
                });
        });

    });


    describe('saveCourseActionThunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should update existing course', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.UPDATE_EXISTING_COURSE_RESPONSE,
                    body: {
                        course: [
                            { id: 1, title: 'Java Clean Code' }
                        ]
                    }
                }
            ];

            const store = mockStore({ course: [] }, expectedActions, done);
            const course = { id: 1, title: 'Learn reactjs redux' };            
            store.dispatch(CourseActions.saveCourseAction(course))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).to.equal(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).to.equal(ActionType.UPDATE_EXISTING_COURSE_RESPONSE);
                    done();
                });
        });


        it('should add a new course', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.ADD_NEW_COURSE_RESPONSE,
                    body: {
                        course: [
                            { title: 'Java Clean Code' }
                        ]
                    }
                }
            ];

            const store = mockStore({ course: [] }, expectedActions, done);
            const course = { title: 'Learn reactjs redux' };            
            store.dispatch(CourseActions.saveCourseAction(course))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).to.equal(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).to.equal(ActionType.ADD_NEW_COURSE_RESPONSE);
                    done();
                });
        });        

    });    


});



