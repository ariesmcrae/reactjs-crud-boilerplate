/*eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {getCoursesAction} from './action/CourseAction';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
