const fslogger = require('../modules/logger')
const config = require('../config/env');
const express = require('express');
var app = module.exports = express();
var async = require('async');
var _ = require('lodash');
var logger = app.get('logger');
var bodyParser = require('body-parser');

module.exports.start = function start(port) {

    configureLogger();
    configureExpress(port);
    configureRoutes();
    startServer();
};

function configureLogger() {
    logger = fslogger.configureLogger();
    app.set('logger',logger);
    logger.log('info', 'Initializing app!');
}

/**
  * Function to configure all the features of express node.js framework.
  *
  * @param next Callback function
  */
function configureExpress(port) {
    
    logger.log('info', ' Application is been configured...');
    app.set('port', port);
    app.use(bodyParser.text());
}


    /**
     * Function to configure all the routes.
     *
     * @param next Callback function
     */
    function configureRoutes() {
        app.get('/palindrome', require('../modules/algoritms').getPalindrome);
        app.get('/kcomplementary', require('../modules/algoritms').getKComplementary);
    }


function done(err){
    if (err)
        console.log('error initializing app!: ' + err)
}


    /**
     * Function to start the nodejs server.
     *
     * @param next Callback function
     */
    function startServer() {
        server = require('http').createServer(app).listen(app.get('port'), serverStatus('HTTP'));
        app.get('logger').log('info', " Server is starting...");
    }

 /**
     * Function to get the status of initialization of server.
     *
     * @param protocol HTTP/HTTPS
     * @param next Callback function
     * @returns Function to create the server
     */
    function serverStatus(protocol) {
        return function (err, data) {
            if (err) {
                 app.get('logger').log('info'," - serverStatus - " + protocol
                    + " Server failed at start. ", err);
            } else {
                 app.get('logger').log('info'," - serverStatus - " + protocol
                    + " Server listening on port " + app.get('port'));
            }
           
        };
    }

