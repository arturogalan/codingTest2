const app = require('../app');
const logger = app.get('logger');
module.exports = {
    getPalindrome: getPalindrome,
    getKComplementary: getKComplementary
};



function getPalindrome(req, res) {
    let paramName = ['number'];
    checkReq(req, res, paramName)
    if (checkPalindrome(req.query['number']))
        res.status(200).end(req.query['number'] + ' is a palindrome')
    else
        res.status(200).end(req.query['number'] + ' is NOT a palindrome')
    return res;
};

//Write an efficient algorithm to check if a string is a palindrome.
// A string is a palindrome if the string matches the reverse of string.
function checkPalindrome(string) {
    for (var i = 0; i < Math.floor(string.length/2) +  (string.length % 2); i++) {
        if (string[i] != string[string.length - 1 - i]) {
            logger.log('debug', 'Is not a palindrome cause: ' + string[i] + ' (pos ' + i + ') ' + 'differs from: ' + string[string.length - 1 - i] + ' (pos ' + (string.length - 1 - i) + ')');
            return false;
        }
    }
    return true
};


function checkReq(req, res, paramsName) {
    if (!req.body) {
        app.logger.log('error', 'Empty body in request');
        res.status(400).end('Empty body in request');
    } else {
        paramsName.forEach(paramName => {
            if (!req.query[paramName]) {
                res.status(400).end(paramName + ' is required in request');
            }
        });
    }
}


function getKComplementary(req, res) {
    let paramsName = ['k', 'array'];
    checkReq(req, res, paramsName)
    res.status(200).end('For the array: ' + req.query['array'] + ', and K = ' + req.query['k'] +
        ', the K complementary pairs are: ' + checkKComplementary(req.query))
    return res;
};

//Write an efficient algorithm to find K-complementary pairs in a given array of integers. 
//Given Array A, pair (i, j) is K- complementary if K = A[i] + A[j];
function checkKComplementary(params) {
    let k = params['k'];
    let array = JSON.parse(params['array']);
    let result = {};
    //Store the number of occurences for each number in array
    array.forEach(elem => {
        result[elem] = -~result[elem];
    });
    let kResult = 0;
    //Search for complementary pairs and the number they appear
    for (elem in result) {
        var othernum = k - elem;
        if (result[othernum]) {
            kResult += result[elem] * result[othernum];
        }
    }
    return kResult;
}

