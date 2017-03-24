/* 
    This contains references to all vendor libs, so that they can be cached until one of them change.
    This is used by webpack in production build only.
    These vendor libs are unlikely to change as often as the app code.
*/

/* eslint-disable no-unused-vars*/

import React, {PropTypes} from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import {bindActionCreators, applyMiddleware, createStore} from 'redux';

import {connect, Provider} from 'react-redux';

import { Field, reduxForm } from 'redux-form';

import thunk from 'redux-thunk';

import {render} from 'react-dom';

import _ from 'lodash';

import toastr from 'toastr';

import 'jquery';
