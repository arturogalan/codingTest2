'use strict';

/**
 * Module dependencies.
 */
var throng = require('throng');

var WORKERS = process.env.WEB_CONCURRENCY || 1;

var app = require('./lib/app');
var config = require('./config/env/local');


start();
function start() {
    var server = app.start(config.server.port);
}

