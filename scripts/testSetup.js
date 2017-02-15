// This file is written in ES5/CommonJS sice it's not transpiled by Babel.

/* eslint-disable no-var*/

/* This setting assures the .babelrc dev config doesn't apply for tests.
   Also, we don't want to set it to production here for two reasons:
   1. You won't see any PropType validation warnings when code is running in prod mode.
   2. Tests will not display detailed error messages when running against production version code
 */
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5 before our tests run.
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand.
// If Mocha sees this, then just treat it as an empty function.
require.extensions['.css'] = function() {};
require.extensions['.png'] = function() {};
require.extensions['.jpg'] = function() {};

// Configure JSDOM and set global variables to simulate a browser environment for tests.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
