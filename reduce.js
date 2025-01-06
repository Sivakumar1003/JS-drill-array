// function for iterate the array and return single value, function of reduce. 
function reduce(array, callback, startingValue) {
    let index = 0;
    
    // check starting value give or not. it don't initial first value of array.
    if(startingValue === undefined) {
        startingValue = array[0];
        index++;
    }

    // iterate the array and value and startvale to callback function.
    for(; index< array.length; index++) {
        startingValue = callback(startingValue, array[index]);
    }

    //returning the final value.
    return startingValue;
}

module.exports = reduce;
