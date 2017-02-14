// This file isn't transpiled, so you must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand.
// If Mocha sees this, then just treat it as an empty function.
require.extensions['.css'] = function() {};
