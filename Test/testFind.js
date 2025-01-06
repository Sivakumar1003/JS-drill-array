const find = require('../find.js');
const items = [1, 2, 3, 4, 5, 5];

//create new callback function.
function logic (value) {
    return value === 3;
}

//calling find function.
let result = find(items, logic);
console.log(result);