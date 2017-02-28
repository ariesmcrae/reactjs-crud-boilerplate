import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';

export default combineReducers({
    courseReducer,
    authorReducer
});


