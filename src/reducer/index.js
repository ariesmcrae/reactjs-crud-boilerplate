import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    courseReducer,
    authorReducer,
    apiReducer,
    form: formReducer    
});


