import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    courseReducer,
    authorReducer,
    apiReducer
});


