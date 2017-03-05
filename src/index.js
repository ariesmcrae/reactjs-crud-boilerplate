/*eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import App from './components/App';
import './style/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';



const store = configureStore();



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
