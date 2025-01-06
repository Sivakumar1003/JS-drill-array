const each = require('../each.js');
const items = [1, 2, 3, 4, 5, 5];

// create new logic for callback function.
function logic (element) {
    console.log(element * 2);
}

//calling each function.
each(items, logic);