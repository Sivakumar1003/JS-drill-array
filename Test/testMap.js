const map = require('../map.js');
const items = [1, 2, 3, 4, 5, 5];

// create new logic for callback function.
function logic(element, index, array) {
    return element*2;
}

//calling map function.
let newItems = map(items, logic);

console.log(newItems);