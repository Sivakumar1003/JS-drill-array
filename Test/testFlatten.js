const flatten = require('../flatten.js');

const nestedArray = [1, [2], [[3]], [[[4]]]];

//calling flatten function.
let result = flatten(nestedArray);
console.log(result);