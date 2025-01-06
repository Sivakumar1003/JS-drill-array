// function for iterate the array and return array, function of map. 
function map(array, callback) {
    // create the new array.
    const mappedArray = [];

    // iteratee the array and call the function one by one.
    for(let index=0; index < array.length; index++) {
        let value = callback(array[index], index, array);
        mappedArray.push(value);
    }

    // returning new array.
    return mappedArray;
}

module.exports = map;