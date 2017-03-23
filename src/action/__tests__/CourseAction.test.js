import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as CourseActions from '../CourseAction';
import * as ActionType from '../ActionType';



describe('CourseAction.test.js', () => {

    describe('getCoursesResponseAction Creator', () => {
        it(`should create action ${ActionType.GET_COURSES_RESPONSE}`, () => {
            const courses = [{ title: 'Learn reactjs redux' }];
            const expectedAction = {
                type: ActionType.GET_COURSES_RESPONSE,
                courses: courses
            };

            const actualAction = CourseActions.getCoursesResponse(courses);

            expect(actualAction).toEqual(expectedAction);
        });
    });


    describe('addNewCourseResponseAction Creator', () => {
        it(`should create action ${ActionType.ADD_NEW_COURSE_RESPONSE}`, () => {
            const course = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.ADD_NEW_COURSE_RESPONSE
            };

            const actualAction = CourseActions.addNewCourseResponse(course);

            expect(actualAction).toEqual(expectedAction);
        });
    });


    describe('updateExistingCourseResponseAction Creator', () => {
        it(`should create action ${ActionType.UPDATE_EXISTING_COURSE_RESPONSE}`, () => {
            const course = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.UPDATE_EXISTING_COURSE_RESPONSE
            };

            const actualAction = CourseActions.updateExistingCourseResponse(course);

            expect(actualAction).toEqual(expectedAction);
        });
    });


    describe('getCourseResponseAction Creator', () => {
        it(`should create action ${ActionType.GET_COURSE_RESPONSE}`, () => {
            const course = { title: 'Learn reactjs redux' };
            const expectedAction = {
                type: ActionType.GET_COURSE_RESPONSE,
                course: course
            };

            const actualAction = CourseActions.getCourseResponse(course);

            expect(actualAction).toEqual(expectedAction);
        });
    });



    describe('deleteCourseResponseAction Creator', () => {
        it(`should create action ${ActionType.DELETE_COURSE_RESPONSE}`, () => {
            const expectedAction = {
                type: ActionType.DELETE_COURSE_RESPONSE
            };

            const actualAction = CourseActions.deleteCourseResponse();

            expect(actualAction).toEqual(expectedAction);
        });
    });



    const thunkMiddleware = [thunk];
    const mockStore = configureMockStore(thunkMiddleware);


    describe('getCoursesAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should get all courses', (done) => {
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

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.GET_COURSES_RESPONSE);
                    done();
                });
        });

    });


    describe('saveCourseAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should update existing course', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                { type: ActionType.UPDATE_EXISTING_COURSE_RESPONSE}
            ];

            const store = mockStore({ course: [] }, expectedActions, done);
            const course = { id: 1, title: 'Learn reactjs redux' };
            store.dispatch(CourseActions.saveCourseAction(course))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.UPDATE_EXISTING_COURSE_RESPONSE);
                    done();
                });
        });


        it('should add a new course', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                { type: ActionType.ADD_NEW_COURSE_RESPONSE}
            ];

            const store = mockStore({ course: [] }, expectedActions, done);
            const course = { title: 'Learn reactjs redux' };
            store.dispatch(CourseActions.saveCourseAction(course))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.ADD_NEW_COURSE_RESPONSE);
                    done();
                });
        });

    });



    describe('getCourseAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should get a specific courses', (done) => {
            const findThisCourse = { id: 1, title: 'Java Clean Code' };

            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.GET_COURSE_RESPONSE,
                    body: {
                        course: findThisCourse
                    }
                }
            ];

            const store = mockStore({ course: {} }, expectedActions, done);
            store.dispatch(CourseActions.getCourseAction(1))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.GET_COURSE_RESPONSE);
                    done();
                });
        });
    });    



    describe('deleteCourseAction Thunk', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should delete a specific course', (done) => {
            const expectedActions = [
                { type: ActionType.API_CALL_BEGIN },
                {
                    type: ActionType.DELETE_COURSE_RESPONSE
                }
            ];

            const store = mockStore({ course: {} }, expectedActions, done);
            store.dispatch(CourseActions.deleteCourseAction(1))
                .then(() => {
                    const actions = store.getActions();

                    expect(actions[0].type).toEqual(ActionType.API_CALL_BEGIN);
                    expect(actions[1].type).toEqual(ActionType.DELETE_COURSE_RESPONSE);
                    done();
                });
        });
    });    



});


