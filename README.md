# codingTest2

Coding tests written in node:

-Set in env/local.js:
    in winston:
        -The level of log trace, if set to debug everything will be traced.
        -The name of the log file to write the logs to.

Install dependencies with:
    - npm i
Start app with:
    - node start

This will start server in port 3000:

Examples:
Palindrome:
    http://localhost:3000/palindrome?number=123
    http://localhost:3000/palindrome?number=12321
    http://localhost:3000/palindrome?number=a560989065a
    *If number query param not present return error.
    *In log trace the function writes why the number is not a palindrome, in case of FALSE

K-Complementary:
    http://localhost:3000/kcomplementary?k=10&array=[1,2,-3,8,6,4]
    *returns 4 because: [2,8] [8,2] [6,4] [4,6] are the pairs that sum 10

NOTE: To log into the console or in file, change the desired transport class in modules/logger.js    