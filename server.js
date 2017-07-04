'use strict';

/**
 * Module dependencies.
 */
var app = require('./lib/app');
var config = require('./config/env/local');


start();

function start() {
    var appInstance = app.start(config.server.port);
}

