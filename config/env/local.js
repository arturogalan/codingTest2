'use strict';

module.exports = {
    server: {
        port: "3000"
    },
    environment: process.env.NODE_ENV || "local",
    winston: {
        level: "debug",
        fileName: "codingTest2.log"
    },
    fsreader: {
        path: "./tmp"
    },
    fsparser: {
        regexp: ""
    },
    kafka: {
        connectionString: process.env.KAFKA_URL || 'localhost:9092',
        retries: {
            attempts: process.env.KAFKA_ATTEMPTS || 3
        },
        topic: process.env.KAFKA_TOPIC || 'templogfiles'
    }
    
};
