'use strict';

module.exports = {
    server: {
        port: "3000"
    },
    environment: process.env.NODE_ENV || "local",
    winston: {
        level: "debug",
        fileName: "condingTest2.log"
    }
};
