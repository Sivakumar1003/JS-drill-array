const reduce = require('../reduce.js');
const items = [1, 2, 3, 4, 5, 5];

//create new callback function.
function logic (sum, value) {
    return sum + value;
}

// without initial value.
let result1  = reduce(items, logic);
console.log("Without initial value: " + result1);

// initial value given as 100.
let result2  = reduce(items, logic,  100);
console.log("With initial value : " + result2);