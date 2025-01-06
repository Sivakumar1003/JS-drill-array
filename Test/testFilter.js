const filter = require('../filter.js');
const items = [1, 2, 3, 4, 5, 5];

//create new callback function.
function logic (value) {
    return value % 2 !== 0;
}

//calling find function.
let result = filter(items, logic);
console.log(result);